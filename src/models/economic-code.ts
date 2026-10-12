import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EconomicCode = {
  /** Finnhub economic code used to get historical data */
  code?: string;
  /** Country */
  country?: string;
  /** Indicator name */
  name?: string;
  /** Unit */
  unit?: string;
};

export const economicCodeSchema: Schema<EconomicCode> = s.object<EconomicCode>({
  code: s.optional(s.string()),
  country: s.optional(s.string()),
  name: s.optional(s.string()),
  unit: s.optional(s.string()),
});
