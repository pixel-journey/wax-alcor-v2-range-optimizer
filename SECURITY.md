# Security — price-band width fraction

## Closed in tests

| Issue | Behavior |
| --- | --- |
| `coverWidth(100n, 50n, 200n)` | `2/1` |
| `coverWidth(100n, 80n, 150n)` | `3/2` |
| `coverWidth(100n, 40n, 120n)` | `5/2` |
| Low ≥ entry | not ok |
| Fraction | reduced by gcd |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Alcor ticks / Uniswap ranges | **Not** modeled |
| Fee earnings inside band | Width ≠ fee claim |
| Live pool | Arguments only |
| Forecast | Not a price prediction |

## Attack angles

1. Calling this an Alcor tick range.  
2. Treating width `2/1` as proof the position earns fees.  
3. Mixing with [IL heat map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map) without noting full-range vs band.  
4. Claiming a live position was optimized.

## Honesty limits

No network. No wasm. Not a forecast.

| Sibling | Distinction |
| --- | --- |
| [IL heat map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map) | Full-range IL after leaving the band |
| [concentrated ROI](https://github.com/pixel-journey/wax-concentrated-liquidity-roi-matrix) | Fee minus that IL |
| [range efficiency plot](https://github.com/pixel-journey/wax-v2-concentrated-range-efficiency-plot) | Seconds-in-window floor bps |
| [range backtester](https://github.com/pixel-journey/wax-alcor-v2-range-efficiency-backtester) | Truncating fee product |

[alcor-exchange](https://github.com/alcor-exchange) · [docs.wax.io](https://docs.wax.io/).
