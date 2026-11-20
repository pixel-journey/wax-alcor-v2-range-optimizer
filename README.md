# A price multiple, not a tick

**Trust label:** `educational-reference`  
**Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

The width that covers a low and a high around an entry. Not an Alcor range and not a forecast.

The August 2026 README described a live feed, an oracle, or a device vibration. This tree does not do those things.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/range.ts` | The pure rules |
| `src/range.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

The course is [EDUCATION.md](EDUCATION.md). `npm test` runs the rules. `npm run dev` opens the page.

## Related

- [full-range IL](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map) — what a price ratio costs after you leave the band
- [fee minus that IL](https://github.com/pixel-journey/wax-concentrated-liquidity-roi-matrix)
- [alcor-exchange](https://github.com/alcor-exchange) — the live system this file does not call

Do not describe this page as a live Alcor position, a translated NFT, or a device vibration.

## Queries and unsigned transactions

`src/api.ts` builds nodeos, Hyperion, and Atomic requests. `executed` is false. This repo did not call any host. No transaction is invented.
