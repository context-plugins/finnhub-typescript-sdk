import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IsinChangeInfo = {
  atDate?: string;
  oldIsin?: string;
  newIsin?: string;
};

export const isinChangeInfoSchema: Schema<IsinChangeInfo> = s.object<IsinChangeInfo>({
  atDate: s.optional(s.string()),
  oldIsin: s.optional(s.string()),
  newIsin: s.optional(s.string()),
});
