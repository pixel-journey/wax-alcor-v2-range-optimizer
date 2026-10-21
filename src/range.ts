/**
 * The price multiple that covers a low and a high around an entry.
 * Not an Alcor tick and not a forecast.
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

export type Width = { ok: false; reason: string } | { ok: true; widthNum: bigint; widthDen: bigint };

export function coverWidth(entry: bigint, low: bigint, high: bigint): Width {
  if (entry <= 0n || low <= 0n || high <= 0n) return { ok: false, reason: "prices must be positive integers" };
  if (low >= entry || high <= entry) return { ok: false, reason: "low must be below entry and high above it" };
  const highSide = high * low >= entry * entry;
  const num = highSide ? high : entry;
  const den = highSide ? entry : low;
  const g = gcd(num, den);
  return { ok: true, widthNum: num / g, widthDen: den / g };
}
