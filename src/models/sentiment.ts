import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Sentiment = {
  bearishPercent?: number;
  bullishPercent?: number;
};

export const sentimentSchema: Schema<Sentiment> = s.object<Sentiment>({
  bearishPercent: s.optional(s.number()),
  bullishPercent: s.optional(s.number()),
});
