import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountryMetadata = {
  country?: string;
  code2?: string;
  code3?: string;
  codeNo?: string;
  currency?: string;
  currencyCode?: string;
  region?: string;
  subRegion?: string;
  rating?: string;
  defaultSpread?: number;
  countryRiskPremium?: number;
  equityRiskPremium?: number;
  logo?: string;
};

export const countryMetadataSchema: Schema<CountryMetadata> = s.object<CountryMetadata>({
  country: s.optional(s.string()),
  code2: s.optional(s.string()),
  code3: s.optional(s.string()),
  codeNo: s.optional(s.string()),
  currency: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  region: s.optional(s.string()),
  subRegion: s.optional(s.string()),
  rating: s.optional(s.string()),
  defaultSpread: s.optional(s.number()),
  countryRiskPremium: s.optional(s.number()),
  equityRiskPremium: s.optional(s.number()),
  logo: s.optional(s.string()),
});
