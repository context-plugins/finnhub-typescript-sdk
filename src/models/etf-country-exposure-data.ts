import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtfCountryExposureData = {
  country?: string;
  exposure?: number;
};

export const etfCountryExposureDataSchema: Schema<EtfCountryExposureData> = s.object<EtfCountryExposureData>({
  country: s.optional(s.string()),
  exposure: s.optional(s.number()),
});
