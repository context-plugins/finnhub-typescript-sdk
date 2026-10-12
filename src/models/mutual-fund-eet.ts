import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MutualFundEet = {
  /** ISIN. */
  isin?: string;
  data?: Record<string, unknown>;
};

export const mutualFundEetSchema: Schema<MutualFundEet> = s.object<MutualFundEet>({
  isin: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
});
