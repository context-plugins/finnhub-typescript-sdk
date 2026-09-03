import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SupportResistance = {
  levels?: number[];
};

export const supportResistanceSchema: Schema<SupportResistance> = s.object<SupportResistance>({
  levels: s.optional(s.array(s.number())),
});
