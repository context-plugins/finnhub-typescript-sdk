import { s, type Schema } from "../core/index.js";

export type InsiderSentimentsData = {
  symbol?: string;
  year?: number;
  month?: number;
  change?: number;
  mspr?: number;
};

export const insiderSentimentsDataSchema: Schema<InsiderSentimentsData> = s.object<InsiderSentimentsData>({
  symbol: s.optional(s.string()),
  year: s.optional(s.number()),
  month: s.optional(s.number()),
  change: s.optional(s.number()),
  mspr: s.optional(s.number()),
});
