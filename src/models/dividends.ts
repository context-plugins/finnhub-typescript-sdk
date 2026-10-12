import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dividends = {
  /** Symbol. */
  symbol?: string;
  /** Ex-Dividend date. */
  date?: string;
  /** Amount in local currency. */
  amount?: number;
  /** Adjusted dividend. */
  adjustedAmount?: number;
  /** Pay date. */
  payDate?: string;
  /** Record date. */
  recordDate?: string;
  /** Declaration date. */
  declarationDate?: string;
  /** Currency. */
  currency?: string;
  /**
   * <p>Dividend frequency. Can be 1 of the following values:</p><ul> <li><code>0:
   * Annually</code></li> <li><code>1: Monthly</code></li> <li><code>2: Quarterly</code></li>
   * <li><code>3: Semi-annually</code></li> <li><code>4: Other/Unknown</code></li> <li><code>5:
   * Bimonthly</code></li> <li><code>6: Trimesterly</code></li> <li><code>7: Weekly</code></li>
   * </ul>
   */
  freq?: string;
};

export const dividendsSchema: Schema<Dividends> = s.object<Dividends>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  amount: s.optional(s.float64()),
  adjustedAmount: s.optional(s.float64()),
  payDate: s.optional(s.dateOnly()),
  recordDate: s.optional(s.dateOnly()),
  declarationDate: s.optional(s.dateOnly()),
  currency: s.optional(s.string()),
  freq: s.optional(s.string()),
});
