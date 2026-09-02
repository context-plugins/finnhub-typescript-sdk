import { s, type Schema } from "../core/index.js";
import { usptoPatentSchema, type UsptoPatent } from "./uspto-patent.js";

export type UsptoPatentResult = {
  symbol?: string;
  data?: UsptoPatent[];
};

export const usptoPatentResultSchema: Schema<UsptoPatentResult> = s.object<UsptoPatentResult>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => usptoPatentSchema))),
});
