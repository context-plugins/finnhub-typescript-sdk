import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstitutionalProfileInfo = {
  /** Investor's company CIK. */
  cik?: string;
  /** Firm type. */
  firmType?: string;
  /** Manager. */
  manager?: string;
  /** Investing philosophy. */
  philosophy?: string;
  /** Profile info. */
  profile?: string;
  /** Profile image. */
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
