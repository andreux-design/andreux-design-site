# andreux-design-site

Öffentliche Portfolioseite auf `andreux.design`. Netlify, Domain über Cloudflare.

**Das Bewerbungsdokument ist ein anderes Projekt** (`bewerbungen-2026`, privat).
Hier liegen keine Anschrift, keine Telefonnummer, keine Zeugnisse. Der Lebenslauf
erscheint hier ausschließlich als fertiges PDF der öffentlichen Variante, das
bewusst herüberkopiert wird. **Es gibt keine Leitung zu den privaten Daten.**

## Belegpflicht

- Keine Eigenschaft als geprüft melden, ohne dass ein Befehl dieses Ergebnis
  erzeugt hat. Zahlen werden gerechnet, nicht geschätzt.
- Wer eine Datei beurteilt, hat sie gelesen, nicht ihre Beschreibung.
- Wenn eine Prüfung anschlägt, zuerst die Prüfung verdächtigen.

## Stand: noch die alte Seite

Aktuell statisches HTML: `index.html`, `portfolio.html`, `impressum.html`,
ein `styles.css`, dazu `downloads/` mit neun PDFs (23 MB). Kein Build.

**Diese Fassung wird ersetzt**, nicht weiterentwickelt. Sie hat belegte Mängel:
`#fff` auf `#FF7262` ergibt 2,9:1 und fällt durch WCAG AA; die Akzentfarbe ist
Figmas eigene Markenfarbe; Emoji als Icons; alles zentriert, inklusive eines
720 px breiten Fließtextabsatzes; die Schrift lädt nur auf einer von drei Seiten.

## Geplant

Astro, statisch, mit Content Collections für die Fallstudien. Begründung: die
Seiten sind zu 95 % Text und Bild, Astro liefert dafür standardmäßig null
JavaScript aus. React bleibt über `client:`-Direktiven verfügbar, wo Interaktion
wirklich zählt.

Flüssige Interaktionen sind ausdrücklich gewünscht. Bewegung deshalb gezielt,
nicht flächig: keine Inhalte, die erst nach einem Scroll-Ereignis existieren, und
`prefers-reduced-motion` in einem Block ohne Ausnahmen.

## Abgelehnte Alternativen

- **Astro**, nicht Next. Eine Portfolioseite braucht kein Server-Rendering
- **Eigene Tokens aus `@andreux/design-tokens`**, kein Tailwind und kein shadcn.
  Ein zweites Designsystem neben dem des CV wäre genau das Problem, das die
  Trennung in Projekte lösen soll
- **Deploy über Git**, nicht über Direkt-Upload. Nur so gibt es Vorschau-URLs
  pro Branch, bevor eine Fallstudie öffentlich wird

## Regeln für Inhalte

- Keine Em-Dashes, keine Adjektive ohne Beleg
- Muster **Beleg**: Behauptung, dann Ergebnis, eingeleitet durch das Wort
  „Ergebnis". Dasselbe Muster wie im CV, das ist der Konsistenzhebel
- **Interne Systeme des aktuellen Arbeitgebers werden beschrieben, nicht gezeigt.**
  Keine Screenshots, keine Kundennamen, keine internen Zahlen. Die Rechte liegen
  laut Vertrag beim Arbeitgeber
