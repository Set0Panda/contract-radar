# Sources and references

**Contract data** - Riot's League-Recognized Contract Database (Google Sheet `1Y7k5kQ2AegbuyiGwEPsa62e883FYVtHqr6UVut9RC4o`), one published CSV per region tab:
AME gid 0, CN 594163931, EMEA 148326031, KR 905624073, LCP 1177719586. Pulled by `scripts/refresh.js`. Legal names and team contact emails are dropped on read and never written to the repo.

**Team logos** - Leaguepedia (lol.fandom.com), `Special:FilePath/<Team>logo_std.png`, re-encoded to 64px webp. Raw pulls are in `reference/leaguepedia-logos-*.json`. Nine logos that Leaguepedia did not have were supplied by hand and are kept as originals in `assets/source-uploads/`. All logos are trademarks of their owners.

**Region logos (large, in the header cards)** - league logo SVGs from Wikipedia (File:League championship series logo 2021.svg, League of legends pro league logo.svg, League of Legends EMEA Championship.svg, League of Legends Champions Korea logo.svg, League of Legends Championship Pacific logo.svg), rasterised to 480px-wide webp in `assets/regions-hi/`. The Americas logo is the 2021 LCS mark, which is the one Wikipedia currently carries. All are trademarks of their owners.

**Region logos (small icons, in the table and chart legend)** - Leaguepedia: LoL_Championship_Series (AME), LPL (CN), LoL_EMEA_Championship (EMEA), LCK (KR), League_of_Legends_Championship_Pacific (LCP).

**KR roles** - Riot's KR tab has no role column. `roles-kr.js` maps `team|player` to a role using the Leaguepedia team pages for the ten LCK teams (T1, Hanwha Life Esports, Dplus KIA, KT Rolster, HANJIN BRION, Gen.G, DN SOOPers, Kiwoom DRX, Nongshim RedForce, BNK FearX). The app marks these as "role from Leaguepedia, not Riot".

**Logo name aliases** - a few academy teams reuse the parent team's logo: paiN Gaming Academy, Vivo Keyd Stars Academy, Movistar KOI Fenix, Heretics Academy, KCB (Karmine Corp), VITB (Team Vitality), RED Canids Kalunga Academy.

**Aligned contract end dates** - Sheep Esports, "GCD: The LoL Esports Global Contract Database" (30 Oct 2026, updated 1 Nov 2026), summarising Riot's LoL Esports Global Policies: contracts end on the Monday before the third Tuesday of November at 23:59 UTC (2026-11-16, 2027-11-15, 2028-11-20, 2029-11-19, 2030-11-18); player free agency opens the next day at 00:00 UTC; coaches the day after the Worlds final; until then new signings are locked apart from extensions, rookies, development-programme signings and short-term deals. This is a secondary source, not Riot's rulebook. Used for the countdown banner and the "End date off the aligned calendar" check (the day after each aligned date also counts as on-calendar, because several sheets list it that way).
