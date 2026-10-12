import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OwnershipInfo = {
  /** Investor's name. */
  name?: string;
  /** Number of shares held by the investor. */
  share?: number;
  /** Number of share changed (net buy or sell) from the last period. */
  change?: number;
  /** Filing date. */
  filingDate?: string;
};

export const ownershipInfoSchema: Schema<OwnershipInfo> = s.object<OwnershipInfo>({
  name: s.optional(s.string()),
  share: s.optional(s.int()),
  change: s.optional(s.int()),
  filingDate: s.optional(s.dateOnly()),
});
