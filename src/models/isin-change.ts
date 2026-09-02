import { s, type Schema } from "../core/index.js";
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
