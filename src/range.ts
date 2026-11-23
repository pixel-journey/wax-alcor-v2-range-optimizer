/**
 * The price multiple that covers a low and a high around an entry.
 * Not an Alcor tick, not a Uniswap range, and not a forecast.
 *
 * width = max(entry/low, high/entry) as a reduced fraction.
 */

function gcd(a: bigint, b: bigint): bigint {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y !== 0n) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x;
}

export type Width =
  | { ok: false; reason: string }
  | { ok: true; widthNum: bigint; widthDen: bigint; side: "low" | "high" };

export function reduceFraction(num: bigint, den: bigint): { num: bigint; den: bigint } {
  if (den === 0n) throw new Error("denominator must be non-zero");
  if (num === 0n) return { num: 0n, den: 1n };
  const g = gcd(num, den);
  return { num: num / g, den: den / g };
}

/**
 * Smallest reduced fraction that covers both the low and high sides of entry.
 * high * low >= entry * entry  → high side is at least as wide → use high/entry.
 * otherwise use entry/low.
 */
export function coverWidth(entry: bigint, low: bigint, high: bigint): Width {
  if (entry <= 0n || low <= 0n || high <= 0n) {
    return { ok: false, reason: "prices must be positive integers" };
  }
  if (low >= entry) {
    return { ok: false, reason: "low must be strictly below entry" };
  }
  if (high <= entry) {
    return { ok: false, reason: "high must be strictly above entry" };
  }

  const highSide = high * low >= entry * entry;
  const num = highSide ? high : entry;
  const den = highSide ? entry : low;
  const g = gcd(num, den);
  return {
    ok: true,
    widthNum: num / g,
    widthDen: den / g,
    side: highSide ? "high" : "low",
  };
}

/** Whether a ratio (as num/den) sits inside [low, high] inclusive of the edges. */
export function priceInsideBand(
  priceNum: bigint,
  priceDen: bigint,
  low: bigint,
  high: bigint,
): boolean {
  if (priceNum <= 0n || priceDen <= 0n || low <= 0n || high <= 0n) {
    throw new Error("values must be positive");
  }
  if (low > high) throw new Error("low must be <= high");
  // price >= low  ⇔  priceNum * 1 >= low * priceDen  (price is priceNum/priceDen)
  const atOrAboveLow = priceNum >= low * priceDen;
  const atOrBelowHigh = priceNum <= high * priceDen;
  return atOrAboveLow && atOrBelowHigh;
}
