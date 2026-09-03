import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { excerptResponseSchema, type ExcerptResponse } from "./excerpt-response.js";

export type DocumentResponse = {
  documentId?: string;
  title?: string;
  hits?: string;
  url?: string;
  format?: string;
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
