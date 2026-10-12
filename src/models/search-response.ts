import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filingResponseSchema, type FilingResponse } from "./filing-response.js";

export type SearchResponse = {
  /** Total filing matched your search criteria. */
  count?: number;
  /** Time took to execute your search query on our server, value in ms. */
  took?: number;
  /** Current search page */
  page?: number;
  /** Filing match your search criteria. */
  filings?: FilingResponse[];
};

export const searchResponseSchema: Schema<SearchResponse> = s.object<SearchResponse>({
  count: s.optional(s.int()),
  took: s.optional(s.int()),
  page: s.optional(s.int()),
  filings: s.optional(s.array(s.lazy(() => filingResponseSchema))),
});
