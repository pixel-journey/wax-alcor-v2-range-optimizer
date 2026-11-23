# AI handoff — cover width fraction

## Non-negotiables

1. `coverWidth(100n, 50n, 200n)` → `{ widthNum: 2n, widthDen: 1n, side: "high" }`.
2. `coverWidth(100n, 40n, 120n)` → `5/2`, side **`low`**.
3. Low must be **strictly** below entry; high **strictly** above.
4. Width is **not** an Alcor tick, Uniswap range, fee APR, or forecast.
5. Do **not** fetch `/api/v3/market/pools` to finish this lab — tests have no pool id.
6. v2 in the repo name is historical; new market clients prefer Alcor **v3** — this file calls neither.
7. Chain portability: pure integers. Do not hardcode `alcordexmain` / `swap.alcor` into the fraction.

## Prompt seeds

- "Which side wins for coverWidth(100, 40, 120)?"
- "Refuse low equal to entry."
- "Is price 50 inside [50, 200]?"
- "Does width 2/1 prove fees?"

## Do not

- Sign a range update from unit tests.
- Claim concentrated-liquidity IL lives in this file.
- Rename arithmetic in sibling labs because the market API moved to v3.
