#!/usr/bin/env node
/*
 * Gate fuer die statische Seite. `npm run gates`
 *
 * WARUM ES DAS GIBT, 01.09.2026. Das Bewerbungsrepo hat einundzwanzig
 * Pruefungen gegen das fertige PDF, diese Seite hatte keine einzige. Am
 * 01.09.2026 stand deshalb `font-size: var(--schrift-2)` im Stilblock, eine
 * Stufe, die es im Tokenpaket nicht gibt. Die Regel lief ins Leere, der
 * Anspruchssatz blieb klein, und nichts hat gemeldet. Genau das ist der Fall,
 * den die zwoelfte Pruefung drueben abfaengt: ein Wert, der nicht aus dem
 * System stammt.
 *
 * Geprueft wird am gerenderten Ergebnis, nicht am Quelltext. Siehe die Regel
 * "Am PDF messen, nicht am CSS".
 */
import { chromium } from "playwright";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const seite = process.argv[2] || "index.html";
let fehler = 0;
const pruef = (ok, name, zusatz = "") => {
  if (!ok) fehler++;
  console.log(`  ${ok ? "ok  " : "FEHL"} ${name}${zusatz ? "  " + zusatz : ""}`);
};

const html = readFileSync(resolve(wurzel, seite), "utf8");
// Der Stil einer Seite steht nicht nur im <style>-Block. impressum.html holt
// ihn aus styles.css, und am 02.09.2026 meldete diese Pruefung deshalb vier
// Klassen als regellos, die alle eine Regel hatten. Erst die Pruefung
// verdaechtigen. Verlinkte Bogen aus dem Repo kommen dazu, entfernte nicht.
const gebunden = [...html.matchAll(/<link[^>]+href="(?!https?:)([^"]+\.css)"/g)]
  .map(m => resolve(wurzel, m[1]))
  .filter(f => existsSync(f))
  .map(f => readFileSync(f, "utf8"))
  .join("\n");
