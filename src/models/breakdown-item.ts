import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BreakdownItem = {
  accessNumber?: string;
  breakdown?: Record<string, unknown>;
};

export const breakdownItemSchema: Schema<BreakdownItem> = s.object<BreakdownItem>({
  accessNumber: s.optional(s.string()),
  breakdown: s.optional(s.record(s.string(), s.unknown())),
});
