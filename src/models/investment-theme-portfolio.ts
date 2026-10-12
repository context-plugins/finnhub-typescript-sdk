import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvestmentThemePortfolio = {
  /** Symbol */
  symbol?: string;
};

export const investmentThemePortfolioSchema: Schema<InvestmentThemePortfolio> =
  s.object<InvestmentThemePortfolio>({
    symbol: s.optional(s.string()),
  });
