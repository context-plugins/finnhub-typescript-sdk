import { s, type Schema } from "../core/index.js";

export type InvestmentThemePortfolio = {
  symbol?: string;
};

export const investmentThemePortfolioSchema: Schema<InvestmentThemePortfolio> =
  s.object<InvestmentThemePortfolio>({
    symbol: s.optional(s.string()),
  });
