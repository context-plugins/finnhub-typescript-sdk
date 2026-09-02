import { s, type Schema } from "../core/index.js";
import { earningReleaseSchema, type EarningRelease } from "./earning-release.js";

export type EarningsCalendar = {
  earningsCalendar?: EarningRelease[];
};

export const earningsCalendarSchema: Schema<EarningsCalendar> = s.object<EarningsCalendar>({
  earningsCalendar: s.optional(s.array(s.lazy(() => earningReleaseSchema))),
});
