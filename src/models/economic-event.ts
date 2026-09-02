import { s, type Schema } from "../core/index.js";

export type EconomicEvent = {
  actual?: number;
  prev?: number;
  country?: string;
  unit?: string;
  estimate?: number;
  event?: string;
  impact?: string;
  time?: string;
};

export const economicEventSchema: Schema<EconomicEvent> = s.object<EconomicEvent>({
  actual: s.optional(s.number()),
  prev: s.optional(s.number()),
  country: s.optional(s.string()),
  unit: s.optional(s.string()),
  estimate: s.optional(s.number()),
  event: s.optional(s.string()),
  impact: s.optional(s.string()),
  time: s.optional(s.string()),
});
