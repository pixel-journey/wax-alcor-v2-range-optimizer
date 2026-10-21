import { describe, expect, it } from "vitest";
import { coverWidth } from "./range";

describe("cover width", () => {
  it("uses the wider side and reduces the fraction", () => {
    expect(coverWidth(100n, 50n, 200n)).toEqual({ ok: true, widthNum: 2n, widthDen: 1n });
    expect(coverWidth(100n, 80n, 150n)).toEqual({ ok: true, widthNum: 3n, widthDen: 2n });
    expect(coverWidth(100n, 40n, 120n)).toEqual({ ok: true, widthNum: 5n, widthDen: 2n });
  });

  it("refuses a low that is not below the entry", () => {
    expect(coverWidth(100n, 100n, 200n).ok).toBe(false);
  });
});
