import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sectorMetricDataSchema, type SectorMetricData } from "./sector-metric-data.js";

export type SectorMetric = {
  /** Region. */
  region?: string;
  /** Metrics for each sector. */
  data?: SectorMetricData[];
};

export const sectorMetricSchema: Schema<SectorMetric> = s.object<SectorMetric>({
  region: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => sectorMetricDataSchema))),
});
