import { s, type Schema } from "../core/index.js";
import { companySchema, type Company } from "./company.js";

export type CompanyExecutive = {
  symbol?: string;
  executive?: Company[];
};

export const companyExecutiveSchema: Schema<CompanyExecutive> = s.object<CompanyExecutive>({
  symbol: s.optional(s.string()),
  executive: s.optional(s.array(s.lazy(() => companySchema))),
});
