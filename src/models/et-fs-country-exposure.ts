import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { etfCountryExposureDataSchema, type EtfCountryExposureData } from "./etf-country-exposure-data.js";

export type EtFsCountryExposure = {
  symbol?: string;
  countryExposure?: EtfCountryExposureData[];
};

export const etFsCountryExposureSchema: Schema<EtFsCountryExposure> = s.object<EtFsCountryExposure>({
  symbol: s.optional(s.string()),
  countryExposure: s.optional(s.array(s.lazy(() => etfCountryExposureDataSchema))),
});
