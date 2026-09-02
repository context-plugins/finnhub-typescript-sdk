import { s, type Schema } from "../core/index.js";

export type InFilingSearchBody = {
  query: string;
  filingId: string;
};

export const inFilingSearchBodySchema: Schema<InFilingSearchBody> = s.object<InFilingSearchBody>({
  query: s.string(),
  filingId: s.string(),
});
