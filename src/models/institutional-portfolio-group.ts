import { s, type Schema } from "../core/index.js";
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
