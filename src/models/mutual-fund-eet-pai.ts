import { s, type Schema } from "../core/index.js";

export type MutualFundEetPai = {
  isin?: string;
  data?: Record<string, unknown>;
};

export const mutualFundEetPaiSchema: Schema<MutualFundEetPai> = s.object<MutualFundEetPai>({
  isin: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
});
