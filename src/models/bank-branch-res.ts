import { s, type Schema } from "../core/index.js";
import { bankBranchDataSchema, type BankBranchData } from "./bank-branch-data.js";

export type BankBranchRes = {
  data?: BankBranchData[];
  symbol?: string;
};

export const bankBranchResSchema: Schema<BankBranchRes> = s.object<BankBranchRes>({
  data: s.optional(s.array(s.lazy(() => bankBranchDataSchema))),
  symbol: s.optional(s.string()),
});
