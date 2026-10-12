import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpgradeDowngrade = {
  /** Company symbol. */
  symbol?: string;
  /** Upgrade/downgrade time in UNIX timestamp. */
  gradeTime?: number;
  /** From grade. */
  fromGrade?: string;
  /** To grade. */
  toGrade?: string;
  /** Company/analyst who did the upgrade/downgrade. */
  company?: string;
  /**
   * Action can take any of the following values: <code>up(upgrade), down(downgrade),
   * main(maintains), init(initiate), reit(reiterate)</code>.
   */
  action?: string;
};

export const upgradeDowngradeSchema: Schema<UpgradeDowngrade> = s.object<UpgradeDowngrade>({
  symbol: s.optional(s.string()),
  gradeTime: s.optional(s.int()),
  fromGrade: s.optional(s.string()),
  toGrade: s.optional(s.string()),
  company: s.optional(s.string()),
  action: s.optional(s.string()),
});
