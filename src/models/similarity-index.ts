import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { similarityIndexInfoSchema, type SimilarityIndexInfo } from "./similarity-index-info.js";

export type SimilarityIndex = {
  /** Symbol. */
  symbol?: string;
  /** CIK. */
  cik?: string;
  /**
   * Array of filings with its cosine similarity compared to the same report of the previous year.
   */
  similarity?: SimilarityIndexInfo[];
};

export const similarityIndexSchema: Schema<SimilarityIndex> = s.object<SimilarityIndex>({
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  similarity: s.optional(s.array(s.lazy(() => similarityIndexInfoSchema))),
});
