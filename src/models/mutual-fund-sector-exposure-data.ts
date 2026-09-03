import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MutualFundSectorExposureData = {
  sector?: string;
  exposure?: number;
};

export const mutualFundSectorExposureDataSchema: Schema<MutualFundSectorExposureData> =
  s.object<MutualFundSectorExposureData>({
    sector: s.optional(s.string()),
    exposure: s.optional(s.number()),
  });
