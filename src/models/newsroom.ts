import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { newsroomArticleSchema, type NewsroomArticle } from "./newsroom-article.js";

export type Newsroom = {
  /** Company symbol. */
  symbol?: string;
  /** Array of articles. */
  data?: NewsroomArticle[];
};

export const newsroomSchema: Schema<Newsroom> = s.object<Newsroom>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => newsroomArticleSchema))),
});
