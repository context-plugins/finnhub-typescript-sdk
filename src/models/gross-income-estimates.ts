import { s, type Schema } from "../core/index.js";
import {
  grossIncomeEstimatesInfoSchema,
  type GrossIncomeEstimatesInfo,
} from "./gross-income-estimates-info.js";

export type GrossIncomeEstimates = {
  data?: GrossIncomeEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const grossIncomeEstimatesSchema: Schema<GrossIncomeEstimates> = s.object<GrossIncomeEstimates>({
  data: s.optional(s.array(s.lazy(() => grossIncomeEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
