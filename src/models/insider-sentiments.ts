import { s, type Schema } from "../core/index.js";
import { insiderSentimentsDataSchema, type InsiderSentimentsData } from "./insider-sentiments-data.js";

export type InsiderSentiments = {
  symbol?: string;
  data?: InsiderSentimentsData[];
};

export const insiderSentimentsSchema: Schema<InsiderSentiments> = s.object<InsiderSentiments>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => insiderSentimentsDataSchema))),
});
