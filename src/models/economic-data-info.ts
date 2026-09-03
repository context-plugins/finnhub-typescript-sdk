import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EconomicDataInfo = {
  date?: string;
  value?: number;
};

export const economicDataInfoSchema: Schema<EconomicDataInfo> = s.object<EconomicDataInfo>({
  date: s.optional(s.string()),
  value: s.optional(s.number()),
});
