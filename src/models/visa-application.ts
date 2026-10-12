import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VisaApplication = {
  /** Year. */
  year?: number;
  /** Quarter. */
  quarter?: number;
  /** Symbol. */
  symbol?: string;
  /** Case number. */
  caseNumber?: string;
  /** Case status. */
  caseStatus?: string;
  /** Received date. */
  receivedDate?: string;
  /** Visa class. */
  visaClass?: string;
  /** Job Title. */
  jobTitle?: string;
  /**
   * SOC Code. A list of SOC code can be found <a
   * href="https://www.bls.gov/oes/current/oes_stru.htm" target="_blank">here</a>.
   */
  socCode?: string;
  /** Full-time position flag. */
  fullTimePosition?: string;
  /** Job's start date. */
  beginDate?: string;
  /** Job's end date. */
  endDate?: string;
  /** Company's name. */
  employerName?: string;
  /** Worksite address. */
  worksiteAddress?: string;
  /** Worksite city. */
  worksiteCity?: string;
  /** Worksite county. */
  worksiteCounty?: string;
  /** Worksite state. */
  worksiteState?: string;
  /** Worksite postal code. */
  worksitePostalCode?: string;
  /** Wage range from. */
  wageRangeFrom?: number;
  /** Wage range to. */
  wageRangeTo?: number;
  /** Wage unit of pay. */
  wageUnitOfPay?: string;
  /** Wage level. */
  wageLevel?: string;
  /** H1B dependent flag. */
  h1BDependent?: string;
};

export const visaApplicationSchema: Schema<VisaApplication> = s.object<VisaApplication>({
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
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
  wageRangeFrom: s.optional(s.float64()),
  wageRangeTo: s.optional(s.float64()),
  wageUnitOfPay: s.optional(s.string()),
  wageLevel: s.optional(s.string()),
  h1BDependent: s.optional(s.string()),
  _keysMap: {
    h1BDependent: "h1bDependent",
  },
});
