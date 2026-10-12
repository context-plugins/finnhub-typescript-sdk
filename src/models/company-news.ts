import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyNews = {
  /** News category. */
  category?: string;
  /** Published time in UNIX timestamp. */
  datetime?: number;
  /** News headline. */
  headline?: string;
  /** News ID. This value can be used for <code>minId</code> params to get the latest news only. */
  id?: number;
  /** Thumbnail image URL. */
  image?: string;
  /** Related stocks and companies mentioned in the article. */
  related?: string;
  /** News source. */
  source?: string;
  /** News summary. */
  summary?: string;
  /** URL of the original article. */
  url?: string;
};

export const companyNewsSchema: Schema<CompanyNews> = s.object<CompanyNews>({
  category: s.optional(s.string()),
  datetime: s.optional(s.int()),
  headline: s.optional(s.string()),
  id: s.optional(s.int()),
  image: s.optional(s.string()),
  related: s.optional(s.string()),
  source: s.optional(s.string()),
  summary: s.optional(s.string()),
  url: s.optional(s.string()),
});
