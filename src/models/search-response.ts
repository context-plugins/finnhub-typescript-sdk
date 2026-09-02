import { s, type Schema } from "../core/index.js";
import { filingResponseSchema, type FilingResponse } from "./filing-response.js";

export type SearchResponse = {
  count?: number;
  took?: number;
  page?: number;
  filings?: FilingResponse[];
};

export const searchResponseSchema: Schema<SearchResponse> = s.object<SearchResponse>({
  count: s.optional(s.number()),
  took: s.optional(s.number()),
  page: s.optional(s.number()),
  filings: s.optional(s.array(s.lazy(() => filingResponseSchema))),
});
