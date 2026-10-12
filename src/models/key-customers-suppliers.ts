import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeyCustomersSuppliers = {
  /** Symbol */
  symbol?: string;
  /** Name */
  name?: string;
  /** Country */
  country?: string;
  /** Industry */
  industry?: string;
  /** Whether the company is a customer. */
  customer?: boolean;
  /** Whether the company is a supplier */
  supplier?: boolean;
  /** 1-month price correlation */
  oneMonthCorrelation?: number;
  /** 1-year price correlation */
  oneYearCorrelation?: number;
  /** 6-month price correlation */
  sixMonthCorrelation?: number;
  /** 3-month price correlation */
  threeMonthCorrelation?: number;
  /** 2-week price correlation */
  twoWeekCorrelation?: number;
  /** 2-year price correlation */
  twoYearCorrelation?: number;
};

export const keyCustomersSuppliersSchema: Schema<KeyCustomersSuppliers> = s.object<KeyCustomersSuppliers>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  country: s.optional(s.string()),
  industry: s.optional(s.string()),
  customer: s.optional(s.boolean()),
  supplier: s.optional(s.boolean()),
  oneMonthCorrelation: s.optional(s.float64()),
  oneYearCorrelation: s.optional(s.float64()),
  sixMonthCorrelation: s.optional(s.float64()),
  threeMonthCorrelation: s.optional(s.float64()),
  twoWeekCorrelation: s.optional(s.float64()),
  twoYearCorrelation: s.optional(s.float64()),
});
