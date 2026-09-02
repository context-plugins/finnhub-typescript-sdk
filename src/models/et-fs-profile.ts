import { s, type Schema } from "../core/index.js";
import { etfProfileDataSchema, type EtfProfileData } from "./etf-profile-data.js";

export type EtFsProfile = {
  symbol?: string;
  profile?: EtfProfileData;
};

export const etFsProfileSchema: Schema<EtFsProfile> = s.object<EtFsProfile>({
  symbol: s.optional(s.string()),
  profile: s.optional(s.lazy(() => etfProfileDataSchema)),
});
