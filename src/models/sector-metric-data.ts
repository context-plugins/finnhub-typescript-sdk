import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SectorMetricData = {
  /** Sector */
  sector?: string;
  /**
   * Metrics data in key-value format. <code>a</code> and <code>m</code> fields are for average and
   * median respectively.
   */
  metrics?: Record<string, unknown>;
};

export const sectorMetricDataSchema: Schema<SectorMetricData> = s.object<SectorMetricData>({
  sector: s.optional(s.string()),
  metrics: s.optional(s.record(s.string(), s.unknown())),
});
