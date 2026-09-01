# Stand: andreux-design-site

Letzte Aktualisierung: 2026-08-31

## Nächster Schritt

**Noch nicht anfangen.** Das Layoutvorgehen wird zuerst im CV-Projekt geklärt,
weil beide Projekte dieselben Tokens benutzen und die gestalterische Richtung
dort entschieden wird. Solange sie offen ist, würde hier gebaut und verworfen.

## Offen

- [ ] **Vier Entscheidungen zum Positionierungsvorschlag**, ausgeschrieben in
      `VORSCHLAG-positionierung.md`: Problemfeld statt Rollenbezeichnung im
      Kopf, colibre streichen, Abschnitt "Was ich verworfen habe", und wie weit
      der Block zum eigenen System geht. Umgesetzt ist davon nichts
- [ ] **Bilder.** Groesste Luecke der Seite und die einzige, die nur André
      schliessen kann. Fuer das Produktionssystem waere die Ausgabe der
      Pruefkette ein ehrliches Bild, fuer GoTiger ein Ausschnitt aus dem Prototyp
- [ ] **Der Text ist ungemessen live gegangen.** 8 von 13 mit
      `bin/sprache.py --profil linkedin`: 371 Woerter, LIX 57, Flesch 38, drei
      Saetze ueber dreissig Woerter. Gekuerzt wird durch Weglassen, siehe
      CLAUDE.md

- [ ] Astro aufsetzen. `@andreux/design-tokens` ist seit dem 31.08.2026
      eingebunden, ueber package.json auf v1.1.0 und `npm run tokens`
- [ ] Netlify-Buildeinstellungen setzen (Buildbefehl, Publish-Verzeichnis).
      Existieren heute nicht, weil die Seite ohne Build ausgeliefert wird
- [ ] Content Collection für Fallstudien mit Zod-Schema
- [ ] Erste Fallstudie: **Filo**, nicht das Landingpage-System.
      Filo ist unstrittig eigene Arbeit, beim LP-System liegen die Rechte
      laut Vertrag beim Arbeitgeber
- [ ] Entscheiden, was von `downloads/` bleibt. Am 31.08.2026 von 23 MB und
      neun Dateien auf 13 MB und sechs geschrumpft; die Thesis allein wiegt 6 MB
- [ ] **Historienballast, jetzt auch eine Rechtefrage.** 36 MB Historie gegen
      13 MB Arbeitsverzeichnis. Die am 31.08.2026 geloeschten Interone-PDFs
      stehen weiter in Commit `2562c8f` und sind auf GitHub abrufbar. Wirklich
      weg sind sie erst durch Umschreiben der Historie
- [ ] Skills `fallstudie-schreiben` und `seite-pruefen`
- [ ] `vercel-labs/web-interface-guidelines` als Referenzdatei einlagern,
      nicht als Skill installieren: der holt seine Regeln zur Laufzeit per
      WebFetch, das taugt nicht für reproduzierbare Ausgabe

## Entschieden

**Die beiden colibre-PDFs sind aus `downloads/` entfernt** (André, 01.09.2026).
Sie nannten "Sommersemester 2023", Lebenslauf und Seite nennen 2022. Verlinkt
waren sie nicht mehr, oeffentlich abrufbar schon. Derselbe Widerspruch stoppte
am 27.07.2026 das GFT-Paket. **Offen:** `bedingungen.zeitraum` der Projektkarte
`colibre` in `cv/cv-data.json` fuehrt den Punkt weiter als offen und weiss noch
nicht, dass die Dateien weg sind. Wer die Karte das naechste Mal aufmacht,
zieht das nach.

**Die Startseite ist nach Faehigkeiten geordnet, nicht chronologisch**
(01.09.2026). Eine Chronologie zeigt, wo André war; die Seite soll zeigen,
wohin er will. Links im Streifen die Faehigkeit, rechts der Anspruch, darunter
die Belege. Reihenfolge KI-Systeme, End-to-End, Conversion.

**Der Screenshot der Pruefkette ist raus** (André, 31.08.2026, ausgefuehrt am
01.09.2026). Er verraet den Zweck des Systems, naemlich dass André seine
eigenen Bewerbungsunterlagen damit baut, und eine Terminalausgabe sagt ohne
Erklaerung nichts. Die Datei `bilder/pruefkette.png` ist geloescht, damit sie
nicht weiter ausgeliefert wird. **Die Entscheidung stand am 31.08. schon fest
und wurde nicht ausgefuehrt**, das Bild blieb einen Tag live und wurde beim
Umbau sogar wieder eingebaut.

**Der Textblock zum eigenen System bleibt** (André, 01.09.2026). Pruefagenten,
die nicht wissen duerfen, was der Text erreichen soll, und nichts reparieren
duerfen, hat sonst niemand. Ohne das Bild.

**Das Bewerbungssystem wird gezeigt, nicht veroeffentlicht** (André, 31.08.2026).
Ein Block auf dieser Seite beschreibt, wie es arbeitet, mit der Ausgabe der
Pruefkette als Bild und dem erzeugten PDF als Beleg. Das Repo `bewerbungen-2026`
bleibt privat.

Gruende, in dieser Reihenfolge: das Repo sagt auf jeder zweiten Seite, dass
André einen neuen Job sucht, und er arbeitet seit 12/2025 bei BFP. Dieselbe
Ueberlegung wie beim Zwischenzeugnis, das aus demselben Grund nicht angefordert
wird. Dazu stehen dort seine Gehaltsuntergrenze, seine Wechselgruende, seine als
Spekulation markierte Einschaetzung zur Geschaeftsfuehrung von GoTiger und die
Grenzen zu BFP.

