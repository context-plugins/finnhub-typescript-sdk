import { s, type Schema } from "../core/index.js";

export type SearchFilter = {
  id?: string;
  name?: string;
};

export const searchFilterSchema: Schema<SearchFilter> = s.object<SearchFilter>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
