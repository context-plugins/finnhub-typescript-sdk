import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NewsroomArticle = {
  /** Published time in <code>YYYY-MM-DD HH:MM:SS</code> format (EST timezone). */
  atDate?: string;
  /** Title. */
  title?: string;
  /** URL to download the full text data. */
  fullText?: string;
  /** Original URL. */
  url?: string;
};

export const newsroomArticleSchema: Schema<NewsroomArticle> = s.object<NewsroomArticle>({
  atDate: s.optional(s.string()),
  title: s.optional(s.string()),
  fullText: s.optional(s.string()),
  url: s.optional(s.string()),
});
