import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionalProfileInfoSchema,
  type InstitutionalProfileInfo,
} from "./institutional-profile-info.js";

export type InstitutionalProfile = {
  /** CIK. */
  cik?: string;
  /** Array of investors. */
  data?: InstitutionalProfileInfo[];
};

export const institutionalProfileSchema: Schema<InstitutionalProfile> = s.object<InstitutionalProfile>({
  cik: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => institutionalProfileInfoSchema))),
});
