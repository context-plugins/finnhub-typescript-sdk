import { s, type Schema } from "../core/index.js";
import {
  mutualFundSectorExposureDataSchema,
  type MutualFundSectorExposureData,
} from "./mutual-fund-sector-exposure-data.js";

export type MutualFundSectorExposure = {
  symbol?: string;
  sectorExposure?: MutualFundSectorExposureData[];
};

export const mutualFundSectorExposureSchema: Schema<MutualFundSectorExposure> =
  s.object<MutualFundSectorExposure>({
    symbol: s.optional(s.string()),
    sectorExposure: s.optional(s.array(s.lazy(() => mutualFundSectorExposureDataSchema))),
  });
