import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type CompanyExecutive = {
  /** Company symbol. */
  symbol?: string;
  /** Array of company's executives and members of the Board. */
  executive?: Company[];
};

export const companyExecutiveSchema: Schema<CompanyExecutive> = s.object<CompanyExecutive>({
  symbol: s.optional(s.string()),
  executive: s.optional(s.array(s.lazy(() => companySchema))),
});
