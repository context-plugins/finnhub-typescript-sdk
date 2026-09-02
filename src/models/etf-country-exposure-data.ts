import { s, type Schema } from "../core/index.js";

export type EtfCountryExposureData = {
  country?: string;
  exposure?: number;
};

export const etfCountryExposureDataSchema: Schema<EtfCountryExposureData> = s.object<EtfCountryExposureData>({
  country: s.optional(s.string()),
  exposure: s.optional(s.number()),
});