**Offen gelassen:** ein zweites, sauberes Repo mit nur den Werkzeugen und
erfundenen Beispieldaten. Waere fuer sich eine Arbeitsprobe, wie
`design-tokens` es ist. Preis: zwei Repos mit denselben Werkzeugen laufen
auseinander. Erst bauen, wenn eine Stelle ausdruecklich Code sehen will.

**Risiko, das dabei mitlaeuft und ueber die Rahmung geloest wird:** wer sieht,
dass die Unterlagen aus einem KI-System kommen, kann daraus lesen, das
Anschreiben sei nicht selbst geschrieben. Die Rahmung ist deshalb nicht "KI
schreibt meine Bewerbung", sondern "ich habe Pruefstufen gebaut, die meine
eigenen Texte gegen die Quelle pruefen, und sie haben mich mehrfach beim
Uebertreiben erwischt". Das ist auch das, was tatsaechlich passiert ist.


- **Astro**, statisch, Content Collections für Fallstudien
- **Deploy über Git**, wegen Vorschau-URLs pro Branch
- **Keine `/cv`-Seite aus den privaten Daten.** Nur ein verlinktes PDF der
  öffentlichen Variante
- **Flüssige Interaktionen erwünscht**, aber keine Inhalte hinter Scroll-Ereignissen
- Alles bisherige Design wird verworfen, nicht weiterentwickelt

**Drei Farben, jede mit einer Aufgabe** (André, 31.08.2026). Hauptakzent ist
International Orange, `#FF4F00`, das Orange der Shuttle-Tanks und der
Startanzuege. Es stand bereits als `--akzent-flaeche` im CV-Register, es kommt
also keine Farbe neu ins System. Nicht gemeint war das Rot des NASA-Worm,
Pantone 179, `#E03C31`.

Dazu Magenta und Blau. Sie sind nicht gegriffen: fuer den Farbton wurde die
hellste Fassung gesucht, die auf Weiss noch 5,4:1 erreicht, und die dunkelste,
die auf `#0B0E12` noch 5,4:1 erreicht. Damit liegen alle drei auf derselben
Stufe und keine sticht durch blosse Helligkeit hervor.

Die Farben tragen die drei Saeulen: Orange End-to-End-Produktdesign, Magenta
KI-gestuetzte Systeme, Blau Conversion. Eine Farbe ohne Aufgabe waere
Dekoration. Verteilt wird ueber genau drei CSS-Klassen.

**Die Akzentwerte gehoeren ins Tokenpaket.** Sie stehen heute nur in
`design/erkundung/e4.css` des CV-Projekts. Solange die Seite sie kopiert, gibt
es sie zweimal. Zu erledigen im Repo `design-tokens`, nicht hier.

## Gemessen

| Befund | Wert |
|---|---|
| `#fff` auf `#FF7262` (aktueller Primärbutton) | 2,9:1, fällt durch AA |
| Repo gegen Arbeitsverzeichnis | 46,5 MB gegen 23 MB |
| Schrift geladen auf | 1 von 3 Seiten |
| Orange `#BF3B00` auf Weiss / `#FF4F00` auf `#0B0E12` | 5,47:1 / 5,87:1 |
| Magenta `#CD0B72` auf Weiss / `#F4369C` auf `#0B0E12` | 5,40:1 / 5,40:1 |
| Blau `#0967D3` auf Weiss / `#2687F6` auf `#0B0E12` | 5,41:1 / 5,40:1 |
| Flaechen `#FF4F00`, `#E8007D`, `#0A84FF`, Minimum ueber beide Gruende | 3,30 / 4,35 / 3,65 |

Die Akzentfarbe `#FF7262` ist Figmas eigene Markenfarbe.

## Log

**2026-08-31** Die alte Startseite ist ersetzt, nicht repariert. Anlass war
Andrés Einwand, warum eine Seite angepasst wird, die ohnehin ersetzt werden
soll. Die neue `index.html` entsteht aus dem gesperrten Datensatz des
CV-Projekts und loest die drei Widersprueche durch ihren Bau. Die alte Fassung
liegt als `alt-index-2025.html` daneben. Aus `portfolio.html` ist der
interone-Block entfernt, die Interone-PDFs und die beiden CV-PDFs von 2025 sind
geloescht. ACHTUNG: die geloeschten Dateien stehen weiterhin in der
Git-Historie, Commit `2562c8f`, und sind auf GitHub darueber abrufbar. Wirklich
weg sind sie erst durch Umschreiben der Historie. Verlinkt sind jetzt GoTiger
mit Prototyp und PDF, Filo mit der Thesis und colibre mit dem Prototyp; das
Colibre-PDF bleibt draussen, es nennt das falsche Semester. **Der Lebenslauf
wird vorerst NICHT verlinkt** (André, 31.08.2026): die zugeschnittene Fassung
steht noch aus, die vollstaendige braucht sieben Seiten. Das Markup dafuer
steht als Kommentar an seiner Stelle.


**2026-07-26** Repo geklont, Einstellungen aufgeräumt (Beschreibung, Homepage,
Topics; Wiki, Issues und Projects abgeschaltet). Projektkonfiguration angelegt.
Inhalt bewusst noch unangetastet.
