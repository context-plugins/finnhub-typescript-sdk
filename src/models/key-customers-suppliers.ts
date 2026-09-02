import { s, type Schema } from "../core/index.js";

export type KeyCustomersSuppliers = {
  symbol?: string;
  name?: string;
  country?: string;
  industry?: string;
  customer?: boolean;
  supplier?: boolean;
  oneMonthCorrelation?: number;
  oneYearCorrelation?: number;
  sixMonthCorrelation?: number;
  threeMonthCorrelation?: number;
  twoWeekCorrelation?: number;
  twoYearCorrelation?: number;
};

export const keyCustomersSuppliersSchema: Schema<KeyCustomersSuppliers> = s.object<KeyCustomersSuppliers>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  country: s.optional(s.string()),
  industry: s.optional(s.string()),
  customer: s.optional(s.boolean()),
  supplier: s.optional(s.boolean()),
  oneMonthCorrelation: s.optional(s.number()),
  oneYearCorrelation: s.optional(s.number()),
  sixMonthCorrelation: s.optional(s.number()),
  threeMonthCorrelation: s.optional(s.number()),
  twoWeekCorrelation: s.optional(s.number()),
  twoYearCorrelation: s.optional(s.number()),
});
