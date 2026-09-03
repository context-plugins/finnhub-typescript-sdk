import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ownershipInfoSchema, type OwnershipInfo } from "./ownership-info.js";

export type Ownership = {
  symbol?: string;
  ownership?: OwnershipInfo[];
};

export const ownershipSchema: Schema<Ownership> = s.object<Ownership>({
  symbol: s.optional(s.string()),
  ownership: s.optional(s.array(s.lazy(() => ownershipInfoSchema))),
});
