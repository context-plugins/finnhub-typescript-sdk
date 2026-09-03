import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstitutionalOwnershipInfo = {
  cik?: string;
  name?: string;
  putCall?: string;
  change?: number;
  noVoting?: number;
  percentage?: number;
  share?: number;
  sharedVoting?: number;
  soleVoting?: number;
  value?: number;
};

export const institutionalOwnershipInfoSchema: Schema<InstitutionalOwnershipInfo> =
  s.object<InstitutionalOwnershipInfo>({
    cik: s.optional(s.string()),
    name: s.optional(s.string()),
    putCall: s.optional(s.string()),
    change: s.optional(s.number()),
    noVoting: s.optional(s.number()),
    percentage: s.optional(s.number()),
    share: s.optional(s.number()),
    sharedVoting: s.optional(s.number()),
    soleVoting: s.optional(s.number()),
    value: s.optional(s.number()),
  });
