import { s, type Schema } from "../core/index.js";

export type Dividends2Info = {
  exDate?: string;
  amount?: number;
};

export const dividends2InfoSchema: Schema<Dividends2Info> = s.object<Dividends2Info>({
  exDate: s.optional(s.dateOnly()),
  amount: s.optional(s.number()),
});
