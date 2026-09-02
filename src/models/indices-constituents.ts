import { s, type Schema } from "../core/index.js";
import {
  indicesConstituentsBreakdownSchema,
  type IndicesConstituentsBreakdown,
} from "./indices-constituents-breakdown.js";

export type IndicesConstituents = {
  symbol?: string;
  constituents?: string[];
  constituentsBreakdown?: IndicesConstituentsBreakdown[];
};

export const indicesConstituentsSchema: Schema<IndicesConstituents> = s.object<IndicesConstituents>({
  symbol: s.optional(s.string()),
  constituents: s.optional(s.array(s.string())),
  constituentsBreakdown: s.optional(s.array(s.lazy(() => indicesConstituentsBreakdownSchema))),
});
