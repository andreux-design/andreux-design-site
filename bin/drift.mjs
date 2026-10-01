#!/usr/bin/env node
/*
 * Driftpruefung. `npm run drift`, laeuft in `npm run gates` mit.
 *
 * WARUM ES DAS GIBT, 30.09.2026. Jeder Satz der Seite stammt aus
 * `texte/website.md` im Bewerbungsrepo. Zwischen den Repos gibt es keine
 * Leitung, der Text kommt als Kopie nach `uebergabe/`, und die Seite wird von
 * Hand nachgezogen. Seit dem 17.09. lief der Abgleich als Skript im
 * Scratchpad der jeweiligen Sitzung, also nirgends verlaesslich. Jetzt hier:
 * die Saetze des Fliesstexts der Seite gegen die Saetze der Textdatei, in
 * beide Richtungen. Ein Satz, der nur auf einer Seite steht, ist Drift.
 *
 * KARTENTITEL UND UNTERTITEL, seit 01.10.2026. Die Textdatei fuehrt die
 * Kartentitel als "### "-Zeilen und die Untertitel als "#### "-Zeilen. Sie
 * werden als ganze Zeilen gegen h3 und p.untertitel der Seite verglichen,
 * ebenfalls in beide Richtungen, nicht in Saetze geteilt ("ID. Buzz" waere
 * sonst ein Satzende). Der weiche Trennstrich im Kartentitel ist Markup und
 * wird entfernt. Fehlen die Zeilen in der Textdatei, faellt das Gate.
 *
 * Nicht verglichen: Streifen, Sprungmarken, Belegknoepfe, Kopf und Fuss,
 * dazu alle uebrigen Ueberschriftzeilen der Textdatei ("#", "##"). Die
 * Labels "Vorgehen", "Ergebnis", "Nicht gezeigt" sind Markup und werden
 * abgezogen. Das <em> im Claim wird entfernt, ohne Leerzeichen einzufuegen.
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [seite, quelle] = process.argv.slice(2);
if (!seite || !quelle) {
  console.error("Aufruf: node bin/drift.mjs <seite.html> <text.md>");
  process.exit(2);
}

const entkoden = s => s
  .replace(/&shy;|­/g, "")
  .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&copy;/g, "©");

/* Erst an Blockgrenzen (Zeilenumbruch) teilen, dann an Satzenden vor einem
   Grossbuchstaben. Ein Satz, der klein beginnt, wie "filo, meine
   Bachelorthesis" (Markenname klein, André, 30.09.2026), wuerde sonst mit dem
   Satz davor verschmelzen, sobald beide im selben Block stehen. */
const saetze = t => t
  .split(/\n+/)
  .flatMap(z => z.replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„“"0-9])/))
  .map(s => s.trim()).filter(Boolean);

/* Seite: nur der Fliesstext in main. */
const html = readFileSync(resolve(wurzel, seite), "utf8");
const main = (html.match(/<main[\s\S]*?<\/main>/) || [""])[0].replace(/<!--[\s\S]*?-->/g, "");
// h1 ohne Klassenbedingung (die Eintrittsklasse .heben ist seit dem
// 01.10.2026 weg), Absaetze ueber ihre eigene Klasse.
const bloecke = [...main.matchAll(
  // (?=[\s>]) nach dem Tagnamen: ohne Wortgrenze traf <p auch <path im
  // Chevron-SVG und schluckte bis zum </p> der Einleitung (01.10.2026).
  /<(h1|p)(?=[\s>])(?:[^>]*class="(?:eigenname|satz|anspruch|text|ergebnis)")?[^>]*>([\s\S]*?)<\/\1>/g
)].filter(m => m[1] === "h1" || /class="(?:eigenname|satz|anspruch|text|ergebnis)"/.test(m[0].split(">")[0])).map(m => m[2]
  .replace(/<b>(Vorgehen|Ergebnis|Nicht gezeigt|Approach|Result|Not shown):<\/b>\s*/g, "")
  .replace(/<[^>]+>/g, "")
);
const aufSeite = saetze(entkoden(bloecke.join("\n")));

/* Seite: Kartentitel und Untertitel als ganze Zeilen. */
const zeilenSeite = re => [...main.matchAll(re)]
  .map(m => entkoden(m[1].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim());
const titelSeite = zeilenSeite(/<h3(?=[\s>])[^>]*>([\s\S]*?)<\/h3>/g);
const unterSeite = zeilenSeite(/<p(?=[\s>])[^>]*class="untertitel"[^>]*>([\s\S]*?)<\/p>/g);

/* Quelle: Saetze aus allem, was keine Ueberschriftzeile ist; Kartentitel aus
   den "### "-Zeilen, Untertitel aus den "#### "-Zeilen. */
const mdZeilen = readFileSync(resolve(wurzel, quelle), "utf8").split("\n");
const inQuelle = saetze(mdZeilen.filter(z => !z.startsWith("#")).join("\n"));
const zeilenQuelle = praefix => mdZeilen
  .filter(z => z.startsWith(praefix + " "))
  .map(z => z.slice(praefix.length).replace(/\s+/g, " ").trim());
const titelQuelle = zeilenQuelle("###");
const unterQuelle = zeilenQuelle("####");

console.log(`\nDrift: ${seite} gegen ${quelle}\n`);
let abweichend = 0, leer = false;
for (const [art, a, b] of [
  ["Saetze", aufSeite, inQuelle],
  ["Kartentitel", titelSeite, titelQuelle],
  ["Untertitel", unterSeite, unterQuelle],
]) {
  const q = new Set(b), s = new Set(a);
  const nurSeite = a.filter(x => !q.has(x));
  const nurQuelle = b.filter(x => !s.has(x));
  console.log(`  ${art} auf der Seite ${a.length}, in der Quelle ${b.length}`);
  for (const x of nurSeite) console.log(`  nur Seite:   ${x}`);
  for (const x of nurQuelle) console.log(`  nur Quelle:  ${x}`);
  abweichend += nurSeite.length + nurQuelle.length;
  // Nichts gefunden heisst: die Suche greift nicht, nicht: alles gleich.
  if (a.length === 0) { leer = true; console.log(`  ${art}: auf der Seite nichts gefunden`); }
}
const ok = abweichend === 0 && !leer;
console.log(ok ? "\nKeine Drift." : `\n${abweichend} Abweichung(en)${leer ? ", eine Zeilenart leer" : ""}.`);
process.exit(ok ? 0 : 1);
