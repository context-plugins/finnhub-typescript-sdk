import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { indicesConstituentsSchema, type IndicesConstituents } from "../models/indices-constituents.js";
import {
  indicesHistoricalConstituentsSchema,
  type IndicesHistoricalConstituents,
} from "../models/indices-historical-constituents.js";
import type { Servers } from "../servers.js";

/**
 * Index constituents
 */
export class Index {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of index's constituents. A list of supported indices for this endpoint can be found
   * <a href="/api/v1/index/list?token=" target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  indicesConstituents(
    request: Index.IndicesConstituentsRequest,
    options?: RequestOptions,
  ): ApiPromise<IndicesConstituents, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/index/constituents"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: indicesConstituentsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get full history of index's constituents including symbols and dates of joining and leaving the
   * Index. A list of supported indices for this endpoint can be found <a
   * href="/api/v1/index/historical-list?token=" target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  indicesHistoricalConstituents(
    request: Index.IndicesHistoricalConstituentsRequest,
    options?: RequestOptions,
  ): ApiPromise<IndicesHistoricalConstituents, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/index/historical-constituents"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: indicesHistoricalConstituentsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Index {
  export type IndicesConstituentsRequest = {
    /** symbol */
    symbol: string;
  };

  export type IndicesHistoricalConstituentsRequest = {
    /** symbol */
    symbol: string;
  };
}
