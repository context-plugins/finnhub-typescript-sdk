import { s, type Schema } from "../core/index.js";

export type MutualFundEet = {
  isin?: string;
  data?: Record<string, unknown>;
};

export const mutualFundEetSchema: Schema<MutualFundEet> = s.object<MutualFundEet>({
  isin: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
});
