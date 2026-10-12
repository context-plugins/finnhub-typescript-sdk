import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmployeeCount = {
  /** Date of the reading */
  atDate?: string;
  /** Value */
  employee?: number;
};

export const employeeCountSchema: Schema<EmployeeCount> = s.object<EmployeeCount>({
  atDate: s.optional(s.string()),
  employee: s.optional(s.float64()),
});
