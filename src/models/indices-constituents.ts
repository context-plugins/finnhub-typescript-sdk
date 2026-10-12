import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  indicesConstituentsBreakdownSchema,
  type IndicesConstituentsBreakdown,
} from "./indices-constituents-breakdown.js";

export type IndicesConstituents = {
  /** Index's symbol. */
  symbol?: string;
  /** Array of constituents. */
  constituents?: string[];
  /** Array of constituents' details. */
  constituentsBreakdown?: IndicesConstituentsBreakdown[];
};

export const indicesConstituentsSchema: Schema<IndicesConstituents> = s.object<IndicesConstituents>({
  symbol: s.optional(s.string()),
  constituents: s.optional(s.array(s.string())),
  constituentsBreakdown: s.optional(s.array(s.lazy(() => indicesConstituentsBreakdownSchema))),
});
