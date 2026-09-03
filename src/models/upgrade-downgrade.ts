import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpgradeDowngrade = {
  symbol?: string;
  gradeTime?: number;
  fromGrade?: string;
  toGrade?: string;
  company?: string;
  action?: string;
};

export const upgradeDowngradeSchema: Schema<UpgradeDowngrade> = s.object<UpgradeDowngrade>({
  symbol: s.optional(s.string()),
  gradeTime: s.optional(s.number()),
  fromGrade: s.optional(s.string()),
  toGrade: s.optional(s.string()),
  company: s.optional(s.string()),
  action: s.optional(s.string()),
});
