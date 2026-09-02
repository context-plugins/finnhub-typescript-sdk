import { s, type Schema } from "../core/index.js";
import { presentationDataSchema, type PresentationData } from "./presentation-data.js";

export type StockPresentation = {
  symbol?: string;
  res?: PresentationData[];
};

export const stockPresentationSchema: Schema<StockPresentation> = s.object<StockPresentation>({
  symbol: s.optional(s.string()),
  res: s.optional(s.array(s.lazy(() => presentationDataSchema))),
});
