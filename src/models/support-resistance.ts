import { s, type Schema } from "../core/index.js";

export type SupportResistance = {
  levels?: number[];
};

export const supportResistanceSchema: Schema<SupportResistance> = s.object<SupportResistance>({
  levels: s.optional(s.array(s.number())),
});
