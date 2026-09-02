import { s, type Schema } from "../core/index.js";
import {
  institutionalPortfolioGroupSchema,
  type InstitutionalPortfolioGroup,
} from "./institutional-portfolio-group.js";

export type InstitutionalPortfolio = {
  name?: string;
  cik?: string;
  data?: InstitutionalPortfolioGroup[];
};

export const institutionalPortfolioSchema: Schema<InstitutionalPortfolio> = s.object<InstitutionalPortfolio>({
  name: s.optional(s.string()),
  cik: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => institutionalPortfolioGroupSchema))),
});
