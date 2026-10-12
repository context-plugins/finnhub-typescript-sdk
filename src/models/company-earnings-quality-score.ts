import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  companyEarningsQualityScoreDataSchema,
  type CompanyEarningsQualityScoreData,
} from "./company-earnings-quality-score-data.js";

export type CompanyEarningsQualityScore = {
  /** Symbol */
  symbol?: string;
  /** Frequency */
  freq?: string;
  /** Array of earnings quality score. */
  data?: CompanyEarningsQualityScoreData[];
};

export const companyEarningsQualityScoreSchema: Schema<CompanyEarningsQualityScore> =
  s.object<CompanyEarningsQualityScore>({
    symbol: s.optional(s.string()),
    freq: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => companyEarningsQualityScoreDataSchema))),
  });
