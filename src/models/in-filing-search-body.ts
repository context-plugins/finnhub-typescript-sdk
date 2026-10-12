import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InFilingSearchBody = {
  /** Search query */
  query: string;
  /** Filing Id to search */
  filingId: string;
};

export const inFilingSearchBodySchema: Schema<InFilingSearchBody> = s.object<InFilingSearchBody>({
  query: s.string(),
  filingId: s.string(),
});
