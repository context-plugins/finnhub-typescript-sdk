import { s, type Schema } from "../core/index.js";

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
