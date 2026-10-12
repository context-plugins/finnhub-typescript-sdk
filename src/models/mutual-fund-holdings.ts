import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mutualFundHoldingsDataSchema, type MutualFundHoldingsData } from "./mutual-fund-holdings-data.js";

export type MutualFundHoldings = {
  /** Symbol. */
  symbol?: string;
  /** Holdings update date. */
  atDate?: string;
  /** Number of holdings. */
  numberOfHoldings?: number;
  /** Array of holdings. */
  holdings?: MutualFundHoldingsData[];
};

export const mutualFundHoldingsSchema: Schema<MutualFundHoldings> = s.object<MutualFundHoldings>({
  symbol: s.optional(s.string()),
  atDate: s.optional(s.dateOnly()),
  numberOfHoldings: s.optional(s.int()),
  holdings: s.optional(s.array(s.lazy(() => mutualFundHoldingsDataSchema))),
});
