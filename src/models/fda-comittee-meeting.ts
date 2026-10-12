import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FdaComitteeMeeting = {
  /** Start time of the event in EST. */
  fromDate?: string;
  /** End time of the event in EST. */
  toDate?: string;
  /** Event's description. */
  eventDescription?: string;
  /** URL. */
  url?: string;
};

export const fdaComitteeMeetingSchema: Schema<FdaComitteeMeeting> = s.object<FdaComitteeMeeting>({
  fromDate: s.optional(s.string()),
  toDate: s.optional(s.string()),
  eventDescription: s.optional(s.string()),
  url: s.optional(s.string()),
});
