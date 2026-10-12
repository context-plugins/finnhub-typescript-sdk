import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  grossIncomeEstimatesInfoSchema,
  type GrossIncomeEstimatesInfo,
} from "./gross-income-estimates-info.js";

export type GrossIncomeEstimates = {
  /** List of estimates */
  data?: GrossIncomeEstimatesInfo[];
  /** Frequency: annual or quarterly. */
  freq?: string;
  /** Company symbol. */
  symbol?: string;
};

export const grossIncomeEstimatesSchema: Schema<GrossIncomeEstimates> = s.object<GrossIncomeEstimates>({
  data: s.optional(s.array(s.lazy(() => grossIncomeEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
