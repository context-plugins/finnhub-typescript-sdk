import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insiderSentimentsDataSchema, type InsiderSentimentsData } from "./insider-sentiments-data.js";

export type InsiderSentiments = {
  /** Symbol of the company. */
  symbol?: string;
  /** Array of sentiment data. */
  data?: InsiderSentimentsData[];
};

export const insiderSentimentsSchema: Schema<InsiderSentiments> = s.object<InsiderSentiments>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => insiderSentimentsDataSchema))),
});
