import { s, type Schema } from "../core/index.js";

export type MutualFundSectorExposureData = {
  sector?: string;
  exposure?: number;
};

export const mutualFundSectorExposureDataSchema: Schema<MutualFundSectorExposureData> =
  s.object<MutualFundSectorExposureData>({
    sector: s.optional(s.string()),
    exposure: s.optional(s.number()),
  });
