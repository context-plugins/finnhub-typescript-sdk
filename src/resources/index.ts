import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { indicesConstituentsSchema, type IndicesConstituents } from "../models/indices-constituents.js";
import {
  indicesHistoricalConstituentsSchema,
  type IndicesHistoricalConstituents,
} from "../models/indices-historical-constituents.js";
import type { Servers } from "../servers.js";

export class Index {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  indicesConstituents(
    request: Index.IndicesConstituentsRequest,
    options?: RequestOptions,
  ): ApiPromise<IndicesConstituents, ResponseError> {
    return this.#rawClient.execute<IndicesConstituents, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/index/constituents"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: indicesConstituentsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  indicesHistoricalConstituents(
    request: Index.IndicesHistoricalConstituentsRequest,
    options?: RequestOptions,
  ): ApiPromise<IndicesHistoricalConstituents, ResponseError> {
    return this.#rawClient.execute<IndicesHistoricalConstituents, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/index/historical-constituents"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: indicesHistoricalConstituentsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Index {
  export type IndicesConstituentsRequest = {
    symbol: string;
  };

  export type IndicesHistoricalConstituentsRequest = {
    symbol: string;
  };
}
