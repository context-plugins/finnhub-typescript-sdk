import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { economicDataInfoSchema, type EconomicDataInfo } from "./economic-data-info.js";

export type EconomicData = {
  data?: EconomicDataInfo[];
  code?: string;
};

export const economicDataSchema: Schema<EconomicData> = s.object<EconomicData>({
  data: s.optional(s.array(s.lazy(() => economicDataInfoSchema))),
  code: s.optional(s.string()),
});
