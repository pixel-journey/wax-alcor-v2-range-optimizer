# Education — the wider side of a price band

> **Rung:** `npm test` passes. `coverWidth` is three integers. It is not an Alcor tick, not a Uniswap range, and not a forecast.  
> **The test is the rule.** The public full-range loss for a ratio that later leaves this band is [wax-lp-impermanent-loss-heat-map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map). Alcor's own code is [alcor-exchange](https://github.com/alcor-exchange).

## Predict, then run

| Call | Locked result |
| --- | --- |
| `coverWidth(100n, 50n, 200n)` | `2/1`. Both sides are 2. The high side is used when `high * low >= entry * entry`. |
| `coverWidth(100n, 80n, 150n)` | `3/2`. High side 1.5 is wider than low side 1.25. |
| `coverWidth(100n, 40n, 120n)` | `5/2`. Low side 2.5 is wider than high side 1.2. |
| `coverWidth(100n, 100n, 200n)` | not ok. Low must be strictly below the entry. |

The fraction is reduced by gcd. A width of `2/1` does not mean the position earns fees inside that band. This file never reads a pool.

The HTTP examples in `src/api.test.ts` include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this formula.
