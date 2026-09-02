import { s, type Schema } from "../core/index.js";
import { marketHolidayDataSchema, type MarketHolidayData } from "./market-holiday-data.js";

export type MarketHoliday = {
  timezone?: string;
  exchange?: string;
  data?: MarketHolidayData[];
};

export const marketHolidaySchema: Schema<MarketHoliday> = s.object<MarketHoliday>({
  timezone: s.optional(s.string()),
  exchange: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => marketHolidayDataSchema))),
});
