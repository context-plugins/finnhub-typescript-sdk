import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  institutionalOwnershipSchema,
  type InstitutionalOwnership,
} from "../models/institutional-ownership.js";
import {
  institutionalPortfolioSchema,
  type InstitutionalPortfolio,
} from "../models/institutional-portfolio.js";
import { institutionalProfileSchema, type InstitutionalProfile } from "../models/institutional-profile.js";
import type { Servers } from "../servers.js";

export class Institutional {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  institutionalOwnership(
    request: Institutional.InstitutionalOwnershipRequest,
    options?: RequestOptions,
  ): ApiPromise<InstitutionalOwnership, ResponseError> {
    return this.#rawClient.execute<InstitutionalOwnership, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/institutional/ownership"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "cusip", value: request.cusip, schema: s.string() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: institutionalOwnershipSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  institutionalPortfolio(
    request: Institutional.InstitutionalPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<InstitutionalPortfolio, ResponseError> {
    return this.#rawClient.execute<InstitutionalPortfolio, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/institutional/portfolio"),
        auth: this.#auth.apiKey,
        query: [
          { name: "cik", value: request.cik, schema: s.string() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: institutionalPortfolioSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  institutionalProfile(
    request: Institutional.InstitutionalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<InstitutionalProfile, ResponseError> {
    return this.#rawClient.execute<InstitutionalProfile, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/institutional/profile"),
        auth: this.#auth.apiKey,
        query: [{ name: "cik", value: request.cik, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: institutionalProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Institutional {
  export type InstitutionalOwnershipRequest = {
    symbol: string;
    cusip: string;
    from: string;
    to: string;
  };

  export type InstitutionalPortfolioRequest = {
    cik: string;
    from: string;
    to: string;
  };

  export type InstitutionalProfileRequest = {
    cik?: string;
  };
}
