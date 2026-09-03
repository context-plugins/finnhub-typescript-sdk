import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Development = {
  symbol?: string;
  datetime?: string;
  headline?: string;
  description?: string;
  url?: string;
};

export const developmentSchema: Schema<Development> = s.object<Development>({
  symbol: s.optional(s.string()),
  datetime: s.optional(s.string()),
  headline: s.optional(s.string()),
  description: s.optional(s.string()),
  url: s.optional(s.string()),
});
