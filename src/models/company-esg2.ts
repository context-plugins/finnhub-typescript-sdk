import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyEsg2 = {
  /** Total ESG Score */
  totalEsgScore?: number;
  /** Environment Score */
  environmentScore?: number;
  /** Governance Score */
  governanceScore?: number;
  /** Social Score */
  socialScore?: number;
  data?: Record<string, unknown>;
  /** Period */
  period?: string;
};

export const companyEsg2Schema: Schema<CompanyEsg2> = s.object<CompanyEsg2>({
  totalEsgScore: s.optional(s.float64()),
  environmentScore: s.optional(s.float64()),
  governanceScore: s.optional(s.float64()),
  socialScore: s.optional(s.float64()),
  data: s.optional(s.record(s.string(), s.unknown())),
  period: s.optional(s.string()),
  _keysMap: {
    totalEsgScore: "totalESGScore",
  },
});
