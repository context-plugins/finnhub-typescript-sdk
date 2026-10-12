import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

/**
 * Institutional portfolios and ownership
 */
export class Institutional {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list institutional investors' positions for a particular stock overtime. Data from 13-F
   * filings. Limit to 1 year of data at a time.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  institutionalOwnership(
    request: Institutional.InstitutionalOwnershipRequest,
    options?: RequestOptions,
  ): ApiPromise<InstitutionalOwnership, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/institutional/ownership"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "cusip", value: request.cusip, schema: s.string() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: institutionalOwnershipSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the holdings/portfolio data of institutional investors from 13-F filings. Limit to 1 year
   * of data at a time. You can get a list of supported CIK <a
   * href="/api/v1/institutional/list?token=" target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  institutionalPortfolio(
    request: Institutional.InstitutionalPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<InstitutionalPortfolio, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/institutional/portfolio"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "cik", value: request.cik, schema: s.string() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: institutionalPortfolioSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of well-known institutional investors. Currently support 60+ profiles.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  institutionalProfile(
    request: Institutional.InstitutionalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<InstitutionalProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/institutional/profile"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "cik", value: request.cik, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: institutionalProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Institutional {
  export type InstitutionalOwnershipRequest = {
    /** Filter by symbol. */
    symbol: string;
    /** Filter by CUSIP. */
    cusip: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type InstitutionalPortfolioRequest = {
    /** Fund's CIK. */
    cik: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type InstitutionalProfileRequest = {
    /** Filter by CIK. Leave blank to get the full list. */
    cik?: string;
  };
}
