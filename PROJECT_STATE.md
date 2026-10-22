# Stand: andreux-design-site

Letzte Aktualisierung: 2026-10-22

## Nächster Schritt

**Cloudflare, bei André im Dashboard:** Bot Fight Mode bzw. JS-Detections,
E-Mail-Verschleierung und den Analytics-Beacon abschalten, danach Lighthouse
gegen die Live-Seite messen. Ziel ist die 99 von lokal; live stand die
Performance am 01.10. bei 41 bis 64, und 6,3 der 7,6 Sekunden Skriptzeit
kamen von Cloudflare. Es ist der einzige messbare Mangel, der nicht auf
Text oder eine Entscheidung wartet. Der Nachtest des Lesergremiums ist
durch (22.10.: alle vier Leser lesen Product Designer, drei von vier laden
ein; Tabelle in `doku/website-gremium-2026-10-21.md` im Bewerbungsrepo),
die Runde danach ist live. Alles andere unter Offen.

Der Verlauf vom 31.08. bis 02.10.2026 (Umbauten, Feinschliff, Messungen,
mit Andrés Wortlaut) steht in `doku/stand-bis-2026-10-02.md`.

## Offen

- [ ] **Wizard-Satz und „fünf Minuten"** in der Funnel-Karte sind
      eingefroren. André, 19.10.: der Wizard zieht bis Ende Oktober in ein
      internes System um, rund 30 Minuten im Erstaufbau. Das wird im
      Bewerbungsrepo geklärt und kommt als eigener Auftrag; bis dahin nichts
      daran ändern
- [ ] **Fallstudienseiten** für GoTiger, filo, colibre, mit Kurzfassungen auf
      der Hauptseite (Schritt zwei, André 16. und 17.09.). Text kommt über
      `uebergabe/`; Tintenkanten-Tabelle im Seitenskript um neue
      Anfangsglyphen ergänzen (Messlogik: Canvas bei 400px, erste
      eingefärbte Spalte, in em)
- [ ] **Bilder.** Grafiken rendert André selbst; vorbereitet werden laut
      Spezifikation vom 21.10. GoTiger und colibre, filo bleibt ohne Bild,
      one conference ohne Bild und Link
- [ ] **Favicon** entscheiden; heute `href="data:,"` gegen die 404
- [ ] **Lighthouse live** nach Cloudflare messen (siehe Nächster Schritt)
- [ ] Ein Prüfweg für die englische Fassung fehlt weiterhin. Englisch wird
      nur übersetzt, kein Lektor; die Kopie `website-en.md` ist aus
      `index.en.html` erzeugt, die Drift prüft Englisch also gegen sich
      selbst. Vorschlag vom 02.10., beides im Bewerbungsrepo: Satzpaare
      DE/EN mit Prüfung, die anschlägt, wenn nur der deutsche Satz sich
      ändert; ein englischer Lektor, der nur liest. André, 02.10.: gemerkt,
      keine Priorität. Der Absatz „How I work" vom 20.10. ist die erste
      Übersetzung, die im Bewerbungsrepo durch Lektor und Faktenprüfer ging
- [ ] **CLAUDE.md** hier nennt unter „Stand" noch den 31.08. und sagt
      nichts zu Bewegung, `_headers`, `/en` und den Abschnitten „Aus dem
      Studium" und „Wie ich arbeite"; der Pin steht seit dem 20.10. richtig
      auf v1.5.0
- [ ] **Tag-Chips:** Feld `tags` in den Projektkarten der Quelle, dann wieder
      auf die Seite; bis dahin keine Chips (Entscheidung André ausstehend)
- [ ] `VORSCHLAG-positionierung.md` ist seit dem 16.09. überholt (Claim,
      Struktur und colibre sind anders entschieden); Hinweis steht im Kopf,
      löschen oder archivieren entscheidet André
- [ ] Astro aufsetzen. `@andreux/design-tokens` ist seit dem 31.08.2026
      eingebunden, über package.json gepinnt, seit dem 20.10. auf v1.5.0,
      `npm run tokens`
- [ ] Netlify-Buildeinstellungen setzen (Buildbefehl, Publish-Verzeichnis).
      Existieren heute nicht, weil die Seite ohne Build ausgeliefert wird
