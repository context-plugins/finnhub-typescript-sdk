import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MutualFundSectorExposureData = {
  /** Sector */
  sector?: string;
  /** Percent of exposure. */
  exposure?: number;
};

export const mutualFundSectorExposureDataSchema: Schema<MutualFundSectorExposureData> =
  s.object<MutualFundSectorExposureData>({
    sector: s.optional(s.string()),
    exposure: s.optional(s.float64()),
  });
