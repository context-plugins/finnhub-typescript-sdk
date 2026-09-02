import { s, type Schema } from "../core/index.js";
import { etfCountryExposureDataSchema, type EtfCountryExposureData } from "./etf-country-exposure-data.js";

export type EtFsCountryExposure = {
  symbol?: string;
  countryExposure?: EtfCountryExposureData[];
};

export const etFsCountryExposureSchema: Schema<EtFsCountryExposure> = s.object<EtFsCountryExposure>({
  symbol: s.optional(s.string()),
  countryExposure: s.optional(s.array(s.lazy(() => etfCountryExposureDataSchema))),
});