- [ ] Content Collection für Fallstudien mit Zod-Schema
- [ ] Entscheiden, was von `downloads/` bleibt. Heute vier PDFs (Thesis
      6 MB, GoTiger DE und EN, der nicht verlinkte Lebenslauf) und
      `test.gitkeep`
- [ ] **Historienballast, jetzt auch eine Rechtefrage.** 36 MB Historie gegen
      13 MB Arbeitsverzeichnis. Die am 31.08.2026 gelöschten Interone-PDFs
      stehen weiter in Commit `2562c8f` und sind auf GitHub abrufbar. Wirklich
      weg sind sie erst durch Umschreiben der Historie
- [ ] Skills `fallstudie-schreiben` und `seite-pruefen`
- [ ] `vercel-labs/web-interface-guidelines` als Referenzdatei einlagern,
      nicht als Skill installieren: der holt seine Regeln zur Laufzeit per
      WebFetch, das taugt nicht für reproduzierbare Ausgabe

## Entschieden

- **Runde nach dem Nachtest** (André, 22.10.2026, über die
  Bewerbungssitzung). Die Tokens-Karte endet nicht mehr mit der
  Einschränkung: „Ob es heute im Einsatz ist, weiß ich nicht" steht jetzt
  als dritter Satz im Text, das Ergebnis endet mit den Verantwortlichen;
  ein Satz weniger durch ein Semikolon (79 statt 80). **Abschnittstitel
  eine Leiterstufe über den Kartentiteln:** der Kritiker fand h2 und h3
  gleich groß (beide 24/49). Die Leiter hat zwischen Stufe 3 und 6 keinen
  Token, und Karten auf Stufe 1 (19px) wären neben 17px Text kein Titel
  mehr; deshalb gehen die Abschnitte hinauf auf 6/12 (34/70), die Größe
  der Säulentitel, die dazu Nummer und Farbe tragen. Vier Stufen:
  Säule 34/70 mit Nummer, Abschnitt 34/70, Karte 24/49, Label 13. „Aus dem
  Studium" in `--tinte-gedaempft`, Größe wie die anderen, nur die Farbe
  sagt Nebenabschnitt (vorher las es sich wie ein vierter Abschnitt ohne
  Nummer). Unverändert auf Andrés Wort: „Wie ich arbeite" am Ende,
  colibre gekürzt, Wizard-Absatz eingefroren. Merge 435a4fa.

- **Umbau nach dem Lesergremium** (André, 21.10.2026 „Alle sieben", 22.10.
  „Passt, mergen" nach der Vorschau am Handy). Vier Textleser (Design Lead,
  Bank-Recruiterin, UX Writer, Arbeitgeber-Sicht), ein visueller und ein
  englischer Leser im Bewerbungsrepo, dann Widersprecher und Zusammenführung;
  Spezifikation `umbau-spezifikation-2026-10-21.md` in iCloud. Umgesetzt:
  Schwerpunkte mit den Sprungmarken vor „Über mich" (der Absatz nennt jetzt
  2010, 2011 und 2019); Säule 1 bekommt „one conference" (ohne Bild, ohne
  Link, Streifen wie VW); die Bausteinbibliothek wandert von Säule 2 nach 3,
  weil sie mit dem Wizard ein System ist; Wizard-Karte heißt „Ein Wizard für
  Landingpages", erster Satz neu, Absatz eingefroren; der Geschmack-Absatz
  entfällt, dafür „Systeme, die wiederkehrende Arbeit übernehmen"; „Aus dem
  Studium" ohne Säulenfarbe (Quadrat `--tinte-leise`, Links
  `--tinte-gedaempft`), damit es nicht wie Säule 1 aussieht; filo und colibre
  gekürzt; Kontaktsatz als ruhige Einladung statt CTA. **Ergebnis-Absätze
  gleichrangig** zum Fließtext (Stufe 0, Tinte, gleiche Breite, kein Balken,
  Label in 500 bleibt): der Balken mit Einrückung und m1 gedämpft las sich
  als Fußnote, dabei stehen dort die Belege. Teilung der Absätze in Text und
  Ergebnis nach dem alten Muster, von der Bewerbungssitzung bestätigt; bei
  den Tokens bleibt „Ob das System heute im Einsatz ist, weiß ich nicht" im
  Ergebnis. Das Scroll-Zeichen springt auf `#h-inhalt` statt `#h-ueber`,
  sonst landete es unter den Sprungmarken. Englisch ist im Bewerbungsrepo
  neu geschrieben und einmal lektoriert, die erste englische Fassung mit
  Prüfweg. `.inhalt-titel` heißt jetzt `.folge-titel` (zweiter Titel in der
  Einleitung). Vorschau über PR 3, Merge 96a8407.

