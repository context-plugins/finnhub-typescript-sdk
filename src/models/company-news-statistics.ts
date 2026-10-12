import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyNewsStatistics = {
  articlesInLastWeek?: number;
  buzz?: number;
  weeklyAverage?: number;
};

export const companyNewsStatisticsSchema: Schema<CompanyNewsStatistics> = s.object<CompanyNewsStatistics>({
  articlesInLastWeek: s.optional(s.int()),
  buzz: s.optional(s.float64()),
  weeklyAverage: s.optional(s.float64()),
});
