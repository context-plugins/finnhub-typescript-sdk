import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Forexrates = {
  /** Base currency. */
  base?: string;
  quote?: Record<string, unknown>;
};

export const forexratesSchema: Schema<Forexrates> = s.object<Forexrates>({
  base: s.optional(s.string()),
  quote: s.optional(s.record(s.string(), s.unknown())),
});
