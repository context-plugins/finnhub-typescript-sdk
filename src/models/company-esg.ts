import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyEsg = {
  /** symbol */
  symbol?: string;
  /** Total ESG Score */
  totalEsgScore?: number;
  /** Environment Score */
  environmentScore?: number;
  /** Governance Score */
  governanceScore?: number;
  /** Social Score */
  socialScore?: number;
  data?: Record<string, unknown>;
};

export const companyEsgSchema: Schema<CompanyEsg> = s.object<CompanyEsg>({
  symbol: s.optional(s.string()),
  totalEsgScore: s.optional(s.float64()),
  environmentScore: s.optional(s.float64()),
  governanceScore: s.optional(s.float64()),
  socialScore: s.optional(s.float64()),
  data: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    totalEsgScore: "totalESGScore",
  },
});
