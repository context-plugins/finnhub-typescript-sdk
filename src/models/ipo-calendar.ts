import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ipoEventSchema, type IpoEvent } from "./ipo-event.js";

export type IpoCalendar = {
  ipoCalendar?: IpoEvent[];
};

export const ipoCalendarSchema: Schema<IpoCalendar> = s.object<IpoCalendar>({
  ipoCalendar: s.optional(s.array(s.lazy(() => ipoEventSchema))),
});
