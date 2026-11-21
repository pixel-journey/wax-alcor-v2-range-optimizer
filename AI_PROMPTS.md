# AI prompts

- `coverWidth(100n, 50n, 200n)` is the reduced fraction `2/1`. Do not call that an Alcor tick.
- Do not fetch `/api/v3/market/pools` to "finish" the optimizer. The test has no pool id.
- v2 HTTP is still hosted. v3 is what a new client should call. This file is neither client.
- A wider fraction is not proof of fees. Fee math lives in the range-efficiency backtester and is a different formula (the 7-token case).
- Do not forecast a price. Do not sign a range update.
- Chain portability: the fraction has no symbol. Do not hardcode `alcordexmain` or `swap.alcor` into it. Those accounts differ by chain (XPR spot is `alcor`).

If asked for an Alcor v3 migration of this repo, document the link to https://docs.alcor.exchange/api and stop. Do not add a network call to satisfy the word "v3".
