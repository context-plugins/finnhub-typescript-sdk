import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankBranchData = {
  /** Branch ID */
  branchId?: string;
  /** Branch address */
  address?: string;
  /** State */
  state?: string;
  /** Zip code */
  zipCode?: string;
  /** Date opened */
  date?: string;
};

export const bankBranchDataSchema: Schema<BankBranchData> = s.object<BankBranchData>({
  branchId: s.optional(s.string()),
  address: s.optional(s.string()),
  state: s.optional(s.string()),
  zipCode: s.optional(s.string()),
  date: s.optional(s.string()),
});
