import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { presentationDataSchema, type PresentationData } from "./presentation-data.js";

export type StockPresentation = {
  /** Company symbol. */
  symbol?: string;
  /** Presentation data. */
  res?: PresentationData[];
};

export const stockPresentationSchema: Schema<StockPresentation> = s.object<StockPresentation>({
  symbol: s.optional(s.string()),
  res: s.optional(s.array(s.lazy(() => presentationDataSchema))),
});
