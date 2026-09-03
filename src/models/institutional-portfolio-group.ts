import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionalPortfolioInfoSchema,
  type InstitutionalPortfolioInfo,
} from "./institutional-portfolio-info.js";

export type InstitutionalPortfolioGroup = {
  reportDate?: string;
  filingDate?: string;
  portfolio?: InstitutionalPortfolioInfo[];
};

export const institutionalPortfolioGroupSchema: Schema<InstitutionalPortfolioGroup> =
  s.object<InstitutionalPortfolioGroup>({
    reportDate: s.optional(s.string()),
    filingDate: s.optional(s.string()),
    portfolio: s.optional(s.array(s.lazy(() => institutionalPortfolioInfoSchema))),
  });
