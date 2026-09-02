import { s, type Schema } from "../core/index.js";
import { employeeCountSchema, type EmployeeCount } from "./employee-count.js";

export type HistoricalEmployeeCount = {
  data?: EmployeeCount[];
  symbol?: string;
};

export const historicalEmployeeCountSchema: Schema<HistoricalEmployeeCount> =
  s.object<HistoricalEmployeeCount>({
    data: s.optional(s.array(s.lazy(() => employeeCountSchema))),
    symbol: s.optional(s.string()),
  });
