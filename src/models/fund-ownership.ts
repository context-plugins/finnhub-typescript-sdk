import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundOwnershipInfoSchema, type FundOwnershipInfo } from "./fund-ownership-info.js";

export type FundOwnership = {
  /** Symbol of the company. */
  symbol?: string;
  /** Array of investors with detailed information about their holdings. */
  ownership?: FundOwnershipInfo[];
};

export const fundOwnershipSchema: Schema<FundOwnership> = s.object<FundOwnership>({
  symbol: s.optional(s.string()),
  ownership: s.optional(s.array(s.lazy(() => fundOwnershipInfoSchema))),
});
