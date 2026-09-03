import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarketNews = {
  category?: string;
  datetime?: number;
  headline?: string;
  id?: number;
  image?: string;
  related?: string;
  source?: string;
  summary?: string;
  url?: string;
};

export const marketNewsSchema: Schema<MarketNews> = s.object<MarketNews>({
  category: s.optional(s.string()),
  datetime: s.optional(s.number()),
  headline: s.optional(s.string()),
  id: s.optional(s.number()),
  image: s.optional(s.string()),
  related: s.optional(s.string()),
  source: s.optional(s.string()),
  summary: s.optional(s.string()),
  url: s.optional(s.string()),
});
