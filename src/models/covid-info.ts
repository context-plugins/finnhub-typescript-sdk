import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CovidInfo = {
  /** State. */
  state?: string;
  /** Number of confirmed cases. */
  case?: number;
  /** Number of confirmed deaths. */
  death?: number;
  /** Updated time. */
  updated?: string;
};

export const covidInfoSchema: Schema<CovidInfo> = s.object<CovidInfo>({
  state: s.optional(s.string()),
  case: s.optional(s.float64()),
  death: s.optional(s.float64()),
  updated: s.optional(s.string()),
});
