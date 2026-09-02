import { s, type Schema } from "../core/index.js";
import { similarityIndexInfoSchema, type SimilarityIndexInfo } from "./similarity-index-info.js";

export type SimilarityIndex = {
  symbol?: string;
  cik?: string;
  similarity?: SimilarityIndexInfo[];
};

export const similarityIndexSchema: Schema<SimilarityIndex> = s.object<SimilarityIndex>({
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  similarity: s.optional(s.array(s.lazy(() => similarityIndexInfoSchema))),
});
