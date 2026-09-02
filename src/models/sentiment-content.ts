import { s, type Schema } from "../core/index.js";

export type SentimentContent = {
  mention?: number;
  positiveMention?: number;
  negativeMention?: number;
  positiveScore?: number;
  negativeScore?: number;
  score?: number;
  atTime?: string;
};

export const sentimentContentSchema: Schema<SentimentContent> = s.object<SentimentContent>({
  mention: s.optional(s.number()),
  positiveMention: s.optional(s.number()),
  negativeMention: s.optional(s.number()),
  positiveScore: s.optional(s.number()),
  negativeScore: s.optional(s.number()),
  score: s.optional(s.number()),
  atTime: s.optional(s.string()),
});
