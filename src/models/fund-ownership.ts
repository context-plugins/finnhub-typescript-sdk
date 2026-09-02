import { s, type Schema } from "../core/index.js";
import { fundOwnershipInfoSchema, type FundOwnershipInfo } from "./fund-ownership-info.js";

export type FundOwnership = {
  symbol?: string;
  ownership?: FundOwnershipInfo[];
};

export const fundOwnershipSchema: Schema<FundOwnership> = s.object<FundOwnership>({
  symbol: s.optional(s.string()),
  ownership: s.optional(s.array(s.lazy(() => fundOwnershipInfoSchema))),
});
