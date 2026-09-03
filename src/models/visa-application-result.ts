import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { visaApplicationSchema, type VisaApplication } from "./visa-application.js";

export type VisaApplicationResult = {
  symbol?: string;
  data?: VisaApplication[];
};

export const visaApplicationResultSchema: Schema<VisaApplicationResult> = s.object<VisaApplicationResult>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => visaApplicationSchema))),
});
