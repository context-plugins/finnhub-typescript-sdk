import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { earningReleaseSchema, type EarningRelease } from "./earning-release.js";

export type EarningsCalendar = {
  /** Array of earnings release. */
  earningsCalendar?: EarningRelease[];
};

export const earningsCalendarSchema: Schema<EarningsCalendar> = s.object<EarningsCalendar>({
  earningsCalendar: s.optional(s.array(s.lazy(() => earningReleaseSchema))),
});
