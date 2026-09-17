# Stand: andreux-design-site

Letzte Aktualisierung: 2026-09-17

## Nächster Schritt

**Regel seit dem 17.09.2026: Gate grün heißt Merge nach `main`, ohne
Rückfrage** (André, von unterwegs prüft er live am Handy). Steht in
`CLAUDE.md`, Abschnitt Livegang.


**Säulenzeichen und Belege-Buttons sind umgebaut, Gate grün in beiden
Sprachen, auf `main` und damit live** (André, 17.09., nach zwei gerenderten
Vorschauen mit den echten Tokens; Merge nach seinem Blick auf die
Ausschnitte: „Merge"). Umgesetzt am 17.09. abends, alles im
Stylesheet, kein Markup geändert:

1. **Zählung plus Farbe im Wort.** `--nummer` steht in `.marke-eins` bis
   `-drei` neben der Farbe, Sprungmarke und Säulen-H2 holen sie per
   `::before`; oben und unten also derselbe Wortlaut, dieselbe Meta-Schrift,
   Versalien, Farbe `--marke-text`. Sprungmarke „1 END-TO-END-PRODUKTDESIGN",
   15px, gemessen 263x44, 151x44, 222x44, kein Quadrat. H2 als Grid, Nummer
   1,6em (20,8px) vor dem Titel, Titel bricht neben der Nummer um, nicht
   unter sie; der 3px-Strich über den Säulen-H2 ist weg.
2. **Belege-Buttons** ohne Quadrat, Text in `--marke-text`
   (rgb 191,59,0 gemessen), Rahmen 1px `--linie-stark` (rgb 142,148,157),
   44px hoch. Hover ist eine Unterstreichung, kein farbiger Rahmen.
3. **Rollen im Kopf von `styles.css`:** Quadrat ist Position, 1px grauer
   Rahmen ist anklickbar oder Tag, Farbe im Wort ist Zugehörigkeit, Nummer
   ist die Säule, senkrechte 3px-Linie ist Ergebnis oder Hinweis. Die
   Linienregel vom 14.09. ist entsprechend gekürzt.
4. Gate grün, drei Seiten, beide Sprachen. Kontrast von `--marke-text` ist
   im Tokenrepo gemessen, hier nicht neu.

Ausschnitte (ATF und Säulenüberschrift, 1280 und 390px) hat André in der
Sitzung gesehen und freigegeben.

**Zwei Befunde von André danach, behoben und auf `main` (André, 17.09.: „Merge"):**
- **Sprungziel unter der Kopfzeile.** Nach dem Klick auf eine Säule lag die
  Abschnittsoberkante bei 0px, die klebende Kopfzeile (69px) deckte sie;
  bei 390px stand die H2 mit 64px sogar 5px unter der Kopfzeile. Jetzt
  `scroll-margin-top: var(--kopf-hoehe)` auf `.abschnitt`, die Höhe aus den
  Tokens gerechnet (44px plus zweimal `--raum-5` plus `--strich-0`).
  Gemessen danach: Abschnitt oben 69px, H2 bei 165px (1280) und 133px (390).
- **Unterstreichung nach dem Klick.** Die beiden Hover-Regeln vom Umbau
  (Sprungmarken, Belege-Buttons) sind gestrichen; auf Touch bleibt `:hover`
  nach dem Tippen stehen. Kein Hover-Zustand mehr an diesen Elementen, Farbe
  im Wort und grauer Rahmen sagen anklickbar. Die übrigen Hover-Regeln
  (Kopf, Kontakt, Fuß) wechseln nur die Farbe und bleiben. Offen bleibt die Gegenprobe am gerenderten
Ergebnis auf andreux.design, der Proxy der Cloud-Sitzung lässt die Domain
nicht durch.

**Danach:** Die Fassung vom 17.09. ist auf `main`, deutsch und englisch, Gate grün**
(André, 17.09.: „Merge"). Netlify liefert `main` aus, nach dem Push also live;
Gegenprobe mit `curl` auf andreux.design steht aus. Nächster Schritt zwei aus
dem Protokoll: GoTiger, Filo und colibre bekommen Fallstudienseiten, auf der
Hauptseite bleibt je eine Kurzfassung, gemessen gegen 900 Wörter und
Burstiness 0,50. Volkswagen-Library, Token-System und Bausteinbibliothek
bleiben in voller Länge auf der Hauptseite (André, 17.09.). Dann Grafiken von
André.

## Umgebaut am 17.09.2026: die Langfassung als eine Seite

**Quelle:** `texte/website.md` im Bewerbungsrepo, Fassung vom 17.09. (93
Behauptungen, sechs Faktenprüfer, zwei Lektorrunden, freigegeben unter
Auflagen, alle umgesetzt). Struktur und Entscheidungen stehen dort in
`doku/website-protokoll.md`, Abschnitte vom 16. und 17.09.

**Struktur jetzt:** Kopf mit dem Claim „Ich gestalte Produkte und die Systeme,
auf denen sie stehen" (André, 16.09.), Eröffnungsabsatz, darunter die drei
Säulen als Sprungmarken (André, 17.09., „So machen wir es"). Dann
End-to-End-Produktdesign mit GoTiger, Filo, colibre; Designsysteme mit der
Bausteinbibliothek zuerst, dann Volkswagen-Library und Token-System;
KI-gestützte Systeme mit der Geschmacksgeschichte und der Kampagnen-Karte;
Was ich suche; Kontakt. „Ungefragt gebaut" und „Außerdem" gibt es nicht mehr,
colibre ist eine volle Karte in End-to-End.

**Sprungmarken:** `ul.sprungmarken` unter dem Eröffnungsabsatz, Wortlaut
gleich den Überschriften, eigene Zeile, nicht im Faktenstreifen. Jede trägt
das Quadrat in ihrer Markenfarbe, dasselbe Zeichen wie vor den Belegen und im
Kartenstreifen; so ist die Farbe der Säule oben schon eingeführt. Anklickbar,
also 15px Schrift und 44px Höhe; gemessen bei 390px: 232x44, 133x44, 196x44.
Neue Anker `#designsysteme` und `#ki-systeme`; `#koennen` bleibt auf der
ersten Säule, weil `_redirects` dorthin zeigt. Die Überschrift steht bei
1280px in zwei Zeilen, bei 390px in vier.

**Drift gemessen, beide Richtungen:** 89 Sätze auf der Seite, 89 in der
Textdatei, einziger Unterschied das `<em>`-Artefakt im Claim (Leerzeichen vor
dem Komma, wenn das Tag entfernt wird), wie am 10.09. Kartentitel, Untertitel,
Streifen, Sprungmarken und Belegknöpfe ausgenommen. Die Kartenabsätze sind an
Satzgrenzen in Text und Ergebniszeile geteilt („Vorgehen", „Ergebnis", „Nicht
gezeigt"), kein Wort geändert. Das Prüfskript lag im Scratchpad der Sitzung,
nicht im Repo; ein Gate daraus ist offen.

**Tag-Chips sind raus.** Die 19 Chips vom 15.09. stammten aus keiner Quelle,
elf kamen in `texte/website.md` nicht vor, und die Regel dieser Seite
verlangt, dass jeder Tag im gedruckten Text seines Abschnitts gedeckt ist.
Richtige Lösung bleibt ein Feld `tags` in den Projektkarten der Quelle; bis
dahin keine Chips. Die Regeln `.marken` und `.marke-tag` stehen noch im
Stylesheet. Nicht von André entschieden, Befund für ihn.

**Englisch:** `index.en.html` Satz für Satz aus der deutschen Fassung, Wortlaut
in `doku/website-en.md` des Bewerbungsrepos, aus dem HTML erzeugt, Stand
17.09. Nicht selbst geprüft, wie bisher.

**Share-Bilder** mit dem neuen Claim neu erzeugt (`bin/share-bild.mjs`),
gerendert mit Sora, am Bild geprüft.

**Sprachmessung** (`npm run sprache -- texte/website.md --profil website`,
17.09.): 12 von 16, 1.201 Wörter, Burstiness 0,42, LIX 39, Flesch 63,
Sachtextformel 6,6, kein Satz über 30 Wörter. Außerhalb: Wörter (Grenze 900),
Burstiness (0,50), Gegensatzsätze 5, Nutzen-Wortliste. Die Länge ist gewollt,
die Absätze sind die künftigen Fallstudien.

**Gate:** drei Seiten grün, je 17 Prüfungen. In der Cloud-Sitzung fiel „Keine
JS-Fehler" zuerst an der Google-Fonts-Anfrage über den Proxy
(ERR_CERT_AUTHORITY_INVALID), auch an der unveränderten Seite; behoben durch
Eintrag des Proxy-Zertifikats in den NSS-Speicher des Browsers, nicht durch
eine Änderung am Gate. Playwright 1.63 suchte außerdem Chromium 1243,
installiert war 1194, per Symlink verbunden. Beides Umgebung, nichts davon im
Repo; `package-lock.json` ist unverändert.

## Umgebaut am 04.09.2026: drei neue Saeulen

**Reihenfolge jetzt:** End-to-End-Produktdesign, Designsysteme, KI-gestuetzte
Systeme. Der Abschnitt Conversion ist entfallen, der Abschnitt "Woher das kommt"
ebenfalls; seine Aussage steht jetzt im Anschlag.

**Warum.** Gemessen an den drei Zielstellen, die André verfolgt: alle drei
verlangen Designsysteme ausdruecklich, keine einzige verlangt Conversion. Die
Begruendung liegt im Bewerbungsrepo, `CLAUDE.md` Abschnitt Positionierung und
`_saeulen_hinweis` in der Quelle.

**Anschlag neu:** "Ich bin der einzige Designer in meiner Agentur." Darunter,
woher die Systeme kommen und wohin er will. Der alte Satz "Wer nach Geschmack
entscheidet, verliert die Diskussion gegen den, der lauter ist" ist weg, André
hat ihn am 02.09.2026 widerlegt.

**Ankerpflege:** `id="koennen"` sitzt jetzt auf der ersten Saeule, sonst liefe
der Redirect `/portfolio` ins Leere. Die drei Markenfarben sind nach Position
zugeordnet, `marke-eins` fuehrt.

**Tag-Chips von 19 auf 17.** Gestrichen sind Informationsarchitektur,
Bibliothek, Playwright und ein zweites Claude Code: der Text ihres Abschnitts
deckte sie nicht. Geprueft wird jetzt wie im Lebenslauf, jeder Tag muss im
gedruckten Text seines Abschnitts gedeckt sein.

**Der gesamte Seitentext lebt in `texte/website.md` des Bewerbungsrepos** und
ist dort durch Herkunftspruefung, Gradpruefung, Sprachmessung, Faktenpruefer,
Lektor und Leckpruefung gelaufen. Hier steht nur das Markup.

Gate gruen, 14 von 14.

## Entschieden am 02.09.2026: Weissraum statt Trennlinien

**Keine Trennlinien mehr im Inhalt** (André: "Mir gefällt es ohne Linie fast
besser"). Entfernt sind die Abschnittslinie (`.abschnitt` border-top), die Linie
zwischen zwei Projekten (`.arbeit + .arbeit`) und die Linie ueber "Ausserdem".
Der Weissraum traegt jetzt, gemessen 128px zwischen den Projekten, beide gleich.
Dieselbe Entscheidung wie im Lebenslauf, wo ausser der Linkunterstreichung keine
waagerechte Linie steht.

**Die Tag-Chips behalten ihren Rahmen** (André). Gegenprobe gemessen: der
Chiprahmen liegt bei rgb(210,214,219), der Buttonrahmen bei rgb(142,148,157),
also etwa doppelter Kontrast, dazu 13px gegen 15px und das Orangequadrat nur
beim Button. Die beiden Kaesten konkurrieren nicht, die Hierarchie ist messbar.

**Alle Beleg-Buttons sind gleich.** Die Sonderklasse `.beleg-link.schmal` ist
geloescht, sie existierte fuer ein einziges Element und ueberschrieb beide
Polsterwerte: der colibre-Button war 32,5px statt 40,5px hoch und stand als
Inline-Element IM Textabsatz statt in einem eigenen `div.belege`. Abstand nach
oben jetzt 16px nach Chips und 12px nach Text; optisch dasselbe, weil unter
einer Textzeile noch 3,8px halber Durchschuss stehen.

**Der Saeulenbalken misst die Spalte.** Er stand fuenfmal in gleicher Groesse,
auch ueber "Woher das kommt" und "Kontakt", und markierte damit nur "neuer
Abschnitt". Jetzt tragen die drei Saeulen 176 x 3px in ihrer Bereichsfarbe, die
uebrigen Abschnitte 32 x 1px. 176px ist die Breite des linken Streifens, der
Balken endet also an der Kante der Textspalte. Neu dafuer:
`--streifen-breite: 11rem`, einmal benannt, speist Raster und Balken.
**Bewusst keine Medienregel fuer schmale Ansichten:** unter 900px faellt die
zweite Spalte weg, der Balken bleibt 176px und deckelt dann die Bezeichnung.
Auf volle Breite gezogen wird daraus wieder eine waagerechte Linie quer durch
die Spalte, also genau das, was oben entfernt wurde. Am Rendering geprueft.

Verworfen wurden zwei Alternativen: ein dickerer kurzer Balken (32 x 6px, das
Verhaeltnis kippt zum Klotz) und beides zusammen (176 x 6px, bei drei
verschiedenen Farben auf einer Seite zu praesent).

## Offen

- [ ] Gegenprobe nach dem Deploy: `curl` auf andreux.design, Claim und Sprungmarken sichtbar
- [ ] **Fallstudienseiten** für GoTiger, Filo, colibre, mit Kurzfassungen auf
      der Hauptseite (Schritt zwei, André 16. und 17.09.)
- [ ] **Driftprüfung als Gate:** Seite gegen `texte/website.md` in beide
      Richtungen, heute ein Skript im Scratchpad. Es gibt keine Leitung
      zwischen den Repos, also braucht das Gate die Textdatei als Argument
- [ ] **Tag-Chips:** Feld `tags` in den Projektkarten der Quelle, dann wieder
      auf die Seite; bis dahin keine Chips (Entscheidung André ausstehend)
- [ ] **Bilder.** Grafiken rendert André nach der Teilung in Fallstudien
- [ ] `VORSCHLAG-positionierung.md` ist seit dem 16.09. überholt (Claim,
      Struktur und colibre sind anders entschieden); Hinweis steht im Kopf,
      löschen oder archivieren entscheidet André
- [ ] Ein Prüfweg für die englische Fassung fehlt weiterhin
- [ ] CLAUDE.md nennt „dreizehn Prüfungen gegen index.html und
      impressum.html"; es sind 17 je Seite über drei Seiten
- [ ] Astro aufsetzen. `@andreux/design-tokens` ist seit dem 31.08.2026
      eingebunden, ueber package.json auf v1.1.0 und `npm run tokens`
- [ ] Netlify-Buildeinstellungen setzen (Buildbefehl, Publish-Verzeichnis).
      Existieren heute nicht, weil die Seite ohne Build ausgeliefert wird
- [ ] Content Collection für Fallstudien mit Zod-Schema
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

- **Säulenzeichen ist die Zählung plus Farbe im Wort, Buttons ohne
  Quadrat** (André, 17.09.). Siehe Nächster Schritt, Punkte 1 bis 3, mit
  Begründung. Verworfen: Tag-Kasten in Säulenfläche (die Akzentfläche ist
  die volle Farbe, Text darauf unlesbar; bräuchte ein neues Token „helle
  Fläche je Akzent" im Tokenrepo), Kreis als zweiter Glyph (nur ein rundes
  Quadrat), Rahmen plus Quadrat als Tag.

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
