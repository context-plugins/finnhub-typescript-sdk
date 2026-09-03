import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usptoPatentSchema, type UsptoPatent } from "./uspto-patent.js";

export type UsptoPatentResult = {
  symbol?: string;
  data?: UsptoPatent[];
};

export const usptoPatentResultSchema: Schema<UsptoPatentResult> = s.object<UsptoPatentResult>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => usptoPatentSchema))),
});
