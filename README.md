# Stop Time Tester

A set of 12 browser-based reaction-time games (hold-and-release "Stop" variants and tap-and-stop "Go/Stop" variants) with increasing cognitive load: color cycling, shape/letter matching, and a 4-square spatial variant.

Open `index.html` in a browser (or visit the GitHub Pages deployment) and pick a game; controls are spacebar-only, no build step required.

Optionally logs each round's results (reaction time, taps, hesitation, etc.) to a Google Sheet: deploy `google-apps-script.js` as a Google Apps Script Web App and paste the resulting URL into `SCRIPT_URL` in `results-logger.js`.

See `SESSION_NOTES.md` for game mechanics and setup detail.
