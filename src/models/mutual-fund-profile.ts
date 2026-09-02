import { s, type Schema } from "../core/index.js";
import { mutualFundProfileDataSchema, type MutualFundProfileData } from "./mutual-fund-profile-data.js";

export type MutualFundProfile = {
  symbol?: string;
  profile?: MutualFundProfileData;
};

export const mutualFundProfileSchema: Schema<MutualFundProfile> = s.object<MutualFundProfile>({
  symbol: s.optional(s.string()),
  profile: s.optional(s.lazy(() => mutualFundProfileDataSchema)),
});
