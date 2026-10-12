import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  mutualFundSectorExposureDataSchema,
  type MutualFundSectorExposureData,
} from "./mutual-fund-sector-exposure-data.js";

export type MutualFundSectorExposure = {
  /** Mutual symbol. */
  symbol?: string;
  /** Array of sector and exposure levels. */
  sectorExposure?: MutualFundSectorExposureData[];
};

export const mutualFundSectorExposureSchema: Schema<MutualFundSectorExposure> =
  s.object<MutualFundSectorExposure>({
    symbol: s.optional(s.string()),
    sectorExposure: s.optional(s.array(s.lazy(() => mutualFundSectorExposureDataSchema))),
  });
