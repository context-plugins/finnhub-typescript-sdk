import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstitutionalProfileInfo = {
  cik?: string;
  firmType?: string;
  manager?: string;
  philosophy?: string;
  profile?: string;
  profileImg?: string;
};

export const institutionalProfileInfoSchema: Schema<InstitutionalProfileInfo> =
  s.object<InstitutionalProfileInfo>({
    cik: s.optional(s.string()),
    firmType: s.optional(s.string()),
    manager: s.optional(s.string()),
    philosophy: s.optional(s.string()),
    profile: s.optional(s.string()),
    profileImg: s.optional(s.string()),
  });
