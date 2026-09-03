import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentThemePortfolioSchema,
  type InvestmentThemePortfolio,
} from "./investment-theme-portfolio.js";

export type InvestmentThemes = {
  theme?: string;
  data?: InvestmentThemePortfolio[];
};

export const investmentThemesSchema: Schema<InvestmentThemes> = s.object<InvestmentThemes>({
  theme: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => investmentThemePortfolioSchema))),
});
