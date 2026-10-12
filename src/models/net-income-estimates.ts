import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { netIncomeEstimatesInfoSchema, type NetIncomeEstimatesInfo } from "./net-income-estimates-info.js";

export type NetIncomeEstimates = {
  /** List of estimates */
  data?: NetIncomeEstimatesInfo[];
  /** Frequency: annual or quarterly. */
  freq?: string;
  /** Company symbol. */
  symbol?: string;
};

export const netIncomeEstimatesSchema: Schema<NetIncomeEstimates> = s.object<NetIncomeEstimates>({
  data: s.optional(s.array(s.lazy(() => netIncomeEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
