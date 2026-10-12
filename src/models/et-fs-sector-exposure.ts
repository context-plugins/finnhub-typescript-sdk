import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { etfSectorExposureDataSchema, type EtfSectorExposureData } from "./etf-sector-exposure-data.js";

export type EtFsSectorExposure = {
  /** ETF symbol. */
  symbol?: string;
  /** Array of industries and exposure levels. */
  sectorExposure?: EtfSectorExposureData[];
};

export const etFsSectorExposureSchema: Schema<EtFsSectorExposure> = s.object<EtFsSectorExposure>({
  symbol: s.optional(s.string()),
  sectorExposure: s.optional(s.array(s.lazy(() => etfSectorExposureDataSchema))),
});
