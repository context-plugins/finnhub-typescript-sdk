import { s, type Schema } from "../core/index.js";
import { etfSectorExposureDataSchema, type EtfSectorExposureData } from "./etf-sector-exposure-data.js";

export type EtFsSectorExposure = {
  symbol?: string;
  sectorExposure?: EtfSectorExposureData[];
};

export const etFsSectorExposureSchema: Schema<EtFsSectorExposure> = s.object<EtFsSectorExposure>({
  symbol: s.optional(s.string()),
  sectorExposure: s.optional(s.array(s.lazy(() => etfSectorExposureDataSchema))),
});
