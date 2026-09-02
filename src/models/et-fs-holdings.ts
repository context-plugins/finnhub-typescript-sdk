import { s, type Schema } from "../core/index.js";
import { etfHoldingsDataSchema, type EtfHoldingsData } from "./etf-holdings-data.js";

export type EtFsHoldings = {
  symbol?: string;
  atDate?: string;
  numberOfHoldings?: number;
  holdings?: EtfHoldingsData[];
};

export const etFsHoldingsSchema: Schema<EtFsHoldings> = s.object<EtFsHoldings>({
  symbol: s.optional(s.string()),
  atDate: s.optional(s.dateOnly()),
  numberOfHoldings: s.optional(s.number()),
  holdings: s.optional(s.array(s.lazy(() => etfHoldingsDataSchema))),
});
