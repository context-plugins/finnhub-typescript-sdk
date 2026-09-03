import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchFilter = {
  id?: string;
  name?: string;
};

export const searchFilterSchema: Schema<SearchFilter> = s.object<SearchFilter>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
