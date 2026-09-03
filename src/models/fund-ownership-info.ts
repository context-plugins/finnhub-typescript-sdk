import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundOwnershipInfo = {
  name?: string;
  share?: number;
  change?: number;
  filingDate?: string;
  portfolioPercent?: number;
};

export const fundOwnershipInfoSchema: Schema<FundOwnershipInfo> = s.object<FundOwnershipInfo>({
  name: s.optional(s.string()),
  share: s.optional(s.number()),
  change: s.optional(s.number()),
  filingDate: s.optional(s.dateOnly()),
  portfolioPercent: s.optional(s.number()),
});
