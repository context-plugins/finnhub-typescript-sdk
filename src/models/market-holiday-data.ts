import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarketHolidayData = {
  eventName?: string;
  atDate?: string;
  tradingHour?: string;
};

export const marketHolidayDataSchema: Schema<MarketHolidayData> = s.object<MarketHolidayData>({
  eventName: s.optional(s.string()),
  atDate: s.optional(s.string()),
  tradingHour: s.optional(s.string()),
});
