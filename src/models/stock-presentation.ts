import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { presentationDataSchema, type PresentationData } from "./presentation-data.js";

export type StockPresentation = {
  symbol?: string;
  res?: PresentationData[];
};

export const stockPresentationSchema: Schema<StockPresentation> = s.object<StockPresentation>({
  symbol: s.optional(s.string()),
  res: s.optional(s.array(s.lazy(() => presentationDataSchema))),
});
