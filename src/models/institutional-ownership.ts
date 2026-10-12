import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionalOwnershipGroupSchema,
  type InstitutionalOwnershipGroup,
} from "./institutional-ownership-group.js";

export type InstitutionalOwnership = {
  /** Symbol. */
  symbol?: string;
  /** Cusip. */
  cusip?: string;
  /** Array of institutional investors. */
  data?: InstitutionalOwnershipGroup[];
};

export const institutionalOwnershipSchema: Schema<InstitutionalOwnership> = s.object<InstitutionalOwnership>({
  symbol: s.optional(s.string()),
  cusip: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => institutionalOwnershipGroupSchema))),
});
