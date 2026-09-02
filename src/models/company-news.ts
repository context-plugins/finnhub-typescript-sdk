import { s, type Schema } from "../core/index.js";

export type CompanyNews = {
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

export const companyNewsSchema: Schema<CompanyNews> = s.object<CompanyNews>({
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
