import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isinChangeInfoSchema, type IsinChangeInfo } from "./isin-change-info.js";

export type IsinChange = {
  fromDate?: string;
  toDate?: string;
  data?: IsinChangeInfo[];
};

export const isinChangeSchema: Schema<IsinChange> = s.object<IsinChange>({
  fromDate: s.optional(s.string()),
  toDate: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => isinChangeInfoSchema))),
});
