import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountryMetadata = {
  /** Country name */
  country?: string;
  /** Alpha 2 code */
  code2?: string;
  /** Alpha 3 code */
  code3?: string;
  /** UN code */
  codeNo?: string;
  /** Currency name */
  currency?: string;
  /** Currency code */
  currencyCode?: string;
  /** Region */
  region?: string;
  /** Sub-Region */
  subRegion?: string;
  /** Moody's credit risk rating. */
  rating?: string;
  /** Default spread */
  defaultSpread?: number;
  /** Country risk premium */
  countryRiskPremium?: number;
  /** Equity risk premium */
  equityRiskPremium?: number;
  /** Flag image */
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
  defaultSpread: s.optional(s.float64()),
  countryRiskPremium: s.optional(s.float64()),
  equityRiskPremium: s.optional(s.float64()),
  logo: s.optional(s.string()),
});
