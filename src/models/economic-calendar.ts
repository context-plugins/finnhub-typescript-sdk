import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { economicEventSchema, type EconomicEvent } from "./economic-event.js";

export type EconomicCalendar = {
  /** Array of economic events. */
  economicCalendar?: EconomicEvent[];
};

export const economicCalendarSchema: Schema<EconomicCalendar> = s.object<EconomicCalendar>({
  economicCalendar: s.optional(s.array(s.lazy(() => economicEventSchema))),
});
