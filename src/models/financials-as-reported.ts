import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportSchema, type Report } from "./report.js";

export type FinancialsAsReported = {
  symbol?: string;
  cik?: string;
  data?: Report[];
};

export const financialsAsReportedSchema: Schema<FinancialsAsReported> = s.object<FinancialsAsReported>({
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => reportSchema))),
});