const eigen = (html.match(/<style>([\s\S]*?)<\/style>/) || [, ""])[1];
// Kommentare raus, bevor Regeln gesammelt werden: am 01.10.2026 zaehlte
// ".heben" in einem Kommentar als Regel fuer eine Klasse, die keine hatte.
const stil = (eigen + "\n" + gebunden).replace(/\/\*[\s\S]*?\*\//g, "");
console.log(`\nGate: ${seite}\n`);

/* 1. Nur Werte aus dem System. */
const tokens = readFileSync(resolve(wurzel, "tokens.css"), "utf8");
const da = new Set([...tokens.matchAll(/(--[\w-]+)\s*:/g), ...stil.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]));
const ohne = [...new Set([...stil.matchAll(/var\((--[\w-]+)/g)].map(m => m[1]))].filter(t => !da.has(t));
pruef(ohne.length === 0, "Nur Werte aus dem System", ohne.length ? ohne.join(", ") : `${da.size} Tokens`);

/* 2. Jede Klasse im Markup hat eine Regel, jede Regel einen Gegenstand. */
const markup = html.replace(eigen, "");
const benutzt = new Set([...markup.matchAll(/class="([^"]+)"/g)].flatMap(m => m[1].split(/\s+/)));
// Vorausschau statt Verbrauch: `.kopf-nav .verstecken-schmal` und
// `.beleg-link.schmal` verlieren sonst den zweiten Namen, weil der Punkt,
// der ihn einleitet, schon als Trenner des ersten verbraucht ist. Am
// 01.09.2026 meldete diese Pruefung deshalb fuenf Klassen als regellos,
// die alle eine Regel hatten. Erst die Pruefung verdaechtigen.
const regeln = new Set([...stil.matchAll(/\.([a-zA-Z][\w-]*)(?=[\s,{:.\[>+~)]|$)/g)].map(m => m[1]));
const nackt = [...benutzt].filter(k => !regeln.has(k));
pruef(nackt.length === 0, "Jede Klasse hat eine Regel", nackt.join(", "));

/* 3. Kein toter Anker. */
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
const tot = [...new Set([...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]))].filter(a => !ids.has(a));
pruef(tot.length === 0, "Kein toter Anker", tot.join(", "));

/* 4. Jede aria-labelledby zeigt auf eine vorhandene Kennung. */
const labels = [...new Set([...html.matchAll(/aria-labelledby="([^"]+)"/g)].map(m => m[1]))].filter(a => !ids.has(a));
pruef(labels.length === 0, "aria-labelledby zeigt auf vorhandene Kennung", labels.join(", "));

/* 5. Jede lokale Datei, die die Seite anfordert, liegt auch da. */
// data: ausgenommen seit dem 01.10.2026: das leere Favicon (data:,) ist keine Datei.
const lokal = [...html.matchAll(/(?:href|src)="(?!https?:|#|mailto:|data:)([^"]+)"/g)].map(m => m[1]);
const weg = lokal.filter(p => !existsSync(resolve(wurzel, p.split("?")[0])));
pruef(weg.length === 0, "Alle lokalen Dateien vorhanden", weg.join(", ") || `${lokal.length} geprueft`);

/* 6. Jedes Ziel in _redirects zeigt auf einen Anker, den es gibt.
      AM 02.09.2026 GEFUNDEN: /portfolio zeigte auf #arbeiten, ein Anker, den der
      Umbau vom Vortag entfernt hatte. Ein Redirect meldet das nicht, er liefert
      weiter 301 und laesst den Leser oben auf der Seite stehen. */
const rd = existsSync(resolve(wurzel, "_redirects"))
  ? readFileSync(resolve(wurzel, "_redirects"), "utf8") : "";
const zieleTot = seite !== "index.html" ? [] :
  [...rd.matchAll(/^\s*\S+\s+(\S*)#(\S+)/gm)]
    .filter(m => !m[1] || m[1] === "/")
    .map(m => m[2]).filter(a => !ids.has(a));
if (seite === "index.html") {
  pruef(zieleTot.length === 0, "Anker in _redirects vorhanden", zieleTot.join(", "));
}

/* 7. bis 10. am gerenderten Ergebnis, in beiden Themen. */
const b = await chromium.launch();
for (const thema of ["light", "dark"]) {
  const ctx = await b.newContext({ colorScheme: thema, viewport: { width: 1280, height: 900 } });
  const s = await ctx.newPage();
  const laut = [], kaputt = [];
  s.on("pageerror", e => laut.push(e.message));
  s.on("console", m => m.type() === "error" && laut.push(m.text()));
  s.on("requestfailed", r => !r.url().startsWith("https://fonts.") && kaputt.push(r.url()));
  await s.goto("file://" + resolve(wurzel, seite), { waitUntil: "networkidle" });
  pruef(laut.length === 0, `Keine JS-Fehler (${thema})`, laut.join(" | "));
  pruef(kaputt.length === 0, `Keine toten Anfragen (${thema})`, kaputt.join(" | "));
  // 320px seit dem 01.10.2026: dort liefen die LinkedIn-Adresse und
  // "Bausteinbibliothek" ueber den Rand, das Gate mass nur 390 (30.09.).
  for (const breite of [1280, 390, 320]) {
    await s.setViewportSize({ width: breite, height: 900 });
    const ueber = await s.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    pruef(ueber === 0, `Kein waagerechter Ueberlauf (${thema}, ${breite}px)`, `${ueber}px`);
    // Alles auf der Leiter, seit dem 01.10.2026 (André: "Fan von Systemen").
    // Jede gerenderte Schriftgroesse muss eine Stufe der Schriftleiter sein,
    // jeder Rand, jedes Polster, jede Luecke eine Stufe der Raumleiter oder
    // 0, jede Farbe ein Farbtoken, jede Linie 1 oder 3px. Nur ab 390, unter
    // 390 skalieren die Ueberschriften proportional. Ausgenommen: margin-left
    // (Tintenkante aus dem Seitenskript), die Kopfzeile (88 % Flaeche ueber
    // dem Blur), 44px-Trefferflaechen und Werte, die aus Tokens gerechnet
    // sind (Kopfhoehe, Fuss mit Knopf) und deshalb Summen von Stufen bleiben.
    if (breite !== 320 && thema === "light") {
      const abw = await s.evaluate(() => {
        const rs = getComputedStyle(document.documentElement), tok = n => rs.getPropertyValue(n).trim();
        const schrift = new Set([-2, -1, 0, 1, 3, 6, 9, 12, 15, 18].map(n => Math.round(parseFloat(tok("--schrift-" + (n < 0 ? "m" + -n : n))) * 16)));
        const raum = Array.from({ length: 13 }, (_, i) => parseFloat(tok("--raum-" + i)) * 16);
        const erlaubtRaum = new Set([0, ...raum, 44, 48 + 16 + 32, 44 + 24 + 1]);
        const farben = new Set(); const probe = document.createElement("div"); document.body.appendChild(probe);
        for (const n of ["--flaeche", "--flaeche-gehoben", "--tinte", "--tinte-gedaempft", "--tinte-leise", "--linie", "--linie-stark", "--akzent-text", "--akzent-flaeche", "--akzent-2-text", "--akzent-2-flaeche", "--akzent-3-text", "--akzent-3-flaeche"]) { probe.style.color = "var(" + n + ")"; farben.add(getComputedStyle(probe).color); }
        probe.remove();
        const name = e => e.tagName.toLowerCase() + (e.id ? "#" + e.id : "") + (typeof e.className === "string" && e.className ? "." + e.className.trim().split(/\s+/).join(".") : "");
        const out = [];
        for (const e of document.querySelectorAll("body *")) {
          if (e.closest("script, svg, header.kopf")) continue;
          const cs = getComputedStyle(e), r = e.getBoundingClientRect(); if (r.width === 0 && r.height === 0) continue;
          const fs = Math.round(parseFloat(cs.fontSize));
          if (e.textContent.trim() && !schrift.has(fs)) out.push(`${name(e)} Schrift ${cs.fontSize}`);
          for (const prop of ["marginTop", "marginBottom", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "rowGap", "columnGap"]) {
            const v = cs[prop]; if (v === "normal") continue;
            const z = Math.round(Math.abs(parseFloat(v)) * 10) / 10;
            if (!erlaubtRaum.has(z)) out.push(`${name(e)} ${prop} ${v}`);
          }
          for (const prop of ["color", "backgroundColor", "borderTopColor", "borderBottomColor", "borderLeftColor", "borderRightColor"]) {
            const v = cs[prop]; if (v === "rgba(0, 0, 0, 0)") continue;
            if (prop.startsWith("border") && cs[prop.replace("Color", "Width")] === "0px") continue;
            if (!farben.has(v)) out.push(`${name(e)} ${prop} ${v}`);
          }
          for (const prop of ["borderTopWidth", "borderBottomWidth", "borderLeftWidth", "borderRightWidth"]) { const w = parseFloat(cs[prop]); if (w && w !== 1 && w !== 3) out.push(`${name(e)} ${prop} ${cs[prop]}`); }
        }
        return [...new Set(out)];
      });
      pruef(abw.length === 0, `Alles auf der Leiter (${breite}px)`, abw.length ? abw.slice(0, 6).join(", ") + (abw.length > 6 ? ` … ${abw.length} gesamt` : "") : "Schrift, Raum, Farbe, Linien");
    }
    // Trefferflaechen aller Links und Knoepfe, nur schmal und nur einmal: 44px ist die
    // Daumenflaeche nach Apple, 24px das Minimum aus WCAG 2.5.8. Gemessen am
    // 14.09.2026 vor der Korrektur: "EN" 16 x 20px, "Kontakt" 55 x 20px.
    if (breite === 390 && thema === "light") {
      const klein = await s.$$eval("a, button", els => els
        .map(e => ({ t: e.textContent.trim(), r: e.getBoundingClientRect() }))
        .filter(x => x.r.width > 0)
        .filter(x => x.r.width < 44 || x.r.height < 44)
        .map(x => `${x.t} ${Math.round(x.r.width)}x${Math.round(x.r.height)}`));
      pruef(klein.length === 0, "Trefferflaechen aller Links und Knoepfe mindestens 44px (390px)", klein.join(", "));
      // Anklickbares nie unter --schrift-m1: die Kopfzeile stand auf 13px, die
      // Fusszeile auf 15px, dasselbe Wort zweimal anders (André, 14.09.2026).
      const winzig = await s.$$eval("a, button", els => els
        .filter(e => e.getBoundingClientRect().width > 0 && parseFloat(getComputedStyle(e).fontSize) < 15)
        .map(e => `${e.textContent.trim().slice(0, 20)} ${getComputedStyle(e).fontSize}`));
      pruef(winzig.length === 0, "Anklickbares nicht unter 15px Schrift (390px)", winzig.join(", "));
    }
  }
  await ctx.close();
}
await b.close();

/* ---------- Browserleiste folgt der Flaeche ---------- */
// theme-color kann keine CSS-Variable lesen, deshalb stehen dort zwei Literale.
// Sie muessen --weiss und --tinte-95 aus tokens.css entsprechen, sonst zeigt
// die Browserleiste eine andere Farbe als die Seite. Seit 14.09.2026.
{
  const tokens = readFileSync(resolve(wurzel, "tokens.css"), "utf8");
  const wert = (n) => (tokens.match(new RegExp(`${n}:\\s*(#[0-9A-Fa-f]{6})`)) || [])[1]?.toUpperCase();
  const hell = (html.match(/theme-color" media="\(prefers-color-scheme: light\)" content="(#[0-9A-Fa-f]{6})"/) || [])[1]?.toUpperCase();
  const dunkel = (html.match(/theme-color" media="\(prefers-color-scheme: dark\)" content="(#[0-9A-Fa-f]{6})"/) || [])[1]?.toUpperCase();
  pruef(!!hell && hell === wert("--weiss") && !!dunkel && dunkel === wert("--tinte-95"),
    "Browserleiste folgt der Flaeche", `${hell} / ${dunkel}`);
}

console.log(fehler ? `\n${fehler} Pruefung(en) gefallen.` : "\nGate gruen.");
process.exit(fehler ? 1 : 0);
