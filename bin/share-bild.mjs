#!/usr/bin/env node
/*
 * Erzeugt das Vorschaubild fuer geteilte Links (Open Graph, 1200 x 630).
 *
 *   node bin/share-bild.mjs        schreibt share.png und share.en.png
 *
 * Gebaut aus tokens.css und denselben Schriften wie die Seite, gerendert mit
 * Playwright, damit das Bild so aussieht wie die Seite und nicht wie ein
 * zweites Design. André, 14.09.2026: "Ein share pic noch bitte".
 */
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = readFileSync(resolve(wurzel, "tokens.css"), "utf8");

const fassungen = [
  { datei: "share.png", lang: "de", rolle: "Senior Product Designer",
    satz: "Ich gestalte Produkte und die <em>Systeme</em>, auf denen sie stehen.",
    zeile: "Frankfurt am Main · Seit 2010 im Beruf · andreux.design" },
  { datei: "share.en.png", lang: "en", rolle: "Senior Product Designer",
    satz: "I design products and the <em>systems</em> they stand on.",
    zeile: "Frankfurt am Main · Working since 2010 · andreux.design" },
];

const html = (f) => `<!DOCTYPE html><html lang="${f.lang}"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@500&display=block" rel="stylesheet">
<style>
${tokens}
html, body { margin: 0; width: 1200px; height: 630px; background: var(--flaeche); color: var(--tinte); }
.bild { position: relative; width: 1200px; height: 630px; padding: 72px 88px; box-sizing: border-box;
  font-family: "IBM Plex Sans", system-ui, sans-serif; display: flex; flex-direction: column; justify-content: space-between; }
.streifen { position: absolute; left: 0; top: 0; bottom: 0; width: 16px; background: var(--akzent-flaeche); }
.name { font-family: "Sora", sans-serif; font-weight: 600; font-size: 40px; letter-spacing: -0.01em; }
.rolle { font-family: "IBM Plex Mono", monospace; font-weight: 500; font-size: 22px; color: var(--tinte-gedaempft); margin-top: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
.satz { font-family: "Sora", sans-serif; font-weight: 600; font-size: 64px; line-height: 1.12; letter-spacing: -0.015em; max-width: 980px; }
.satz em { font-style: normal; color: var(--akzent-text, var(--akzent-flaeche)); }
.zeile { font-family: "IBM Plex Mono", monospace; font-size: 22px; color: var(--tinte-gedaempft); }
</style></head><body><div class="bild"><div class="streifen"></div>
<div><div class="name">André Czupala</div><div class="rolle">${f.rolle}</div></div>
<div class="satz">${f.satz}</div>
<div class="zeile">${f.zeile}</div>
</div></body></html>`;

const b = await chromium.launch();
for (const f of fassungen) {
  const ctx = await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1, colorScheme: "light" });
  const p = await ctx.newPage();
  await p.setContent(html(f), { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: resolve(wurzel, f.datei), type: "png" });
  await ctx.close();
  console.log(`  ${f.datei} geschrieben`);
}
await b.close();
