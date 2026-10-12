import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mutualFundProfileDataSchema, type MutualFundProfileData } from "./mutual-fund-profile-data.js";

export type MutualFundProfile = {
  /** Symbol. */
  symbol?: string;
  profile?: MutualFundProfileData;
};

export const mutualFundProfileSchema: Schema<MutualFundProfile> = s.object<MutualFundProfile>({
  symbol: s.optional(s.string()),
  profile: s.optional(s.lazy(() => mutualFundProfileDataSchema)),
});
