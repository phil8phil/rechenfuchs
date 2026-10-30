# 🦊 Rechenfuchs

Mathe-Spiele für die 2. Klasse – Rechnen bis 100 ohne Finger.
Web-App (PWA) für iPhone und iPad: kein Server, kein Login, alle Daten bleiben auf dem Gerät.

## Die 9 Spiele

**Kopfrechen-Basics**
1. 💞 Verliebte Zahlen – Zehnerpartner (3 + 7), später bis 100
2. 👯 Verdoppeln – 6 + 6 und daraus 6 + 7
3. 🏠 Ergänzen bis 100 – Hausnummern und Kennzeichen, mit Zahlenstrahl-Hilfe

**Im Auto oder Wartezimmer**
4. ⛓️ Neuner-Kette – plus 10, minus 1 (Stufe 3: +11, +19)
5. 🔮 Zahlenrätsel – rückwärts rechnen; das Kind kann dem Fuchs auch selbst ein Rätsel stellen
6. 🤥 Geflunkert! – den Fuchs beim Schummeln erwischen

**Zuhause am Tisch** (gegen den Fuchs oder zu zweit)
7. 🃏 Karten bis 100
8. 🎲 Rückwärts bis 50
9. 🎃 Süßes oder Rechnen – Halloween-Brettspiel auf dem Kürbisfeld

**Reise zum Schloss (Gesamtziel):** Jede richtige Antwort ist ein Schritt auf der Karte. König oder Königin
wandert an 6 Hindernissen vorbei zum Märchenschloss, wo der Partner wartet. Ziel: 120 ⭐ (ca. 1 Woche, im
Eltern-Bereich auf 80–200 einstellbar). Danach gibt es ein Schlossfest, einen Reise-Pokal, und das Kind sucht sich die nächste Karte aus
(Märchenwald, Winterland, Zauberinsel, Zuckerland – jede mit eigenem Weg und eigenen Stationen).

Jedes Spiel hat 3 Stufen. Nach einer fast fehlerfreien Runde geht es automatisch eine Stufe höher.
Bei einem Fehler gibt es erst einen Tipp, beim zweiten die Lösung mit Rechenweg.
Jede richtige Antwort = 1 ⭐, alle 15 ⭐ gibt es einen Sticker (30 insgesamt).
Der Eltern-Bereich (mit kleiner Rechenfrage gesichert) zeigt Statistik, knifflige Aufgaben, Stufen, Tagesziel und Backup.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die komplette App (HTML, CSS, JS) |
| `manifest.webmanifest` | Name, Farben, Icons, Standalone-Modus |
| `sw.js` | Service Worker für Offline-Betrieb |
| `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | App-Icons |

## Veröffentlichen mit GitHub Pages

1. Neues **öffentliches** Repo anlegen, z. B. `rechenfuchs`
2. Alle Dateien in den Repo-Root hochladen („Add file → Upload files“)
3. Settings → Pages → *Deploy from a branch* → `main` / `/ (root)` → Save
4. Nach ca. 1 Minute erreichbar unter `https://<user>.github.io/rechenfuchs/`

## Installation auf iPhone / iPad

1. URL in **Safari** öffnen
2. Teilen → **Zum Home-Bildschirm**
3. App immer über das Icon starten (nur dort bleiben die Daten dauerhaft gespeichert)

## Updates

Nach jeder Änderung in `sw.js` die Version erhöhen:
```js
const CACHE = 'rechenfuchs-v1.4.1';
```
Sonst lädt das iPhone die neue Version nicht. Danach die App einmal schließen und neu öffnen.

## Daten

- Gespeichert in `localStorage` unter `rechenfuchs.v1` (mit Schema-Version und `normalize()` für spätere Migrationen)
- Backup: Eltern → *Backup exportieren* (Teilen-Menü → „In Dateien sichern“, z. B. iCloud Drive)
- Wiederherstellen: Eltern → *Backup importieren*
- Ins Repo kommt nur Code, keine persönlichen Daten
