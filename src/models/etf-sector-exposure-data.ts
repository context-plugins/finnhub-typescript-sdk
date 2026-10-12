import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtfSectorExposureData = {
  /** Industry */
  industry?: string;
  /** Percent of exposure. */
  exposure?: number;
};

export const etfSectorExposureDataSchema: Schema<EtfSectorExposureData> = s.object<EtfSectorExposureData>({
  industry: s.optional(s.string()),
  exposure: s.optional(s.float64()),
});
