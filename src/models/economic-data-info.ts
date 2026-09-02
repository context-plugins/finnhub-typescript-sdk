import { s, type Schema } from "../core/index.js";

export type EconomicDataInfo = {
  date?: string;
  value?: number;
};

export const economicDataInfoSchema: Schema<EconomicDataInfo> = s.object<EconomicDataInfo>({
  date: s.optional(s.string()),
  value: s.optional(s.number()),
});
