"use client";

import { coverWidth } from "./range";

export function Demo() {
  const width = coverWidth(100n, 80n, 150n);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>The multiple that covers a high and a low</h1>
      <p className="lede">
        Entry 100, low 80, high 150. The width is the larger of those two ratios, reduced. It is not an Alcor tick and it does not look at volume.
      </p>
      {width.ok ? (
        <p>
          Width {width.widthNum.toString()}/{width.widthDen.toString()}. A symmetric range of that multiple covers both prices. Nothing was fetched.
        </p>
      ) : (
        <p>{width.reason}</p>
      )}
    </main>
  );
}
