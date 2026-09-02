import { s, type Schema } from "../core/index.js";

export type SimilarityIndexInfo = {
  cik?: string;
  item1?: number;
  item1A?: number;
  item2?: number;
  item7?: number;
  item7A?: number;
  accessNumber?: string;
  form?: string;
  filedDate?: string;
  acceptedDate?: string;
  reportUrl?: string;
  filingUrl?: string;
};

export const similarityIndexInfoSchema: Schema<SimilarityIndexInfo> = s.object<SimilarityIndexInfo>({
  cik: s.optional(s.string()),
  item1: s.optional(s.number()),
  item1A: s.optional(s.number()),
  item2: s.optional(s.number()),
  item7: s.optional(s.number()),
  item7A: s.optional(s.number()),
  accessNumber: s.optional(s.string()),
  form: s.optional(s.string()),
  filedDate: s.optional(s.string()),
  acceptedDate: s.optional(s.string()),
  reportUrl: s.optional(s.string()),
  filingUrl: s.optional(s.string()),
  _keysMap: {
    item1A: "item1a",
    item7A: "item7a",
  },
});
