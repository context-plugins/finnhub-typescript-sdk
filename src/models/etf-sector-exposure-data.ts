import { s, type Schema } from "../core/index.js";

export type EtfSectorExposureData = {
  industry?: string;
  exposure?: number;
};

export const etfSectorExposureDataSchema: Schema<EtfSectorExposureData> = s.object<EtfSectorExposureData>({
  industry: s.optional(s.string()),
  exposure: s.optional(s.number()),
});
