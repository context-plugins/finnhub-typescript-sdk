import { s, type Schema } from "../core/index.js";
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
