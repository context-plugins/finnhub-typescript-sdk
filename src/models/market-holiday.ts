import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { marketHolidayDataSchema, type MarketHolidayData } from "./market-holiday-data.js";

export type MarketHoliday = {
  /** Timezone. */
  timezone?: string;
  /** Exchange. */
  exchange?: string;
  /** Array of holidays. */
  data?: MarketHolidayData[];
};

export const marketHolidaySchema: Schema<MarketHoliday> = s.object<MarketHoliday>({
  timezone: s.optional(s.string()),
  exchange: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => marketHolidayDataSchema))),
});
