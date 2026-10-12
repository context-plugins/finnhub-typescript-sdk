import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Indicator = {
  /** Number of buy signals */
  buy?: number;
  /** Number of neutral signals */
  neutral?: number;
  /** Number of sell signals */
  sell?: number;
};

export const indicatorSchema: Schema<Indicator> = s.object<Indicator>({
  buy: s.optional(s.int()),
  neutral: s.optional(s.int()),
  sell: s.optional(s.int()),
});
