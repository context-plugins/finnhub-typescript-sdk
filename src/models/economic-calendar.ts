import { s, type Schema } from "../core/index.js";
import { economicEventSchema, type EconomicEvent } from "./economic-event.js";

export type EconomicCalendar = {
  economicCalendar?: EconomicEvent[];
};

export const economicCalendarSchema: Schema<EconomicCalendar> = s.object<EconomicCalendar>({
  economicCalendar: s.optional(s.array(s.lazy(() => economicEventSchema))),
});
