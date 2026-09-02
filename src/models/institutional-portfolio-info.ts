import { s, type Schema } from "../core/index.js";

export type InstitutionalPortfolioInfo = {
  symbol?: string;
  cusip?: string;
  name?: string;
  putCall?: string;
  change?: number;
  noVoting?: number;
  percentage?: number;
  share?: number;
  sharedVoting?: number;
  soleVoting?: number;
  value?: number;
};

export const institutionalPortfolioInfoSchema: Schema<InstitutionalPortfolioInfo> =
  s.object<InstitutionalPortfolioInfo>({
    symbol: s.optional(s.string()),
    cusip: s.optional(s.string()),
    name: s.optional(s.string()),
    putCall: s.optional(s.string()),
    change: s.optional(s.number()),
    noVoting: s.optional(s.number()),
    percentage: s.optional(s.number()),
    share: s.optional(s.number()),
    sharedVoting: s.optional(s.number()),
    soleVoting: s.optional(s.number()),
    value: s.optional(s.number()),
  });
