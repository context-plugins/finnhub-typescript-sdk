import { s, type Schema } from "../core/index.js";
import { breakdownItemSchema, type BreakdownItem } from "./breakdown-item.js";

export type RevenueBreakdown = {
  symbol?: string;
  cik?: string;
  data?: BreakdownItem[];
};

export const revenueBreakdownSchema: Schema<RevenueBreakdown> = s.object<RevenueBreakdown>({
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => breakdownItemSchema))),
});
