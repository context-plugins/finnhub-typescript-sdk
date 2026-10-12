import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pretaxIncomeEstimatesInfoSchema,
  type PretaxIncomeEstimatesInfo,
} from "./pretax-income-estimates-info.js";

export type PretaxIncomeEstimates = {
  /** List of estimates */
  data?: PretaxIncomeEstimatesInfo[];
  /** Frequency: annual or quarterly. */
  freq?: string;
  /** Company symbol. */
  symbol?: string;
};

export const pretaxIncomeEstimatesSchema: Schema<PretaxIncomeEstimates> = s.object<PretaxIncomeEstimates>({
  data: s.optional(s.array(s.lazy(() => pretaxIncomeEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
