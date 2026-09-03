import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionalOwnershipInfoSchema,
  type InstitutionalOwnershipInfo,
} from "./institutional-ownership-info.js";

export type InstitutionalOwnershipGroup = {
  reportDate?: string;
  ownership?: InstitutionalOwnershipInfo[];
};

export const institutionalOwnershipGroupSchema: Schema<InstitutionalOwnershipGroup> =
  s.object<InstitutionalOwnershipGroup>({
    reportDate: s.optional(s.string()),
    ownership: s.optional(s.array(s.lazy(() => institutionalOwnershipInfoSchema))),
  });
