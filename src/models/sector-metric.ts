import { s, type Schema } from "../core/index.js";
import { sectorMetricDataSchema, type SectorMetricData } from "./sector-metric-data.js";

export type SectorMetric = {
  region?: string;
  data?: SectorMetricData[];
};

export const sectorMetricSchema: Schema<SectorMetric> = s.object<SectorMetric>({
  region: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => sectorMetricDataSchema))),
});
