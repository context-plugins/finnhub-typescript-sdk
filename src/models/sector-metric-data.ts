import { s, type Schema } from "../core/index.js";

export type SectorMetricData = {
  sector?: string;
  metrics?: Record<string, unknown>;
};

export const sectorMetricDataSchema: Schema<SectorMetricData> = s.object<SectorMetricData>({
  sector: s.optional(s.string()),
  metrics: s.optional(s.record(s.string(), s.unknown())),
});
