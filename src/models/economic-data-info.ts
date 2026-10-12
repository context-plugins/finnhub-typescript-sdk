import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EconomicDataInfo = {
  /** Date of the reading */
  date?: string;
  /** Value */
  value?: number;
};

export const economicDataInfoSchema: Schema<EconomicDataInfo> = s.object<EconomicDataInfo>({
  date: s.optional(s.string()),
  value: s.optional(s.float64()),
});
