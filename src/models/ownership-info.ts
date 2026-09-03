import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OwnershipInfo = {
  name?: string;
  share?: number;
  change?: number;
  filingDate?: string;
};

export const ownershipInfoSchema: Schema<OwnershipInfo> = s.object<OwnershipInfo>({
  name: s.optional(s.string()),
  share: s.optional(s.number()),
  change: s.optional(s.number()),
  filingDate: s.optional(s.dateOnly()),
});
