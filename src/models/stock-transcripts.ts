import { s, type Schema } from "../core/index.js";

export type StockTranscripts = {
  id?: string;
  title?: string;
  time?: string;
  year?: number;
  quarter?: number;
};

export const stockTranscriptsSchema: Schema<StockTranscripts> = s.object<StockTranscripts>({
  id: s.optional(s.string()),
  title: s.optional(s.string()),
  time: s.optional(s.string()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
