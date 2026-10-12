import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EconomicEvent = {
  /** Actual release */
  actual?: number;
  /** Previous release */
  prev?: number;
  /** Country */
  country?: string;
  /** Unit */
  unit?: string;
  /** Estimate */
  estimate?: number;
  /** Event */
  event?: string;
  /** Impact level */
  impact?: string;
  /** Release time */
  time?: string;
};

export const economicEventSchema: Schema<EconomicEvent> = s.object<EconomicEvent>({
  actual: s.optional(s.float64()),
  prev: s.optional(s.float64()),
  country: s.optional(s.string()),
  unit: s.optional(s.string()),
  estimate: s.optional(s.float64()),
  event: s.optional(s.string()),
  impact: s.optional(s.string()),
  time: s.optional(s.string()),
});
