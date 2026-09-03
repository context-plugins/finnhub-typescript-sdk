import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Company = {
  name?: string;
  age?: number;
  title?: string;
  since?: string;
  sex?: string;
  compensation?: number;
  currency?: string;
};

export const companySchema: Schema<Company> = s.object<Company>({
  name: s.optional(s.string()),
  age: s.optional(s.number()),
  title: s.optional(s.string()),
  since: s.optional(s.string()),
  sex: s.optional(s.string()),
  compensation: s.optional(s.number()),
  currency: s.optional(s.string()),
});
