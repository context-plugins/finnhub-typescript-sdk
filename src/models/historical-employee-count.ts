import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeCountSchema, type EmployeeCount } from "./employee-count.js";

export type HistoricalEmployeeCount = {
  /** Array of market data. */
  data?: EmployeeCount[];
  /** Symbol */
  symbol?: string;
};

export const historicalEmployeeCountSchema: Schema<HistoricalEmployeeCount> =
  s.object<HistoricalEmployeeCount>({
    data: s.optional(s.array(s.lazy(() => employeeCountSchema))),
    symbol: s.optional(s.string()),
  });
