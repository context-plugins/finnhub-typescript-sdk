import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SectorMetricData = {
  sector?: string;
  metrics?: Record<string, unknown>;
};

export const sectorMetricDataSchema: Schema<SectorMetricData> = s.object<SectorMetricData>({
  sector: s.optional(s.string()),
  metrics: s.optional(s.record(s.string(), s.unknown())),
});
