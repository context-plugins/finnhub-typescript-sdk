import { s, type Schema } from "../core/index.js";

export type CapexEstimatesInfo = {
  capexAvg?: number;
  capexHigh?: number;
  capexLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const capexEstimatesInfoSchema: Schema<CapexEstimatesInfo> = s.object<CapexEstimatesInfo>({
  capexAvg: s.optional(s.number()),
  capexHigh: s.optional(s.number()),
  capexLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
