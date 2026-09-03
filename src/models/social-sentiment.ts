import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sentimentContentSchema, type SentimentContent } from "./sentiment-content.js";

export type SocialSentiment = {
  symbol?: string;
  data?: SentimentContent[];
};

export const socialSentimentSchema: Schema<SocialSentiment> = s.object<SocialSentiment>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => sentimentContentSchema))),
});
