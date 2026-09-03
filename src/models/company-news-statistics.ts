import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyNewsStatistics = {
  articlesInLastWeek?: number;
  buzz?: number;
  weeklyAverage?: number;
};

export const companyNewsStatisticsSchema: Schema<CompanyNewsStatistics> = s.object<CompanyNewsStatistics>({
  articlesInLastWeek: s.optional(s.number()),
  buzz: s.optional(s.number()),
  weeklyAverage: s.optional(s.number()),
});
