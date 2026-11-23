import { describe, expect, it } from "vitest";
import { coverWidth, priceInsideBand, reduceFraction } from "./range";

describe("coverWidth", () => {
  it("uses the wider side and reduces the fraction", () => {
    expect(coverWidth(100n, 50n, 200n)).toEqual({
      ok: true,
      widthNum: 2n,
      widthDen: 1n,
      side: "high",
    });
    expect(coverWidth(100n, 80n, 150n)).toEqual({
      ok: true,
      widthNum: 3n,
      widthDen: 2n,
      side: "high",
    });
    expect(coverWidth(100n, 40n, 120n)).toEqual({
      ok: true,
      widthNum: 5n,
      widthDen: 2n,
      side: "low",
    });
  });

  it("ties on equal sides pick high when product equals entry squared", () => {
    // entry/low = high/entry when high * low === entry * entry
    const w = coverWidth(100n, 50n, 200n);
    expect(w.ok).toBe(true);
    if (w.ok) expect(w.side).toBe("high");
  });

  it("refuses non-positive and non-straddling bands", () => {
    expect(coverWidth(0n, 50n, 200n).ok).toBe(false);
    expect(coverWidth(100n, 100n, 200n).ok).toBe(false);
    expect(coverWidth(100n, 50n, 100n).ok).toBe(false);
    expect(coverWidth(100n, 150n, 200n).ok).toBe(false);
  });
});

describe("reduceFraction", () => {
  it("cancels a common factor", () => {
    expect(reduceFraction(10n, 4n)).toEqual({ num: 5n, den: 2n });
    expect(reduceFraction(0n, 7n)).toEqual({ num: 0n, den: 1n });
  });
});

describe("priceInsideBand", () => {
  it("includes edges and refuses inverted bands", () => {
    expect(priceInsideBand(100n, 1n, 50n, 200n)).toBe(true);
    expect(priceInsideBand(50n, 1n, 50n, 200n)).toBe(true);
    expect(priceInsideBand(200n, 1n, 50n, 200n)).toBe(true);
    expect(priceInsideBand(49n, 1n, 50n, 200n)).toBe(false);
    expect(priceInsideBand(201n, 1n, 50n, 200n)).toBe(false);
    expect(() => priceInsideBand(1n, 1n, 200n, 50n)).toThrow(/low must be/);
  });
});
