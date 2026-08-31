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

## Stand: die neue Seite ist live (31.08.2026)

`index.html` entsteht aus dem gesperrten Datensatz des CV-Projekts, dazu
`impressum.html`, `tokens.css` aus dem Paket und `downloads/` mit sechs
Dateien. Kein Build, aber eine echte Abhängigkeit: `npm run tokens` erneuert
`tokens.css` aus `@andreux/design-tokens`, gepinnt auf `v1.1.0`.

`portfolio.html` ist ersetzt. `/portfolio` und `/portfolio.html` leiten per
`_redirects` auf den Abschnitt Ausgewählte Arbeiten der Startseite. Die alten
Fassungen von `index.html` und `portfolio.html` stehen im Commit `ac86f39`,
`styles.css` gehört nur noch zu ihnen.

**Was an der alten Fassung belegt falsch war**, als Maßstab für die neue:
`#fff` auf `#FF7262` ergab 2,9:1 und fiel durch WCAG AA; die Akzentfarbe war
Figmas eigene Markenfarbe; Emoji als Icons; alles zentriert, inklusive eines
720 px breiten Fließtextabsatzes; die Schrift lud nur auf einer von drei Seiten.

**Was an der neuen offen ist:** die vier Entscheidungen in
`VORSCHLAG-positionierung.md`, die fehlenden Bilder, und der Text, der mit
8 von 13 ungemessen live gegangen ist.

## Geplant

**Noch nicht umgesetzt.** Astro, statisch, mit Content Collections für die
Fallstudien. Begründung: die
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

**Die Quelle ist `cv/cv-data.json` im Repo `bewerbungen-2026`, das Werkzeug ist
`bin/sprache.py` dort. Beides, nicht eines von beidem** (André, 31.08.2026).
Jeder Text auf dieser Seite stammt inhaltlich aus der gesperrten Quelle UND wird
vor dem Livegang gemessen:

```
npm run sprache -- <datei.md> --profil linkedin
```

Es gibt keine Leitung zwischen den Repos, der Text wird also von Hand
herübergenommen. Das ist Absicht und ändert nichts an der Pflicht zu messen.

**Anlass:** die erste Fassung dieser Seite entstand am 31.08.2026 aus gesperrten
Sätzen und wurde nie gemessen. 8 von 13, LIX 57 statt 50, drei Sätze über
dreißig Wörter. Belegtexte des Lebenslaufs sind verbfinal und dicht; das ist für
eine Job-Karte richtig und für eine Webseite zu lang.

**Gekürzt wird durch Weglassen, nicht durch Umformulieren.** Eine zweite Fassung
derselben Behauptung driftet, sobald eine korrigiert wird.

**Gemessen am 31.08.2026, nach dem Umbau: 12 von 13 im Profil `website`.**
Einzige Abweichung ist LIX mit 53 statt 50, und die bleibt bewusst stehen.

LIX rechnet Satzlänge plus Anteil langer Wörter. Die langen Wörter dieser Seite
sind fast alle gesperrte Fachbegriffe aus `cv/cv-data.json`, darunter
Schnelllieferdienst, Arbeitsinformationen und End-to-End-Produktdesign. Sie
lassen sich nicht durch Weglassen kürzen, ohne die Aussage zu ändern, und
umformuliert wird nicht.

**Die beiden anderen Lesbarkeitszahlen bestehen:** Flesch nach Amstad 44 bei
mindestens 40, Wiener Sachtextformel 11,6 bei höchstens 12. Die
Sachtextformel ist ausdrücklich für deutsche Sachtexte gebaut und urteilt
milder über Komposita. Zwei von drei Messungen tragen, und die dritte kennt
das Problem: in `doku/profiltexte.md` steht, dass Komposita jede
Lesbarkeitszahl treiben.

**Was das nicht heißt:** LIX 53 ist kein Freibrief. Wächst der Wert weiter oder
fällt eine der anderen beiden, wird gekürzt.


- Keine Em-Dashes, keine Adjektive ohne Beleg
- Muster **Beleg**: Behauptung, dann Ergebnis, eingeleitet durch das Wort
  „Ergebnis". Dasselbe Muster wie im CV, das ist der Konsistenzhebel
- **Interne Systeme des aktuellen Arbeitgebers werden beschrieben, nicht gezeigt.**
  Keine Screenshots, keine Kundennamen, keine internen Zahlen. Die Rechte liegen
  laut Vertrag beim Arbeitgeber
