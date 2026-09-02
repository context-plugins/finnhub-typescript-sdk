import { s, type Schema } from "../core/index.js";

export type EconomicCode = {
  code?: string;
  country?: string;
  name?: string;
  unit?: string;
};

export const economicCodeSchema: Schema<EconomicCode> = s.object<EconomicCode>({
  code: s.optional(s.string()),
  country: s.optional(s.string()),
  name: s.optional(s.string()),
  unit: s.optional(s.string()),
});
