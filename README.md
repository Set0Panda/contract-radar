# Contract Radar

Who is out of contract, when, and where the market is thin. A static site built on Riot's League-Recognized Contract Database.

- **Expiry radar** - every listed contract by end date, with filters.
- **Market board** - who is exposed in a chosen window, by role.
- **What changed** - additions, removals, moved end dates and role changes between daily snapshots.
- **Data health** - problems in the source sheets, so you know what not to trust.

Unofficial fan project, not affiliated with or endorsed by Riot Games. Team logos are trademarks of their owners.

## How it works
No build step: open `index.html`. `data.js` and `history.js` are rewritten every day by `.github/workflows/refresh.yml`, which runs `scripts/refresh.js`. The script stops without writing anything if its sanity checks fail (a region missing, row count off by more than 15%), so a broken sheet keeps yesterday's data live. Legal names and team contact emails are never written.

## Layout
- `index.html`, `data.js`, `history.js`, `logos.js`, `regions.js`, `roles-kr.js` - the site.
- `assets/` - logo images (`logos/`, `regions/`) and the original images supplied by hand (`source-uploads/`). `node tools/build-logos.js` rebuilds `logos.js` and `regions.js` from them.
- `reference/` - source notes and raw logo pulls.
- `scripts/refresh.js` - the daily refresh.

## Host it
GitHub Pages: Settings -> Pages -> deploy from branch `main`, folder `/ (root)`.
