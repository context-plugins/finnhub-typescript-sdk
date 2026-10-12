import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtfHoldingsData = {
  /** Symbol description */
  symbol?: string;
  /** Security name */
  name?: string;
  /** ISIN. */
  isin?: string;
  /** CUSIP. */
  cusip?: string;
  /** Number of shares owned by the ETF. */
  share?: number;
  /** Portfolio's percent */
  percent?: number;
  /** Market value */
  value?: number;
  /**
   * Asset type. Can be 1 of the following values: <code>Equity</code>, <code>ETP</code>,
   * <code>Fund</code>, <code>Bond</code>, <code>Other</code> or empty.
   */
  assetType?: string;
};

export const etfHoldingsDataSchema: Schema<EtfHoldingsData> = s.object<EtfHoldingsData>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  share: s.optional(s.float64()),
  percent: s.optional(s.float64()),
  value: s.optional(s.float64()),
  assetType: s.optional(s.string()),
});
