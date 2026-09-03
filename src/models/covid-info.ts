import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CovidInfo = {
  state?: string;
  case?: number;
  death?: number;
  updated?: string;
};

export const covidInfoSchema: Schema<CovidInfo> = s.object<CovidInfo>({
  state: s.optional(s.string()),
  case: s.optional(s.number()),
  death: s.optional(s.number()),
  updated: s.optional(s.string()),
});
