import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InFilingSearchBody = {
  query: string;
  filingId: string;
};

export const inFilingSearchBodySchema: Schema<InFilingSearchBody> = s.object<InFilingSearchBody>({
  query: s.string(),
  filingId: s.string(),
});
