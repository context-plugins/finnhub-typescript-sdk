import { s, type Schema } from "../core/index.js";
import {
  mutualFundCountryExposureDataSchema,
  type MutualFundCountryExposureData,
} from "./mutual-fund-country-exposure-data.js";

export type MutualFundCountryExposure = {
  symbol?: string;
  countryExposure?: MutualFundCountryExposureData[];
};

export const mutualFundCountryExposureSchema: Schema<MutualFundCountryExposure> =
  s.object<MutualFundCountryExposure>({
    symbol: s.optional(s.string()),
    countryExposure: s.optional(s.array(s.lazy(() => mutualFundCountryExposureDataSchema))),
  });
