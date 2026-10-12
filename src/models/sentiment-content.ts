import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SentimentContent = {
  /** Number of mentions */
  mention?: number;
  /** Number of positive mentions */
  positiveMention?: number;
  /** Number of negative mentions */
  negativeMention?: number;
  /** Positive score. Range 0-1 */
  positiveScore?: number;
  /** Negative score. Range 0-1 */
  negativeScore?: number;
  /** Final score. Range: -1 to 1 with 1 is very positive and -1 is very negative */
  score?: number;
  /** Period. */
  atTime?: string;
};

export const sentimentContentSchema: Schema<SentimentContent> = s.object<SentimentContent>({
  mention: s.optional(s.int()),
  positiveMention: s.optional(s.int()),
  negativeMention: s.optional(s.int()),
  positiveScore: s.optional(s.float64()),
  negativeScore: s.optional(s.float64()),
  score: s.optional(s.float64()),
  atTime: s.optional(s.string()),
});
