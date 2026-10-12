import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Company = {
  /** Executive name */
  name?: string;
  /** Age */
  age?: number;
  /** Title */
  title?: string;
  /** Year first appointed as executive/director of the company */
  since?: string;
  /** Sex */
  sex?: string;
  /** Total compensation */
  compensation?: number;
  /** Compensation currency */
  currency?: string;
};

export const companySchema: Schema<Company> = s.object<Company>({
  name: s.optional(s.string()),
  age: s.optional(s.int()),
  title: s.optional(s.string()),
  since: s.optional(s.string()),
  sex: s.optional(s.string()),
  compensation: s.optional(s.int()),
  currency: s.optional(s.string()),
});
