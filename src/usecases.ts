import { HISTORY_ORIGIN, historyActions } from "./api";
import { coverWidth } from "./range";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const width = coverWidth(100n, 80n, 150n);
if (!width.ok) throw new Error(width.reason);
const covered = width;

export const USE_CASES: UseCase[] = [
  {
    title: "The market list is not a volatility window",
    detail: "GET /api/markets does not return the low and the high. coverWidth uses the numbers you pass. The request is not sent.",
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
  {
    title: "No liquidity is added from a width",
    detail: `Entry 100 with low 80 and high 150 needs width ${covered.widthNum.toString()}/${covered.widthDen.toString()}. Transfers on swap.alcor are not that window. No position is built.`,
    request: historyActions(HISTORY_ORIGIN, "swap.alcor", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (covered.widthNum !== 3n || covered.widthDen !== 2n) throw new Error("width");
}
