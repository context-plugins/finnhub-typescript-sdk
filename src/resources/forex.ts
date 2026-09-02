import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { forexCandlesSchema, type ForexCandles } from "../models/forex-candles.js";
import { forexSymbolSchema, type ForexSymbol } from "../models/forex-symbol.js";
import { forexratesSchema, type Forexrates } from "../models/forexrates.js";
import type { Servers } from "../servers.js";

export class Forex {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  forexCandles(
    request: Forex.ForexCandlesRequest,
    options?: RequestOptions,
  ): ApiPromise<ForexCandles, ResponseError> {
    return this.#rawClient.execute<ForexCandles, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/forex/candle"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
          { name: "from", value: request.from, schema: s.number() },
          { name: "to", value: request.to, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: forexCandlesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  forexExchanges(options?: RequestOptions): ApiPromise<string[], ResponseError> {
    return this.#rawClient.execute<string[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/forex/exchange"),
        auth: this.#auth.apiKey,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  forexRates(
    request: Forex.ForexRatesRequest,
    options?: RequestOptions,
  ): ApiPromise<Forexrates, ResponseError> {
    return this.#rawClient.execute<Forexrates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/forex/rates"),
        auth: this.#auth.apiKey,
        query: [
          { name: "base", value: request.base, schema: s.optional(s.string()) },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: forexratesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  forexSymbols(
    request: Forex.ForexSymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<ForexSymbol[], ResponseError> {
    return this.#rawClient.execute<ForexSymbol[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/forex/symbol"),
        auth: this.#auth.apiKey,
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => forexSymbolSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Forex {
  export type ForexCandlesRequest = {
    symbol: string;
    resolution: string;
    from: number;
    to: number;
  };

  export type ForexRatesRequest = {
    base?: string;
    date?: string;
  };

  export type ForexSymbolsRequest = {
    exchange: string;
  };
}
