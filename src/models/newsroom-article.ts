import { s, type Schema } from "../core/index.js";

export type NewsroomArticle = {
  atDate?: string;
  title?: string;
  fullText?: string;
  url?: string;
};

export const newsroomArticleSchema: Schema<NewsroomArticle> = s.object<NewsroomArticle>({
  atDate: s.optional(s.string()),
  title: s.optional(s.string()),
  fullText: s.optional(s.string()),
  url: s.optional(s.string()),
});
