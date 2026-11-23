# Education — the wider side of a price band

> **Rung:** `npm test` passes. `coverWidth` is three positive integers. It is not an Alcor tick, not a Uniswap range, and not a forecast.  
> **The test is the rule.** Full-range IL after you leave a band is [wax-lp-impermanent-loss-heat-map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map). Fees minus that IL: [wax-concentrated-liquidity-roi-matrix](https://github.com/pixel-journey/wax-concentrated-liquidity-roi-matrix) (historical name; still full-range math). Alcor code: [alcor-exchange](https://github.com/alcor-exchange).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute the reduced cover width for a low/entry/high triple |
| Intermediate | Say which **side** (low vs high) dominated and why |
| Masterclass | Separate this fraction from ticks, fees, and pool reads |

---

## Beginner — one scene

You pick an entry price and a band `[low, high]` that must straddle it. The cover width is the larger of `entry/low` and `high/entry`, written as a reduced fraction.

| Call | Locked result |
| --- | --- |
| `coverWidth(100n, 50n, 200n)` | `2/1`, side `high` (both sides equal 2; high wins the tie) |
| `coverWidth(100n, 80n, 150n)` | `3/2`, side `high` |
| `coverWidth(100n, 40n, 120n)` | `5/2`, side `low` |
| `coverWidth(100n, 100n, 200n)` | not ok — low must be **strictly** below entry |
| `coverWidth(100n, 50n, 100n)` | not ok — high must be **strictly** above entry |

```bash
npm test
```

---

## Intermediate — side choice

| Condition | Side used |
| --- | --- |
| `high * low >= entry * entry` | **high** → fraction `high/entry` |
| otherwise | **low** → fraction `entry/low` |

`priceInsideBand(priceNum, priceDen, low, high)` is a separate pure check: is `priceNum/priceDen` inside `[low, high]` inclusive? It does not call Alcor.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| low == entry | refused |
| high == entry | refused |
| zero price | refused |
| inverted band in `priceInsideBand` | throws |
| claim width means fee APR | not taught — different formula |

### Exercises

1. `coverWidth(100, 50, 200)` width? (`2/1`.)  
2. Which side when low is much farther than high? (**low**.)  
3. Does this read an Alcor pool? (**No**.)  
4. Is a width of `2/1` proof of fees? (**No**.)

---

## Masterclass — what this is not

| Concept | This lab |
| --- | --- |
| Alcor / CLMM **tick** | No |
| Concentrated-liquidity IL | No — see full-range IL sibling |
| Fee APR / volume | No |
| v2 vs v3 market HTTP | No network; v3 is for *new market clients*, not this fraction |
| Chain portability | Pure integers; no `swap.alcor` / `alcordexmain` hardcode |

HTTP builders in `src/api.ts` stay `executed: false`. Do not "finish" the optimizer by fetching pools.

---

## What this course will not teach

- Live pool depth or tick spacing
- A signed range update
- That the cover fraction is an Alcor product feature
