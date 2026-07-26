# Stand: andreux-design-site

Letzte Aktualisierung: 2026-07-26

## Nächster Schritt

**Noch nicht anfangen.** Das Layoutvorgehen wird zuerst im CV-Projekt geklärt,
weil beide Projekte dieselben Tokens benutzen und die gestalterische Richtung
dort entschieden wird. Solange sie offen ist, würde hier gebaut und verworfen.

## Offen

- [ ] Astro aufsetzen, `@andreux/design-tokens` einbinden
- [ ] Netlify-Buildeinstellungen setzen (Buildbefehl, Publish-Verzeichnis).
      Existieren heute nicht, weil die Seite ohne Build ausgeliefert wird
- [ ] Content Collection für Fallstudien mit Zod-Schema
- [ ] Erste Fallstudie: **Filo**, nicht das Landingpage-System.
      Filo ist unstrittig eigene Arbeit, beim LP-System liegen die Rechte
      laut Vertrag beim Arbeitgeber
- [ ] Entscheiden, was von den 23 MB in `downloads/` bleibt
- [ ] Historienballast: Repo 46,5 MB gegen 23 MB Arbeitsverzeichnis.
      Bereinigen ginge nur durch Umschreiben der Historie
- [ ] `impressum.html`: Linktext `hello@andreux.design`, `href` zeigt auf
      `info@andreux.design`. Stimmt nicht überein
- [ ] Skills `fallstudie-schreiben` und `seite-pruefen`
- [ ] `vercel-labs/web-interface-guidelines` als Referenzdatei einlagern,
      nicht als Skill installieren: der holt seine Regeln zur Laufzeit per
      WebFetch, das taugt nicht für reproduzierbare Ausgabe

## Entschieden

- **Astro**, statisch, Content Collections für Fallstudien
- **Deploy über Git**, wegen Vorschau-URLs pro Branch
- **Keine `/cv`-Seite aus den privaten Daten.** Nur ein verlinktes PDF der
  öffentlichen Variante
- **Flüssige Interaktionen erwünscht**, aber keine Inhalte hinter Scroll-Ereignissen
- Alles bisherige Design wird verworfen, nicht weiterentwickelt

## Gemessen

| Befund | Wert |
|---|---|
| `#fff` auf `#FF7262` (aktueller Primärbutton) | 2,9:1, fällt durch AA |
| Repo gegen Arbeitsverzeichnis | 46,5 MB gegen 23 MB |
| Schrift geladen auf | 1 von 3 Seiten |

Die Akzentfarbe `#FF7262` ist Figmas eigene Markenfarbe.

## Log

**2026-07-26** Repo geklont, Einstellungen aufgeräumt (Beschreibung, Homepage,
Topics; Wiki, Issues und Projects abgeschaltet). Projektkonfiguration angelegt.
Inhalt bewusst noch unangetastet.
