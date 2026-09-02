import { s, type Schema } from "../core/index.js";

export type EmployeeCount = {
  atDate?: string;
  employee?: number;
};

export const employeeCountSchema: Schema<EmployeeCount> = s.object<EmployeeCount>({
  atDate: s.optional(s.string()),
  employee: s.optional(s.number()),
});
