import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsiderSentimentsData = {
  /** Symbol. */
  symbol?: string;
  /** Year. */
  year?: number;
  /** Month. */
  month?: number;
  /** Net buying/selling from all insiders' transactions. */
  change?: number;
  /** Monthly share purchase ratio. */
  mspr?: number;
};

export const insiderSentimentsDataSchema: Schema<InsiderSentimentsData> = s.object<InsiderSentimentsData>({
  symbol: s.optional(s.string()),
  year: s.optional(s.int()),
  month: s.optional(s.int()),
  change: s.optional(s.int()),
  mspr: s.optional(s.float64()),
});
