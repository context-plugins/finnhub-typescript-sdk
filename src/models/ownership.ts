import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ownershipInfoSchema, type OwnershipInfo } from "./ownership-info.js";

export type Ownership = {
  /** Symbol of the company. */
  symbol?: string;
  /** Array of investors with detailed information about their holdings. */
  ownership?: OwnershipInfo[];
};

export const ownershipSchema: Schema<Ownership> = s.object<Ownership>({
  symbol: s.optional(s.string()),
  ownership: s.optional(s.array(s.lazy(() => ownershipInfoSchema))),
});
