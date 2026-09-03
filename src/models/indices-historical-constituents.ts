import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  indexHistoricalConstituentSchema,
  type IndexHistoricalConstituent,
} from "./index-historical-constituent.js";

export type IndicesHistoricalConstituents = {
  symbol?: string;
  historicalConstituents?: IndexHistoricalConstituent[];
};

export const indicesHistoricalConstituentsSchema: Schema<IndicesHistoricalConstituents> =
  s.object<IndicesHistoricalConstituents>({
    symbol: s.optional(s.string()),
    historicalConstituents: s.optional(s.array(s.lazy(() => indexHistoricalConstituentSchema))),
  });
