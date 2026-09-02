import { s, type Schema } from "../core/index.js";
import {
  institutionalProfileInfoSchema,
  type InstitutionalProfileInfo,
} from "./institutional-profile-info.js";

export type InstitutionalProfile = {
  cik?: string;
  data?: InstitutionalProfileInfo[];
};

export const institutionalProfileSchema: Schema<InstitutionalProfile> = s.object<InstitutionalProfile>({
  cik: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => institutionalProfileInfoSchema))),
});
