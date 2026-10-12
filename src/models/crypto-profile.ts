import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CryptoProfile = {
  /** Long name. */
  longName?: string;
  /** Name. */
  name?: string;
  /** Description. */
  description?: string;
  /** Project's website. */
  website?: string;
  /** Market capitalization. */
  marketCap?: number;
  /** Total supply. */
  totalSupply?: number;
  /** Max supply. */
  maxSupply?: number;
  /** Circulating supply. */
  circulatingSupply?: number;
  /** Logo image. */
  logo?: string;
  /** Launch date. */
  launchDate?: string;
  /** Proof type. */
  proofType?: string;
};

export const cryptoProfileSchema: Schema<CryptoProfile> = s.object<CryptoProfile>({
  longName: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  website: s.optional(s.string()),
  marketCap: s.optional(s.float64()),
  totalSupply: s.optional(s.float64()),
  maxSupply: s.optional(s.float64()),
  circulatingSupply: s.optional(s.float64()),
  logo: s.optional(s.string()),
  launchDate: s.optional(s.string()),
  proofType: s.optional(s.string()),
});
