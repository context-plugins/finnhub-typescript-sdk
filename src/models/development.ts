import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Development = {
  /** Company symbol. */
  symbol?: string;
  /** Published time in <code>YYYY-MM-DD HH:MM:SS</code> format. */
  datetime?: string;
  /** Development headline. */
  headline?: string;
  /** Development description. */
  description?: string;
  /** URL. */
  url?: string;
};

export const developmentSchema: Schema<Development> = s.object<Development>({
  symbol: s.optional(s.string()),
  datetime: s.optional(s.string()),
  headline: s.optional(s.string()),
  description: s.optional(s.string()),
  url: s.optional(s.string()),
});
