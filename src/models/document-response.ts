import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { excerptResponseSchema, type ExcerptResponse } from "./excerpt-response.js";

export type DocumentResponse = {
  /** AlphaResearch internal document id. */
  documentId?: string;
  /** Title for this document. */
  title?: string;
  /** Number of hit in this document */
  hits?: string;
  /** Link to render this document */
  url?: string;
  /** Format of this document (can be html or pdf) */
  format?: string;
  /** Highlighted excerpts for this document */
  excerpts?: ExcerptResponse[];
};

export const documentResponseSchema: Schema<DocumentResponse> = s.object<DocumentResponse>({
  documentId: s.optional(s.string()),
  title: s.optional(s.string()),
  hits: s.optional(s.string()),
  url: s.optional(s.string()),
  format: s.optional(s.string()),
  excerpts: s.optional(s.array(s.lazy(() => excerptResponseSchema))),
});
