import { s, type Schema } from "../core/index.js";
import {
  companyEarningsQualityScoreDataSchema,
  type CompanyEarningsQualityScoreData,
} from "./company-earnings-quality-score-data.js";

export type CompanyEarningsQualityScore = {
  symbol?: string;
  freq?: string;
  data?: CompanyEarningsQualityScoreData[];
};

export const companyEarningsQualityScoreSchema: Schema<CompanyEarningsQualityScore> =
  s.object<CompanyEarningsQualityScore>({
    symbol: s.optional(s.string()),
    freq: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => companyEarningsQualityScoreDataSchema))),
  });
