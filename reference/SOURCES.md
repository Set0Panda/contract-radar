# Sources and references

**Contract data** - Riot's League-Recognized Contract Database (Google Sheet `1Y7k5kQ2AegbuyiGwEPsa62e883FYVtHqr6UVut9RC4o`), one published CSV per region tab:
AME gid 0, CN 594163931, EMEA 148326031, KR 905624073, LCP 1177719586. Pulled by `scripts/refresh.js`. Legal names and team contact emails are dropped on read and never written to the repo.

**Team logos** - Leaguepedia (lol.fandom.com), `Special:FilePath/<Team>logo_std.png`, re-encoded to 64px webp. Raw pulls are in `reference/leaguepedia-logos-*.json`. Nine logos that Leaguepedia did not have were supplied by hand and are kept as originals in `assets/source-uploads/`. All logos are trademarks of their owners.

**Region logos** - Leaguepedia: LoL_Championship_Series (AME), LPL (CN), LoL_EMEA_Championship (EMEA), LCK (KR), League_of_Legends_Championship_Pacific (LCP).

**KR roles** - Riot's KR tab has no role column. `roles-kr.js` maps `team|player` to a role using the Leaguepedia team pages for the ten LCK teams (T1, Hanwha Life Esports, Dplus KIA, KT Rolster, HANJIN BRION, Gen.G, DN SOOPers, Kiwoom DRX, Nongshim RedForce, BNK FearX). The app marks these as "role from Leaguepedia, not Riot".

**Logo name aliases** - a few academy teams reuse the parent team's logo: paiN Gaming Academy, Vivo Keyd Stars Academy, Movistar KOI Fenix, Heretics Academy, KCB (Karmine Corp), VITB (Team Vitality), RED Canids Kalunga Academy.
