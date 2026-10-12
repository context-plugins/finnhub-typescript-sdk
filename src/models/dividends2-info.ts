import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dividends2Info = {
  /** Ex-Dividend date. */
  exDate?: string;
  /** Amount in local currency. */
  amount?: number;
};

export const dividends2InfoSchema: Schema<Dividends2Info> = s.object<Dividends2Info>({
  exDate: s.optional(s.dateOnly()),
  amount: s.optional(s.float64()),
});
