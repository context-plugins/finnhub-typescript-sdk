import { s, type Schema } from "../core/index.js";

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
