import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dividends2InfoSchema, type Dividends2Info } from "./dividends2-info.js";

export type Dividends2 = {
  /** Symbol */
  symbol?: string;
  data?: Dividends2Info[];
};

export const dividends2Schema: Schema<Dividends2> = s.object<Dividends2>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => dividends2InfoSchema))),
});
