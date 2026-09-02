import { s, type Schema } from "../core/index.js";
import { netIncomeEstimatesInfoSchema, type NetIncomeEstimatesInfo } from "./net-income-estimates-info.js";

export type NetIncomeEstimates = {
  data?: NetIncomeEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const netIncomeEstimatesSchema: Schema<NetIncomeEstimates> = s.object<NetIncomeEstimates>({
  data: s.optional(s.array(s.lazy(() => netIncomeEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
