import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/index.js";
import { apiKeyQueryAuth } from "./core/index.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKey: apiKeyQueryAuth({ name: "token", token: options.apiKey }),
  };
}
