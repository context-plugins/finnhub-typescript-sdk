import { s, type Schema } from "../core/index.js";

export type BankBranchData = {
  branchId?: string;
  address?: string;
  state?: string;
  zipCode?: string;
  date?: string;
};

export const bankBranchDataSchema: Schema<BankBranchData> = s.object<BankBranchData>({
  branchId: s.optional(s.string()),
  address: s.optional(s.string()),
  state: s.optional(s.string()),
  zipCode: s.optional(s.string()),
  date: s.optional(s.string()),
});
