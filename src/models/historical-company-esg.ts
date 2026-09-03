import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyEsg2Schema, type CompanyEsg2 } from "./company-esg2.js";

export type HistoricalCompanyEsg = {
  symbol?: string;
  data?: CompanyEsg2[];
};

export const historicalCompanyEsgSchema: Schema<HistoricalCompanyEsg> = s.object<HistoricalCompanyEsg>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => companyEsg2Schema))),
});
