import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsaSpending = {
  /** Symbol. */
  symbol?: string;
  /** Company's name. */
  recipientName?: string;
  /** Company's name. */
  recipientParentName?: string;
  /** Description. */
  awardDescription?: string;
  /** Recipient's country. */
  country?: string;
  /** Period. */
  actionDate?: string;
  /** Income reported by lobbying firms. */
  totalValue?: number;
  /** Performance start date. */
  performanceStartDate?: string;
  /** Performance end date. */
  performanceEndDate?: string;
  /** Award agency. */
  awardingAgencyName?: string;
  /** Award sub-agency. */
  awardingSubAgencyName?: string;
  /** Award office name. */
  awardingOfficeName?: string;
  /** Performance country. */
  performanceCountry?: string;
  /** Performance city. */
  performanceCity?: string;
  /** Performance county. */
  performanceCounty?: string;
  /** Performance state. */
  performanceState?: string;
  /** Performance zip code. */
  performanceZipCode?: string;
  /** Performance congressional district. */
  performanceCongressionalDistrict?: string;
  /** NAICS code. */
  naicsCode?: string;
  /** Permalink. */
  permalink?: string;
};

export const usaSpendingSchema: Schema<UsaSpending> = s.object<UsaSpending>({
  symbol: s.optional(s.string()),
  recipientName: s.optional(s.string()),
  recipientParentName: s.optional(s.string()),
  awardDescription: s.optional(s.string()),
  country: s.optional(s.string()),
  actionDate: s.optional(s.string()),
  totalValue: s.optional(s.float64()),
  performanceStartDate: s.optional(s.string()),
  performanceEndDate: s.optional(s.string()),
  awardingAgencyName: s.optional(s.string()),
  awardingSubAgencyName: s.optional(s.string()),
  awardingOfficeName: s.optional(s.string()),
  performanceCountry: s.optional(s.string()),
  performanceCity: s.optional(s.string()),
  performanceCounty: s.optional(s.string()),
  performanceState: s.optional(s.string()),
  performanceZipCode: s.optional(s.string()),
  performanceCongressionalDistrict: s.optional(s.string()),
  naicsCode: s.optional(s.string()),
  permalink: s.optional(s.string()),
});
