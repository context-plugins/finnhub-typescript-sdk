import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchFilter = {
  /** Filter id, use with respective field in search query body. */
  id?: string;
  /** Display name. */
  name?: string;
};

export const searchFilterSchema: Schema<SearchFilter> = s.object<SearchFilter>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
