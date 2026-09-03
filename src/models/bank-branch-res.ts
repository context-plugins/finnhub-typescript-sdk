import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankBranchDataSchema, type BankBranchData } from "./bank-branch-data.js";

export type BankBranchRes = {
  data?: BankBranchData[];
  symbol?: string;
};

export const bankBranchResSchema: Schema<BankBranchRes> = s.object<BankBranchRes>({
  data: s.optional(s.array(s.lazy(() => bankBranchDataSchema))),
  symbol: s.optional(s.string()),
});
