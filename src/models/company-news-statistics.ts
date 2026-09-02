import { s, type Schema } from "../core/index.js";

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
