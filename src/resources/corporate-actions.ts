import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { isinChangeSchema, type IsinChange } from "../models/isin-change.js";
import { symbolChangeSchema, type SymbolChange } from "../models/symbol-change.js";
import type { Servers } from "../servers.js";

/**
 * Corporate actions
 */
export class CorporateActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of ISIN changes for EU-listed securities. Limit to 2000 events at a time.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  isinChange(
    request: CorporateActions.IsinChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<IsinChange, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ca/isin-change"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: isinChangeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of symbol changes for US-listed, EU-listed, NSE and ASX securities. Limit to 2000
   * events at a time.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  symbolChange(
    request: CorporateActions.SymbolChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<SymbolChange, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ca/symbol-change"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: symbolChangeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CorporateActions {
  export type IsinChangeRequest = {
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type SymbolChangeRequest = {
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };
}
