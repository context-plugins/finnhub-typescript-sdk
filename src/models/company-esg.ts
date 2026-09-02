import { s, type Schema } from "../core/index.js";

export type CompanyEsg = {
  symbol?: string;
  totalEsgScore?: number;
  environmentScore?: number;
  governanceScore?: number;
  socialScore?: number;
  data?: Record<string, unknown>;
};

export const companyEsgSchema: Schema<CompanyEsg> = s.object<CompanyEsg>({
  symbol: s.optional(s.string()),
  totalEsgScore: s.optional(s.number()),
  environmentScore: s.optional(s.number()),
  governanceScore: s.optional(s.number()),
  socialScore: s.optional(s.number()),
  data: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    totalEsgScore: "totalESGScore",
  },
});
