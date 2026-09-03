import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FdaComitteeMeeting = {
  fromDate?: string;
  toDate?: string;
  eventDescription?: string;
  url?: string;
};

export const fdaComitteeMeetingSchema: Schema<FdaComitteeMeeting> = s.object<FdaComitteeMeeting>({
  fromDate: s.optional(s.string()),
  toDate: s.optional(s.string()),
  eventDescription: s.optional(s.string()),
  url: s.optional(s.string()),
});
