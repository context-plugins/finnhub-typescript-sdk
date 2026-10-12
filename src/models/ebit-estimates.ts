import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ebitEstimatesInfoSchema, type EbitEstimatesInfo } from "./ebit-estimates-info.js";

export type EbitEstimates = {
  /** List of estimates */
  data?: EbitEstimatesInfo[];
  /** Frequency: annual or quarterly. */
  freq?: string;
  /** Company symbol. */
  symbol?: string;
};

export const ebitEstimatesSchema: Schema<EbitEstimates> = s.object<EbitEstimates>({
  data: s.optional(s.array(s.lazy(() => ebitEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
