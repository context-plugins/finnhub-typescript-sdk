import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VisaApplication = {
  year?: number;
  quarter?: number;
  symbol?: string;
  caseNumber?: string;
  caseStatus?: string;
  receivedDate?: string;
  visaClass?: string;
  jobTitle?: string;
  socCode?: string;
  fullTimePosition?: string;
  beginDate?: string;
  endDate?: string;
  employerName?: string;
  worksiteAddress?: string;
  worksiteCity?: string;
  worksiteCounty?: string;
  worksiteState?: string;
  worksitePostalCode?: string;
  wageRangeFrom?: number;
  wageRangeTo?: number;
  wageUnitOfPay?: string;
  wageLevel?: string;
  h1BDependent?: string;
};

export const visaApplicationSchema: Schema<VisaApplication> = s.object<VisaApplication>({
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
  symbol: s.optional(s.string()),
  caseNumber: s.optional(s.string()),
  caseStatus: s.optional(s.string()),
  receivedDate: s.optional(s.string()),
  visaClass: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  socCode: s.optional(s.string()),
  fullTimePosition: s.optional(s.string()),
  beginDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  employerName: s.optional(s.string()),
  worksiteAddress: s.optional(s.string()),
  worksiteCity: s.optional(s.string()),
  worksiteCounty: s.optional(s.string()),
  worksiteState: s.optional(s.string()),
  worksitePostalCode: s.optional(s.string()),
  wageRangeFrom: s.optional(s.number()),
  wageRangeTo: s.optional(s.number()),
  wageUnitOfPay: s.optional(s.string()),
  wageLevel: s.optional(s.string()),
  h1BDependent: s.optional(s.string()),
  _keysMap: {
    h1BDependent: "h1bDependent",
  },
});
