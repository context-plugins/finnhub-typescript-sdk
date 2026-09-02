import { s, type Schema } from "../core/index.js";

export type CryptoProfile = {
  longName?: string;
  name?: string;
  description?: string;
  website?: string;
  marketCap?: number;
  totalSupply?: number;
  maxSupply?: number;
  circulatingSupply?: number;
  logo?: string;
  launchDate?: string;
  proofType?: string;
};

export const cryptoProfileSchema: Schema<CryptoProfile> = s.object<CryptoProfile>({
  longName: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  website: s.optional(s.string()),
  marketCap: s.optional(s.number()),
  totalSupply: s.optional(s.number()),
  maxSupply: s.optional(s.number()),
  circulatingSupply: s.optional(s.number()),
  logo: s.optional(s.string()),
  launchDate: s.optional(s.string()),
  proofType: s.optional(s.string()),
});
