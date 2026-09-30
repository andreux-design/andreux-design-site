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
 * Nicht verglichen: Kartentitel, Untertitel, Streifen, Sprungmarken,
 * Belegknoepfe, Kopf und Fuss. Die stehen nicht in der Textdatei. Die
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
const bloecke = [...main.matchAll(
  /<(h1|p)[^>]*class="(?:eigenname heben|heben|satz heben|anspruch|text|ergebnis)"[^>]*>([\s\S]*?)<\/\1>/g
)].map(m => m[2]
  .replace(/<b>(Vorgehen|Ergebnis|Nicht gezeigt|Approach|Result|Not shown):<\/b>\s*/g, "")
  .replace(/<[^>]+>/g, "")
);
const aufSeite = saetze(entkoden(bloecke.join("\n")));

/* Quelle: alles nach der ersten Ueberschriftzeile, ohne weitere Ueberschriften. */
const md = readFileSync(resolve(wurzel, quelle), "utf8")
  .split("\n").filter(z => !z.startsWith("#")).join("\n");
const inQuelle = saetze(md);

const q = new Set(inQuelle), s = new Set(aufSeite);
const nurSeite = aufSeite.filter(x => !q.has(x));
const nurQuelle = inQuelle.filter(x => !s.has(x));

console.log(`\nDrift: ${seite} gegen ${quelle}\n`);
console.log(`  Saetze auf der Seite ${aufSeite.length}, in der Quelle ${inQuelle.length}`);
for (const x of nurSeite) console.log(`  nur Seite:   ${x}`);
for (const x of nurQuelle) console.log(`  nur Quelle:  ${x}`);
const ok = nurSeite.length === 0 && nurQuelle.length === 0 && aufSeite.length > 0;
console.log(ok ? "\nKeine Drift." : `\n${nurSeite.length + nurQuelle.length} Satz/Saetze abweichend.`);
process.exit(ok ? 0 : 1);
