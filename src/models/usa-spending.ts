import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsaSpending = {
  symbol?: string;
  recipientName?: string;
  recipientParentName?: string;
  awardDescription?: string;
  country?: string;
  actionDate?: string;
  totalValue?: number;
  performanceStartDate?: string;
  performanceEndDate?: string;
  awardingAgencyName?: string;
  awardingSubAgencyName?: string;
  awardingOfficeName?: string;
  performanceCountry?: string;
  performanceCity?: string;
  performanceCounty?: string;
  performanceState?: string;
  performanceZipCode?: string;
  performanceCongressionalDistrict?: string;
  naicsCode?: string;
  permalink?: string;
};

export const usaSpendingSchema: Schema<UsaSpending> = s.object<UsaSpending>({
  symbol: s.optional(s.string()),
  recipientName: s.optional(s.string()),
  recipientParentName: s.optional(s.string()),
  awardDescription: s.optional(s.string()),
  country: s.optional(s.string()),
  actionDate: s.optional(s.string()),
  totalValue: s.optional(s.number()),
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
