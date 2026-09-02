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
const stil = eigen + "\n" + gebunden;
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
const lokal = [...html.matchAll(/(?:href|src)="(?!https?:|#|mailto:)([^"]+)"/g)].map(m => m[1]);
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
  for (const breite of [1280, 390]) {
    await s.setViewportSize({ width: breite, height: 900 });
    const ueber = await s.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    pruef(ueber === 0, `Kein waagerechter Ueberlauf (${thema}, ${breite}px)`, `${ueber}px`);
  }
  await ctx.close();
}
await b.close();

console.log(fehler ? `\n${fehler} Pruefung(en) gefallen.` : "\nGate gruen.");
process.exit(fehler ? 1 : 0);
