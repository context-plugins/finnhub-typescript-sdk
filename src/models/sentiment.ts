import { s, type Schema } from "../core/index.js";

export type Sentiment = {
  bearishPercent?: number;
  bullishPercent?: number;
};

export const sentimentSchema: Schema<Sentiment> = s.object<Sentiment>({
  bearishPercent: s.optional(s.number()),
  bullishPercent: s.optional(s.number()),
});
