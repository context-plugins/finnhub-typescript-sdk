import { s, type Schema } from "../core/index.js";
import { mutualFundHoldingsDataSchema, type MutualFundHoldingsData } from "./mutual-fund-holdings-data.js";

export type MutualFundHoldings = {
  symbol?: string;
  atDate?: string;
  numberOfHoldings?: number;
  holdings?: MutualFundHoldingsData[];
};

export const mutualFundHoldingsSchema: Schema<MutualFundHoldings> = s.object<MutualFundHoldings>({
  symbol: s.optional(s.string()),
  atDate: s.optional(s.dateOnly()),
  numberOfHoldings: s.optional(s.number()),
  holdings: s.optional(s.array(s.lazy(() => mutualFundHoldingsDataSchema))),
});
