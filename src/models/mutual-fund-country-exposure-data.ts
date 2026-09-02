import { s, type Schema } from "../core/index.js";

export type MutualFundCountryExposureData = {
  country?: string;
  exposure?: number;
};

export const mutualFundCountryExposureDataSchema: Schema<MutualFundCountryExposureData> =
  s.object<MutualFundCountryExposureData>({
    country: s.optional(s.string()),
    exposure: s.optional(s.number()),
  });
