import { s, type Schema } from "../core/index.js";
import { ipoEventSchema, type IpoEvent } from "./ipo-event.js";

export type IpoCalendar = {
  ipoCalendar?: IpoEvent[];
};

export const ipoCalendarSchema: Schema<IpoCalendar> = s.object<IpoCalendar>({
  ipoCalendar: s.optional(s.array(s.lazy(() => ipoEventSchema))),
});
