import { s, type Schema } from "../core/index.js";
import {
  institutionalOwnershipGroupSchema,
  type InstitutionalOwnershipGroup,
} from "./institutional-ownership-group.js";

export type InstitutionalOwnership = {
  symbol?: string;
  cusip?: string;
  data?: InstitutionalOwnershipGroup[];
};

export const institutionalOwnershipSchema: Schema<InstitutionalOwnership> = s.object<InstitutionalOwnership>({
  symbol: s.optional(s.string()),
  cusip: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => institutionalOwnershipGroupSchema))),
});
