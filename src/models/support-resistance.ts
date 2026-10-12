import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SupportResistance = {
  /** Array of support and resistance levels. */
  levels?: number[];
};

export const supportResistanceSchema: Schema<SupportResistance> = s.object<SupportResistance>({
  levels: s.optional(s.array(s.float64())),
});
