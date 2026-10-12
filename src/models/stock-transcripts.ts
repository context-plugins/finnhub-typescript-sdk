import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StockTranscripts = {
  /** Transcript's ID used to get the <a href="#transcripts">full transcript</a>. */
  id?: string;
  /** Title. */
  title?: string;
  /** Time of the event. */
  time?: string;
  /** Year of earnings result in the case of earnings call transcript. */
  year?: number;
  /** Quarter of earnings result in the case of earnings call transcript. */
  quarter?: number;
};

export const stockTranscriptsSchema: Schema<StockTranscripts> = s.object<StockTranscripts>({
  id: s.optional(s.string()),
  title: s.optional(s.string()),
  time: s.optional(s.string()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
