# Stand: andreux-design-site

Letzte Aktualisierung: 2026-09-30

## Nächster Schritt

**Erster Bildschirm nur Titel, Einleitung darunter, Titel und Nummer noch
größer** (André, 30.09. spät abends; Vorschlag von ihm, Umsetzung nach
meiner Beratung: keine Viewport-Rechnung mit 100vh, weil die Browserleiste
am Handy die Höhe ändert; der Abschnittsabstand setzt die Einleitung an die
Falz). Markup beider Sprachen: `.anschlag` trägt Streifen, Rolle und h1;
neu `section.abschnitt.einleitung` mit Absatz, „Inhalt" und Sprungmarken,
ab 900px in der Textspalte. Tokenpaket auf **v1.4.0**, Stufe 18 = 141px,
45 Leiterprüfungen grün. Größen jetzt:

| | Handy 390 | Desktop 1280 |
|---|---|---|
| Seitentitel | 49, fünf Zeilen | 99, vier Zeilen |
| Säulennummer | 99 | 142 |
| Säulentitel | 49 | 70 |
| Kartentitel | 34 | 49 |

Gemessen: Titel endet bei 519 (Handy) und 660 (Desktop), Einleitung beginnt
bei 647 und 916, also am Desktop unter der Falz von 900. Gate grün, drei
Seiten, Drift 96 zu 96. Die Share-Bilder sind unverändert, sie tragen nur
den Claim.
**Danach (André, 30.09., Nachricht während des Baus):** „Designsysteme" muss
in eine Zeile passen, die Nummer darf größer sein als der Seitentitel.
Säulentitel wieder Stufe 6 bis 12 (34 am Handy, 70 am Desktop), der weiche
Trennstrich ist raus; Nummer bleibt 99 und 142. Gemessen: eine Zeile bei
320, 390 und 1280. Nebenbei: bei 320px lief die LinkedIn-Adresse im Kontakt
53px über den Rand, Altbefund, das Gate misst nur 390; jetzt darf sie
brechen. Zweiter Altbefund bei 320: „Bausteinbibliothek" im Kartentitel
mit 34px breiter als die Spalte; weicher Trennstrich im Wort und
`overflow-wrap: break-word` auf h3 als Fallback. Danach 320 ohne Überlauf.
Offen: das Gate um 320px erweitern.
**Überschriften skalieren unter 390px proportional** (André, 30.09. spät
abends: „bei allen Bildschirmen unter dem iPhone Pro mit clamp proportional
runter, nicht Copy oder andere Texte"). Umgesetzt mit `min(<Stufe durch
390 in vw>, <bisheriger Wert>)` an Seitentitel, Säulennummer, Säulentitel
und Kartentitel; Fließtext 17, Einleitung 19, Meta 13 bleiben fest.
Gemessen: bei 320 Titel 40, Nummer 81, Säulen- und Kartentitel 28; bei 360
45, 91, 31; ab 390 unverändert 49, 99, 34; Desktop 99, 142, 70, 49. Kein
Überlauf bei 320, 360, 390, 430, 1280. Gate grün.
**Touch-Verhalten der Knöpfe** (André, 30.09.): kein Drag and Drop, keine
Aktivierung per Force Touch oder langem Halten, Scrollen beim Halten muss
gehen. Auf Sprungmarken, Belege, Hoch-Knopf, Kopf, Name, Kontakt, Fuß:
`-webkit-user-drag: none`, `-webkit-touch-callout: none`, `user-select:
none`; `touch-action` bewusst nicht gesetzt. Gemessen in Chromium an allen
sieben: select none, drag none, touch-action auto. touch-callout ist
Safari-eigen und am Gerät zu prüfen. **Ablauffehler dabei:** der Commit
ging vor dem Gate auf `main`, weil ein Prüfbefehl scheiterte und die
Commit-Zeile nicht an die Kette gebunden war; Gate danach nachgeholt, grün.
**Press-Animation** (André, 30.09.: Buttons brauchen eine Press-Animation,
„die sich löst, sobald man scrollt, auf Desktop auch Hover"). Nicht
`:active`, sondern Klasse `.gedrueckt` aus dem Seitenskript: pointerdown
setzt sie, pointerup, pointercancel, pointerleave und jedes Scrollen löschen
sie. Zustand: scale(0.96) und `--flaeche-gehoben`, Dauer `--dauer-1`. Hover
nur unter `(hover: hover) and (pointer: fine)`: gehobene Fläche, am
Hoch-Knopf stärkerer Rahmen. Gemessen in Chromium: gedrückt matrix 0.96
und rgb(244,246,248), nach 40px Scroll gelöst, nach Loslassen gelöst;
keine JS-Fehler. Gegenprobe Safari am Gerät bei André.

**Typo- und Raumskala dramatisiert, auf `main`** (André, 30.09. abends,
„Let's go" nach zwei Prüfungen, siehe Entschieden). Tokenpaket auf
**v1.2.0**, danach v1.3.0: Stufen 12 und 15 in Leiter und Webprojektion,
70 und 99px, Leiterprüfungen und Kontrast grün, getaggt und gepusht.
Hier gemessen nach dem Umbau:

| | Handy 390 | Desktop 1280 |
|---|---|---|
| Text, Kartentitel, Seitentitel | 17, 34, 49 | 17, 49, 70 |
| Säulentitel, Säulennummer | 49, 70 | 70, 99 |
| innen, Karte zu Karte, Abschnitt zu Abschnitt | 16, 64, 128 | 16, 64, 256 |

Alles Leiterwerte; 1,5em an der Nummer und die 80px zwischen Karten sind
weg. Umgesetzt: h1 und Säulen-h2 `clamp(--schrift-6, 6vw, --schrift-12)`,
70px ab 1167px; h3 ab 900px Stufe 6; `.abschnitt` am Desktop `--raum-12`,
Anschlag unten ebenso; letzte Karte ohne Unterpolster, letztes Element einer
Karte ohne Unterabstand. Gate grün, drei Seiten, Drift null. Nebenbei:
`package-lock.json` pinnt jetzt Playwright 1.63.0, vorher stand es nicht in
der Sperrdatei; lokal sind Chromium 1234 als 1243 verlinkt (Umgebung).
**„Wirklich dramatisch"** (André, 30.09. abends: Zahl richtig groß, dann
recht groß die Headline, auch die Kartentitel größer; ein Zwischenschritt in
Mono war nicht gemeint und ist zurückgenommen). Tokenpaket auf **v1.3.0**,
Stufe 15 = 99px, 44 Leiterprüfungen grün. Jetzt: Seitentitel und
Säulentitel Stufe 9 bis 12 (49 bis 70), Nummer 12 und 15 (70 und 99),
Kartentitel 6 und 9 (34 und 49) mit Display-Zeile, Text 17. Seitentitel am
Handy fünf Zeilen, Kartentitel höchstens vier. Gate fiel zuerst mit 1px
Überlauf bei 390px: „Designsysteme" ist bei 49px 375px breit, die Spalte
358, und `1fr` (Minimum auto) ließ die Spur wachsen. Behoben mit `&shy;`
im Wort (nur deutsch, die h2 steht nicht in der Driftprüfung) und
`minmax(0, 1fr)` im Raster. Danach grün, Drift null.

**Säulentitel dominant, Sprungmarken als Knöpfe** (André, 30.09.2026, am
Handy: Sprungmarken nicht als Buttons erkennbar; in den Säulentiteln „die 1
groß geschrieben, der Rest kleiner"; Vorschlag: dominante
Abschnittsüberschriften, die bisherigen Headlines als Subtext darunter).
Umgesetzt allein im Stylesheet, gemergt nach grünem Gate:

1. **Sprungmarken** tragen den 1px-Rahmen `--linie-stark` und die Polster der
   Belege-Buttons; gemessen 297x44 bei 390px. Auf dem Handy stehen sie
   untereinander, drei Knöpfe.
2. **Säulen-H2** in Display-Schrift und der Größe des Seitentitels (34px bei
   390, 49px bei 1280), Nummer und Wort gleich groß, beides in `--marke-text`,
   keine Versalien mehr. Ab 900px in der Textspalte wie der Seitentitel;
   gemessen: h1, h2, Anspruch und h3 alle auf 272px links.
3. **Anspruch** ist Untertext: `--schrift-1`, `--tinte-gedaempft`, dieselbe
   Stufe wie der Eröffnungsabsatz. Die Hierarchie ist damit h1 = Säulen-h2
   (34 bis 49) > h3 (24) > Anspruch (19) > Text (17).

**Feinschliff danach (André, 30.09., am Handy, „Buttons sehen gut aus"):**
„Produkte" im Claim ebenfalls in Säulenfarbe, beide Sprachen; Text in den
Sprungmarken mittig statt auf der Grundlinie (gemessen: Textmitte 1012,5,
Knopfmitte 1013,3); die Nummer steht 1,5em groß über dem Säulentitel statt
daneben, damit der Titel ohne hängenden Einzug umbricht (51px bei 390,
74px bei 1280).

**Hoch-Knopf** (André, 30.09., „Sieht cool aus", danach: ein FAB rechts,
der zu den drei Sprungmarken zurückführt). `a.hoch` mit Pfeil-SVG, fester
Platz unten rechts, 48x48, 1px grauer Rahmen wie alles Anklickbare, keine
Füllfarbe. Ein Anker auf `#bereiche` (neue Kennung auf `ul.sprungmarken`),
IntersectionObserver blendet ihn nur ein, wenn die Sprungmarken über dem
Bild liegen. Gemessen bei 390px: unsichtbar oben (opacity 0, keine
Pointer-Events), sichtbar nach 2400px Scroll, nach dem Klick liegen die
Sprungmarken 24px unter der Kopfzeile. Keine JS-Fehler. Beide Sprachen.
**Befund von André danach:** nach dem Tipp sprang die Seite beim Neuladen
nach oben. Ursache war der Anker `#bereiche` in der Adresse, der beim
Neuladen gegen die gemerkte Position gewinnt; reproduziert (906px statt
3000px). Jetzt scrollt der Knopf per Skript ohne Adressänderung, unter
prefers-reduced-motion ohne Animation; ohne Skript bleibt er ein Anker.
Gemessen danach: kein Anker in der Adresse, Position nach Neuladen 3000px.
**Zweiter Befund (André, 30.09.):** nach dem Neuladen unten auf der Seite
blieb der Knopf weg, auf dem iPhone. In Chromium nicht reproduzierbar,
WebKit ist in der Umgebung nicht installiert. Ursache nach Lage: Safari
stellt die Position her, ohne dass der IntersectionObserver noch einmal
meldet. Jetzt ohne Beobachter: Prüfung der Zielposition beim Scrollen
(rAF-gedrosselt), bei `load`, bei `pageshow` und sofort. Chromium: oben
unsichtbar, unten sichtbar, nach Neuladen bei 3000px sichtbar, nach Klick
unsichtbar.
**Dritter Befund (André, 30.09.):** nach dem Neuladen sprang die Seite an
den Anfang des Bereichs, in dem er war. Ursache: die Sprungmarken und die
Kopfzeile sind Anker, nach dem Tipp steht `#designsysteme` in der Adresse.
Jetzt nimmt ein `hashchange`-Handler den Anker per `replaceState` aus der
Adresse, der Sprung selbst bleibt nativ (Fokus, scroll-margin). Gemessen:
nach Tipp kein Anker, Bereich 72px unter dem Rand, Position nach Neuladen
4809px wie davor. Ein Anker von außen landet weiter richtig.
**Gegenprobe auf dem iPhone durch André, 30.09. abends: „Läuft clean.“**
Hoch-Knopf, Neuladen und Sprungmarken sind damit am Gerät bestätigt.
**Vierter Befund (André, 30.09., Screenshot):** am Seitenende deckte der
Knopf das „Impressum" ab. Der Fuß reserviert jetzt unten die Knopfhöhe plus
Abstand (48px plus `--raum-6`, ab 900px `--raum-8`). Gemessen bei maximalem
Scroll: keine Überdeckung, 21px zwischen Knopf und Impressum bei 390 wie
1280. Die Desktop-Regel steht hinter `.fuss`, davor wurde sie überschrieben.
**„Inhalt" über den Sprungmarken** (André, 30.09.: eine Trennung zum
Absatz, „bin ja gegen Linien, aber vielleicht helfen die", und eine
Überschrift wie Inhalt). Kein neues Zeichen: `h2.inhalt-titel` in der
kleinen Versalzeile mit dem 32px-Strich, wie „Was ich suche" und „Kontakt";
`ul#bereiche` trägt `aria-labelledby` darauf. Gemessen: 48px vom Absatz zum
Titel, 12px vom Titel zu den Knöpfen, 13px Schrift, beide Breiten. Englisch
„Contents". Fünfte Stufe der Hebe-Animation ergänzt.
**Hoch-Knopf springt auf „Inhalt"** statt auf die Liste (André, 30.09.: der
Abschnitt soll ganz zu sehen sein). Gemessen bei 390px nach dem Klick:
Kopfzeile bis 69px, Strich über „Inhalt" bei 93px, Liste endet bei 282px,
kein Anker in der Adresse.
**filo klein** (André, 30.09.: „filo wird immer klein geschrieben").
Kartentitel und Satzanfang auf beiden Seiten und in den Kopien unter
`uebergabe/` geändert. **Die Quelle im Bewerbungsrepo schreibt noch
„Filo"** (`texte/website.md`, vermutlich auch `cv/cv-data.json`); dort
nachziehen, sonst kommt die Großschreibung mit der nächsten Übergabe
zurück. Die Driftprüfung teilt jetzt erst an Blockgrenzen, dann an
Satzenden, sonst wäre ein klein beginnender Satz mit dem davor
verschmolzen; Zählung dadurch 96 statt 94, beidseitig gleich.

Die Sprungmarke oben bleibt Meta-Schrift in Versalien, weil sie ein Knopf
ist; Nummer, Farbe und Wortlaut sind mit der H2 gleich. Nebenabschnitte
(Was ich suche, Kontakt) behalten die kleine H2 im Streifen. Am Handy
bestätigt (André, 30.09.: „Sieht cool aus“).

**Text auf dem Stand vom 30.09.2026, beide Sprachen, auf `main`.** Quelle ist
`texte/website.md` im Bewerbungsrepo, Commit 06ce533, von André als Kopie
unter `uebergabe/` abgelegt, weil das Bewerbungsrepo für Sitzungen aus diesem
Ordner gesperrt ist. Drei Stellen nachgezogen: Token-Karte um die App „one
conference" ergänzt, Kampagnen-Karte samt Überschrift ersetzt („Ein System
für ganze Funnels", Wizard, Faktenprüfer: Werbekampagnen war Hochstufung),
„ganzen" aus dem Anspruchssatz Designsysteme gestrichen (André, 30.09.).
Driftprüfung gegen die abgelegte Datei: 94 Sätze auf der Seite, 94 in der
Quelle, kein Unterschied. Gate grün, drei Seiten. Die englische Fassung folgt
der Übergabe Satz für Satz, weiterhin ohne eigenen Prüfweg. Die Überschrift
der Kampagnen-Karte steht nicht in `texte/website.md`, das ist eine Lücke im
Prüfweg. `uebergabe/` ist eingecheckt und die Driftprüfung ist ein Gate
(`bin/drift.mjs`, in `npm run gates`), Gegenprobe mit verfälschtem Satz
schlägt an. `website-en.md` ist aus `index.en.html` erzeugt und dokumentiert
den Wortlaut, ein Prüfweg für Englisch ist das nicht.

**Regel seit dem 17.09.2026: Gate grün heißt Merge nach `main`, ohne
Rückfrage** (André, von unterwegs prüft er live am Handy). Steht in
`CLAUDE.md`, Abschnitt Livegang.

**Design ruht** (André, 17.09.: „Am Design arbeiten wir noch später
weiter"). Säulenzeichen, Buttons, Sprungziele und Hover sind live; weitere
gestalterische Änderungen erst auf Andrés Anstoß. Offen bleibt der Inhalt:
Fallstudienseiten für GoTiger, filo, colibre mit Kurzfassungen auf der
Hauptseite.


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
dem Protokoll: GoTiger, filo und colibre bekommen Fallstudienseiten, auf der
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
End-to-End-Produktdesign mit GoTiger, filo, colibre; Designsysteme mit der
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

- [ ] **Fallstudienseiten** für GoTiger, filo, colibre, mit Kurzfassungen auf
      der Hauptseite (Schritt zwei, André 16. und 17.09.)
- [ ] **Tag-Chips:** Feld `tags` in den Projektkarten der Quelle, dann wieder
      auf die Seite; bis dahin keine Chips (Entscheidung André ausstehend)
- [ ] **Bilder.** Grafiken rendert André nach der Teilung in Fallstudien
- [ ] `VORSCHLAG-positionierung.md` ist seit dem 16.09. überholt (Claim,
      Struktur und colibre sind anders entschieden); Hinweis steht im Kopf,
      löschen oder archivieren entscheidet André
- [ ] Ein Prüfweg für die englische Fassung fehlt weiterhin
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
- [ ] Gate um 320px erweitern (LinkedIn-Adresse lief dort über, 30.09.)
- [ ] Skills `fallstudie-schreiben` und `seite-pruefen`
- [ ] Überschrift der Kampagnen-Karte steht nicht in `texte/website.md`, Lücke im Prüfweg (Übergabe 30.09.)
- [ ] `vercel-labs/web-interface-guidelines` als Referenzdatei einlagern,
      nicht als Skill installieren: der holt seine Regeln zur Laufzeit per
      WebFetch, das taugt nicht für reproduzierbare Ausgabe

## Entschieden

- **Skala ausreizen statt Verhältnis ändern** (André, 30.09.2026). Die
  Leiter bleibt 1,125 mit Display auf jeder dritten Stufe (1,42); dramatischer
  wird sie, indem der Titel bis Stufe 12 geht und die Ebenen des Raums
  mindestens Faktor 2 auseinanderliegen. Verworfen: zweites Verhältnis für
  Display, fließender Raum per clamp (Werte zwischen den Stufen).

- **Kein Sprung nach oben beim Neuladen** (André, 30.09.2026, nach
  Abwägung). Der Browser stellt die Scrollposition wieder her, und das soll
  so bleiben: wer beim Lesen neu lädt oder per Zurück vom Prototyp kommt,
  landet an seiner Stelle. Nach oben führen der Name in der Kopfzeile und
  der Hoch-Knopf. Anker-Links gewinnen ohnehin gegen die gemerkte Position.

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
mit Prototyp und PDF, filo mit der Thesis und colibre mit dem Prototyp; das
Colibre-PDF bleibt draussen, es nennt das falsche Semester. **Der Lebenslauf
wird vorerst NICHT verlinkt** (André, 31.08.2026): die zugeschnittene Fassung
steht noch aus, die vollstaendige braucht sieben Seiten. Das Markup dafuer
steht als Kommentar an seiner Stelle.


**2026-07-26** Repo geklont, Einstellungen aufgeräumt (Beschreibung, Homepage,
Topics; Wiki, Issues und Projects abgeschaltet). Projektkonfiguration angelegt.
Inhalt bewusst noch unangetastet.
