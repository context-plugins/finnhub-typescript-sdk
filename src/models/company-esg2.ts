import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyEsg2 = {
  totalEsgScore?: number;
  environmentScore?: number;
  governanceScore?: number;
  socialScore?: number;
  data?: Record<string, unknown>;
  period?: string;
};

export const companyEsg2Schema: Schema<CompanyEsg2> = s.object<CompanyEsg2>({
  totalEsgScore: s.optional(s.number()),
  environmentScore: s.optional(s.number()),
  governanceScore: s.optional(s.number()),
  socialScore: s.optional(s.number()),
  data: s.optional(s.record(s.string(), s.unknown())),
  period: s.optional(s.string()),
  _keysMap: {
    totalEsgScore: "totalESGScore",
  },
});