- **Quelldateien aus iCloud vor dem Übernehmen auf Größe prüfen** (22.10.,
  eigener Fehler). Eine 0-Byte-Datei (die Bewerbungssitzung hatte sie mit
  sed geleert) lief durch `sed`, und weil ein Prüfbefehl davor die
  &&-Kette brach, blieb der Zweigwechsel aus und die Umleitung überschrieb
  die Kopie auf `main`. Das Gate fiel, nichts war committet. Regel: erst
  Zweig prüfen (`git rev-parse --abbrev-ref HEAD`), dann Größe, dann
  schreiben; keine Umleitung in eine Repo-Datei hinter einem Befehl, der
  die Kette brechen kann.

- **Reihenfolge nach der Recruiter-Sicht** (André, 19.10.2026, „Ja, an die
  Website-Sitzung geben"). Eine Senior-Recruiter-Sicht im Bewerbungsrepo
  (`doku/recruiter-sicht-2026-10-19-website.md` dort) fand: oben „Über
  mich" und dann zwei Studienprojekte heben den Eindruck nicht, das
  stärkste Signal ist der Satz zu den 26 Bausteinen. Jetzt GoTiger, dann
  die drei Designsystem-Karten, dann das Funnel-System; filo und colibre
  stehen im eigenen Abschnitt „Aus dem Studium" (EN „Academic work") nach
  den Säulen, ohne Nummer und Marke, Titel in der Textspalte wie „Was ich
  suche" war. Die Kennzeichnung steht wie zuvor im Streifen
  („Bachelorthesis", „Sommersemester 2022, Studienprojekt"), kein weiterer
  Vermerk. In der Quelle ist der Abschnittstitel eine `##`-Zeile, kein
  `###`: die Drift zählt `###` als Kartentitel, 8 zu 7 hätte das Gate
  gekippt. „Hochwissenschaftlich war das nicht." ist gestrichen, das „aber"
  danach auch (Wahl Andrés vom 13.10., „Nur der zweite Teil").

- **„Wie ich arbeite" statt „Was ich suche"** (André, 19.10.2026, „B: Wie
  ich arbeite, zwei Sätze"; neuer Text 20.10., „Ja, so live"). Grund:
  Kollegen und die Geschäftsführung des jetzigen Arbeitgebers können über
  LinkedIn auf die Seite kommen, und der Abschnitt las sich als
  Wechselabsicht und Seitenhieb. Alle alten Sätze sind weg, auch Führung,
  Senior-Position und Vor Ort/Remote. Der Text vom 20.10. („Mein
  Schwerpunkt ist UX …") kam nach Recruiterin, Faktenprüfer und Lektor im
  Bewerbungsrepo, weil die Fassung vom 19.10. die Einleitung wiederholte und
  auf einem Lernziel endete. Die Kennung `h-suche` bleibt, sie ist Technik;
  die alten Titel stehen auch nicht mehr in HTML-Kommentaren, der Quelltext
  ist für jeden lesbar.

- **Kopf-Link „Was ich kann" springt auf „Inhalt"** (André, 20.10.2026,
  „Ja, auf Inhalt"). Der Name verspricht alle drei Bereiche; wer in Bereich
  1 landet, sieht nicht, dass es drei gibt. Der Listeneintrag
  „End-to-End-Produktdesign" und `/portfolio` zeigen weiter auf `#koennen`.

- **Bewegung, vier Entscheidungen** (André, 20.10.2026, Vorschläge von ihm,
  Umsetzung nach Beratung, am Handy über die Vorschau abgenommen: „Sieht
  gut aus. Auf main").
  1. *Druck färbt den Rahmen* in der Farbe des Labels oder Pfeils
     (`currentColor`): auf Touch ist der Druck die einzige Rückmeldung, die
     gehobene Fläche allein war im Dunkelmodus kaum zu sehen. Hover bleibt
     Tinte: Tinte heißt „könnte", Marke heißt „tue". Der am 17.09.
     verworfene farbige Rahmen galt dem Ruhezustand, nicht dem Druck.
  2. *Das Scroll-Zeichen winkt* endlos als Geste (Takt `--dauer-7`, 8px
     Weg: zügig runter bis 30 %, langsam zurück bis 60 %, dann Ruhe;
     Erststart nach `--dauer-6`, weil das Auge auf Veränderung reagiert
     und die nach dem Lesen des Titels kommen soll; bis zum 20.10. abends
     symmetrisch und dreimal) und ist nach dem ersten Scrollen still: die einzige Bewegung
     ohne Eingabe, deshalb mit Ende. Zuerst 3px und `--tinte-leise`, am
     Handy kaum zu sehen; jetzt `--tinte-gedaempft` wie der Hoch-Knopf.
     Animation auf dem SVG, weil Hover und Druck auf dem Anker schon
     `transform` tragen. Kein Schriftzug dazu: der erste Bildschirm bleibt
     leer, Mono-Versalien heißen Fakt, das aria-label trägt das Wort.
     *Unter 900px sitzt es über Safaris Leiste* (21.10.): der Anschlag ist
     100lvh hoch, beim Laden lag das Zeichen (80px über der Unterkante)
     unter der rund 90px hohen Leiste, deshalb „man sieht es kaum". Das
     Unterpolster wächst um `100lvh - 100svh`, im Vollbild um 0. Chevron
     unten und Pfeil im Hoch-Knopf bleiben verschieden: Hinweis gegen
     Handlung, dieselbe Familie (20px, Strich 1,75, runde Enden).
  3. *Sprünge federn ab:* die Seite scrollt selbst, Kurve `--kurve-aus` aus
     dem Token gelesen und als Bezier gelöst, Dauer nach Strecke von
     `--dauer-3` bis `--dauer-5` ab drei Bildschirmhöhen, Abbruch bei Rad,
     Finger oder Taste, Ziel auf das Seitenende begrenzt (sonst schlug
     Kontakt hart an). Der Browser kennt für `smooth` nur seine eigene
     Kurve ohne Dauer. Reduced Motion springt ohne Weg.
  4. *Kein Motion Blur, kein erzwungenes GPU-Rendering* (Andrés Frage).
     Scrollen ist schon eine Ebene auf der Grafikkarte; ein Filter auf dem
     Seiteninhalt kostet Frames und macht Text unlesbar, `will-change` auf
     einer seitenhohen Ebene kostet Grafikspeicher und ruckelt am iPhone.

- **Dauern als Leiter im Tokenpaket, v1.5.0** (André, 20.10.2026, „Token
  Paket anpassen"). Ab Stufe 2 ist jede Stufe die Summe der beiden davor:
  120, 200, 320, dann 520, 840, 1360, 2200. Die vier alten Werte folgten
  der Regel schon, sie steht jetzt im Generator statt vier Literale. Die
  Seite braucht 5 und 7. Gemacht aus dieser Sitzung heraus auf Andrés
  Wort, obwohl die Landkarte sagt, wer baut, öffnet den Ordner selbst;
  der Eingriff war eine Zeile, und die Tests dort decken alles ab.

- **Vorschau per Pull Request** (André, 20.10.2026: „Es gibt auf netlify
  Production und preview"). Netlify baut `main` und Deploy-Previews für
  Pull Requests; eine Zweig-URL ohne PR bleibt 404. Ein PR nur für die
  Vorschau heißt im Titel „noch nicht mergen" und schließt sich beim
  Git-Merge nach `main` selbst.

- **Versteckter Lebenslauf-Link** (André, 15.10.2026, über die
  Bewerbungssitzung). `downloads/cv-a02d94e90aaefeb1291ce053.pdf`,
  öffentliche Zwei-Seiten-Fassung, Ort statt Anschrift, ohne Telefon;
  nicht verlinkt, über `_headers` noindex und no-store. Gepflegt aus dem
  Bewerbungsrepo (`cv/varianten/zwei-seiten-oeffentlich.json` dort). André
  weiß, dass das Repo öffentlich ist und der Pfad dort lesbar bleibt; der
  Inhalt ist die öffentliche Variante. `_headers` bei Bedarf ergänzen,
  nicht ersetzen.

- **Nur die bereinigte Textkopie** kommt nach `uebergabe/` (Regel seit dem
  01.10., am 19.10. einmal verletzt und abgefangen: in iCloud lag kurz
  `texte/website.md` selbst mit Behauptungsliste und internen Kennungen).
  Vor dem Übernehmen auf Kennungen prüfen.


- **Zwei Orangewerte im hellen Thema bleiben** (André, 01.10.2026, „Lassen
  wir"). Fläche #FF4F00 (3,3:1 auf Weiß, reicht für Flächen), Text #BF3B00
  (5,5:1, nötig für AA); im Dunkeln ein Wert. Ein Orange für beides ginge
  nur über die Flächen, dann wäre International Orange im Hellen weg.

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
| Drift 01.10.2026, je Sprache, Seite zu Kopie (deutsch: fb17947) | 96 zu 96 Sätze, 7 zu 7 Kartentitel, 7 zu 7 Untertitel |
| Drift 20.10.2026, je Sprache, Seite zu Kopie | 88 zu 88 Sätze, 7 zu 7 Kartentitel, 7 zu 7 Untertitel |
| Druckrahmen = Textfarbe, hell (Magenta, Orange) | rgb(205,11,114), rgb(191,59,0); dunkel rgb(244,54,156), rgb(255,79,0); Ruhe rgb(142,148,157) / rgb(108,114,128) |
| Scroll-Zeichen | winken 2,2 s endlos, Start nach 1,36 s, Maximum 8px nach 550 ms, zurück nach 1,1 s (bis 20.10. abends x3 symmetrisch), Verzögerung 0,32 s, Weg 8px, Ruhe rgb(86,91,99); Reduced Motion 0,001 s x1 |
| Sprung Pfeil nach Einleitung (390x800) | Ziel 747 = Landung 747, ca. 474 ms, Schritte 9, 38, 80, 103 … 3, 2, 2, 1 |
| Sprung Hoch-Knopf vom Ende (8554px) | ca. 829 ms, Landung 48px unter dem Kopf |
| Kontakt-Ziel hinter dem Seitenende, vor der Begrenzung | 301 / 162 / 215 px (390x800, 390x660, 1280x900); letzte Schritte 61, 57, 51, 38 |
| Kontakt nach der Begrenzung | letzte Schritte 9, 7, 5, 2 auf allen drei Größen |
| Abbruch per Rad während des Laufs | Seite bleibt stehen (5382 = 5382), Inline-Stil zurückgesetzt |
| Kopf-Link nach „Inhalt" (1280 und 600) | Titel 48px unter dem Kopf, Liste endet bei 231 / 260 |
| Abschnitt „Aus dem Studium" | h2 bei 271 (1280) / 15,6 (390), Streifen bei 64 / 16 |
| Sora 600, Vorbreite H | 0,09 em (Gegenprobe W 0,0225, A 0,0175, D 0,09 wie in der Tabelle) |
| Tokenpaket v1.5.0, dauer-4 bis 7 | 520, 840, 1360, 2200 ms; dist ändert sich nur um diese Zeilen |
| Versteckter Lebenslauf, live | 200, application/pdf, X-Robots-Tag noindex, nofollow, noarchive; Cache-Control no-store; 2 Seiten, kein Telefonmuster |
| `downloads/` | 4 PDFs plus `test.gitkeep` (CLAUDE.md sagte „sechs", dann „sieben") |
| Viewport-Calc `calc(var(--raum-10) + 100lvh - 100svh)` | geparst in Chromium und WebKit; Probe mit 50svh ergibt 486px wie gerechnet |
| Drift 22.10.2026 nach dem Umbau, je Sprache | 80 zu 80 Sätze, 8 zu 8 Kartentitel, 8 zu 8 Untertitel |
| Ergebnis-Absatz nach dem Umbau | 17px, rgb(21,24,29), Breite 694 = Fließtext (1280), 358 zu 359 (390); Einrückung 0, Balken 0 |
| „Aus dem Studium" | Quadrat rgb(108,114,128), Beleg-Link rgb(86,91,99); Säule 1 bleibt rgb(255,79,0) |
| Scroll-Zeichen nach „Schwerpunkte" | 48px unter dem Kopf (390 und 1280); „Über mich" 48px unter der Liste |
| Neue Anfangsglyphen (Canvas 400px) | Sora 600: S 0,0375, F 0,09, T 0,0225; Plex Sans 400: Ü 0,0875, C 0,0575, Q 0,0575 |
| Mail-Link live | curl: /cdn-cgi/l/email-protection; im Browser nach Skript wieder mailto:hello@andreux.design |
| Seitenhöhe vor dem Umbau (Screenshots fürs Gremium) | DE 8247 / 9398, EN 7978 / 9076 (1440 / 390) |
| Drift 22.10.2026 nach Runde 2, je Sprache | 79 zu 79 Sätze, 8 zu 8 Kartentitel und Untertitel |
| Titelgrößen nach Runde 2 (390 / 320 / 1280) | Abschnitt 34 / 27,9 / 70; Säule 34 / 27,9 / 70; Karte 24 / 19,7 / 49; alle Abschnittstitel einzeilig, Überlauf 0 |
| Netlify | Deploy-Preview eines PR nach unter 1 Minute; Zweig-URL ohne PR nach 6 Minuten 404 |

Die Akzentfarbe `#FF7262` ist Figmas eigene Markenfarbe.

## Log

**2026-10-22, abends** Nachtest durch, Runde 2 live: Tokens-Karte umgestellt, Abschnittstitel auf 34/70, „Aus dem Studium" grau. iCloud-Kopien auf dem Stand vom 22.10.

**2026-10-22** Umbau nach dem Lesergremium auf `main`: Schwerpunkte vor
„Über mich", acht Karten in neuer Verteilung, Ergebnis gleichrangig,
Kontaktsatz, Englisch neu; Freigabe nach der Vorschau am Handy. iCloud
trägt jetzt beide Textkopien. Beim Übernehmen einer leeren Quelldatei die
Kopie auf `main` kurz überschrieben, vom Gate gefangen, wiederhergestellt.

**2026-10-21** Screenshots, technischer Rahmen und fünf eigene Punkte für
das Lesergremium an die Bewerbungssitzung; abends die Spezifikation
umgesetzt und als Vorschau bereitgestellt.

**2026-10-21** Scroll-Zeichen über Safaris Leiste gehoben und als Geste
getaktet, nach Vorschau am Handy auf `main`. Chevron und Pfeil bleiben
verschieden.

**2026-10-20** Kopf-Link auf „Inhalt". Bewegung nach Andrés Vorschlägen:
Druck färbt den Rahmen, das Scroll-Zeichen winkt bis zum ersten Scrollen,
Sprünge federn ab und enden am Seitenende; alles am Handy über eine
Deploy-Preview abgenommen, dann auf `main`. Tokenpaket v1.5.0 mit den
Dauerstufen 4 bis 7, Pin nachgezogen. Neuer Absatz „Wie ich arbeite" aus
dem Bewerbungsrepo. Verlauf bis 02.10. nach `doku/` ausgelagert.

**2026-10-19** Umbau nach der Recruiter-Sicht: GoTiger und Systemarbeit
vorn, filo und colibre unter „Aus dem Studium" am Ende, ein Satz
gestrichen. Abends „Wie ich arbeite" statt „Was ich suche". Die iCloud-Kopie
kam einmal als Quelldatei mit Kennungen, abgefangen, danach bereinigt.

**2026-10-15** Die Bewerbungssitzung legte den nicht verlinkten Lebenslauf
mit `_headers` auf `main` und berichtigte ihre eigene falsche Dateizahl in
`CLAUDE.md`; hier gegengeprüft, Kopfzeilen live gemessen, nichts geändert.

**2026-10-13** Satz zum Designsystem je Kunde berichtigt („damit ich selbst
einheitlich gestalten konnte"), Übergabe vom 12.10., Freigabe 13.10.; der
erste Versuch ging in eine Sitzung mit falschem Modell.

**2026-10-09** `/en` und `/en/` liefern die englische Fassung als Rewrite,
weil englische Bewerbungen direkt Englisch verlinken.


**2026-10-02** Der Absatz „Was ich suche" ist in vier Runden aus dem
Bewerbungsrepo neu gefasst und live; die englische Fassung ist nicht
lektoriert.

**2026-10-01** Übergabe aus dem Bewerbungsrepo umgesetzt: Die Driftprüfung
vergleicht jetzt auch Kartentitel und Untertitel, und der Satz zum
Designsystem des Kunden nennt den Fall „unzureichend", im Wortlaut des
Lektors aus dem Bewerbungsrepo (fb17947). Die echte Kopie der Textdatei kam
am Abend und weicht von der Seite nicht ab.

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
