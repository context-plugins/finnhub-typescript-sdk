import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MutualFundCountryExposureData = {
  country?: string;
  exposure?: number;
};

export const mutualFundCountryExposureDataSchema: Schema<MutualFundCountryExposureData> =
  s.object<MutualFundCountryExposureData>({
    country: s.optional(s.string()),
    exposure: s.optional(s.number()),
  });
