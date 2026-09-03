import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MutualFundEetPai = {
  isin?: string;
  data?: Record<string, unknown>;
};

export const mutualFundEetPaiSchema: Schema<MutualFundEetPai> = s.object<MutualFundEetPai>({
  isin: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
});
