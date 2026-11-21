# Sources

| Source | Use |
| --- | --- |
| [docs.alcor.exchange/api](https://docs.alcor.exchange/api) | Where a real tick would be read. This lab does not read one |
| [SECURITY.md](SECURITY.md) | `coverWidth(100, 50, 200)` is `2/1` |
| [AI_PROMPTS.md](AI_PROMPTS.md) | Do not turn the fraction into a v3 pool |

## Product facts

- `coverWidth` returns a reduced fraction of price-band width.
- `coverWidth(100, 50, 200)` → `2/1`. `coverWidth(100, 80, 150)` → `3/2`. `coverWidth(100, 40, 120)` → `5/2`.
- Low greater than or equal to entry is not ok.
- The fraction is not an Alcor tick, not a Uniswap tick, and not a fee claim.
- Arguments only. No `/api/v2` and no `/api/v3`.
- The name says v2 because the lab was named beside concentrated-range teaching. Rename is not required for the HTTP upgrade. The test never called HTTP.
- Same fraction on any chain. It does not become an EOS or WAX position by changing the host.

Sibling fee product (different number): [wax-alcor-v2-range-efficiency-backtester](https://github.com/pixel-journey/wax-alcor-v2-range-efficiency-backtester) floors 10000 × 30 bps × 100/400 to **7**.

## Alcor HTTP (this lab does not call it)

The `v2` in the repository name is historical. It is not the HTTP version, and it is not an instruction to keep a new client on `/api/v2`.

[docs.alcor.exchange/api](https://docs.alcor.exchange/api) is the reference. Checked against that index:

| Job | Call | Status |
| --- | --- | --- |
| New token, pool, price, depth | `https://<chain>.alcor.exchange/api/v3/market/...` | Preferred |
| Live updates | `wss://<chain>.alcor.exchange/api/v3/market/stream` | Preferred over polling |
| TVL, volume, scores | `/api/v3/analytics/...` on the same chain host | Preferred |
| Cross-chain feed | `https://api.alcor.exchange/v3/feed/...` | Ids include `wax`, `eos`, `telos`, or `xpr` |
| Spot pairs, tickers, candles, AMM lists | `/api/v2/pairs`, `/api/v2/tickers`, `/api/v2/amm/...` | **Still hosted.** Not what this lab uses |

`<chain>` is `wax`, `eos`, `telos`, or `proton`. `https://alcor.exchange/api/` redirects to WAX. The XPR feed prefix is `xpr`, not `proton`.

Token id is `<symbol>-<contract>` lowercase (`wax-eosio.token`, `tlm-alien.worlds`). On-chain, the market row's `base_token` is the **API target** (the quote). `quote_token` is the API base.

v2 errors are plain text. v3 errors are `{"error":"..."}`.

| Chain | Spot contract | AMM contract |
| --- | --- | --- |
| WAX | `alcordexmain` | `swap.alcor` |
| EOS | `eostokensdex` | `swap.alcor` |
| Telos | `eostokensdex` | `swap.alcor` |
| XPR | `alcor` | `swap.alcor` |

The same AMM account name is not the same table. Integer rules in this lab do port. Those account names do not.

WharfKit, if a later host signs: [wharfkit/skill](https://github.com/wharfkit/skill) (`git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit`). There is no Alcor MCP to install. Do not invent one.

