import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundOwnershipInfo = {
  /** Investor's name. */
  name?: string;
  /** Number of shares held by the investor. */
  share?: number;
  /** Number of share changed (net buy or sell) from the last period. */
  change?: number;
  /** Filing date. */
  filingDate?: string;
  /** Percent of the fund's portfolio comprised of the company's share. */
  portfolioPercent?: number;
};

export const fundOwnershipInfoSchema: Schema<FundOwnershipInfo> = s.object<FundOwnershipInfo>({
  name: s.optional(s.string()),
  share: s.optional(s.int()),
  change: s.optional(s.int()),
  filingDate: s.optional(s.dateOnly()),
  portfolioPercent: s.optional(s.float64()),
});
