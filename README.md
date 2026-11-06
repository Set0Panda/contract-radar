# Contract Radar

Who is out of contract, when, and where the market is thin. A static site built on Riot's League-Recognized Contract Database.

**Live site:** https://set0panda.github.io/contract-radar/

- **Expiry radar** - current players by contract end date. Ended and undated listings are hidden by default and can be switched on. Filter by region, league, role and search; click any column header to sort, click again to reverse.
- **Aligned end date countdown** - days until Riot's yearly aligned contract end date (2026: Mon 16 Nov, 23:59 UTC) and when free agency opens. After it passes, the banner switches to "Free agency opened".
- **Region freshness** - how old each region's source sheet is, with a Current / Aging / Stale tag. An old sheet means old dates. Click a region to filter the radar to it (click again to clear).
- **Market board** - who is exposed in a chosen window, by role.
- **What changed** - additions, removals, moved end dates and role changes between daily snapshots. Tracking started 6 Nov 2026, so it fills in as the sheet changes.
- **Data health** - problems in the source sheets, so you know what not to trust: stale sheets, duplicates, missing roles, ended dates still listed, and end dates that fall off Riot's aligned calendar.

Unofficial fan project, not affiliated with or endorsed by Riot Games. Powered by claude.ai (Claude, an AI assistant by Anthropic): the code and data processing were written by AI, so verify anything important against Riot's sheet. Team and league logos are trademarks of their owners.

## Reading the data
- Under Riot's rules a player is free to sign anywhere once their end date passes. The bigger risk is the other way round: extensions can be signed at any time and may not be on the sheet yet.
- Several sheets list the day after the aligned date (for example 17 Nov) instead of the date itself. The site treats both as on-calendar.
- Each region sheet is updated on its own schedule. Check the freshness cards before trusting a region.
- KR roles are not in Riot's sheet. They come from Leaguepedia and are marked as such.
- The aligned-date calendar comes from a secondary source (see `reference/SOURCES.md`), not Riot's rulebook.

## How it works
No build step: open `index.html`. `data.js` and `history.js` are rewritten every day by `.github/workflows/refresh.yml` (05:43 UTC, also runnable by hand), which runs `scripts/refresh.js`. The script stops without writing anything if its sanity checks fail (a region missing, row count off by more than 15%), so a broken sheet keeps yesterday's data live. Legal names and team contact emails are never written. The workflow needs Settings -> Actions -> General -> "Read and write permissions" to commit the refreshed files.

Visitor counts use GoatCounter (no cookies); the code is set in `site-config.js`.

## Layout
- `index.html`, `data.js`, `history.js`, `logos.js`, `regions.js`, `roles-kr.js`, `site-config.js` - the site.
- `assets/` - logo images and the original images supplied by hand. `logos/` are team logos, `regions/` the small region icons, `regions-hi/` the large league logos used in the header cards, `source-uploads/` the hand-supplied originals. `node tools/build-logos.js` rebuilds `logos.js` and `regions.js` from them.
- `reference/` - source notes (`SOURCES.md`) and raw logo pulls.
- `scripts/refresh.js` - the daily refresh.

## Host it
GitHub Pages: Settings -> Pages -> deploy from branch `main`, folder `/ (root)`.

## Feedback
Still a work in progress. Bugs, wrong data and ideas are welcome: open an issue on this repo.
