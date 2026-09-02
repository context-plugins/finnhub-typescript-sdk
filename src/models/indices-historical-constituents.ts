import { s, type Schema } from "../core/index.js";
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
