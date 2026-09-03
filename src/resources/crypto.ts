import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { cryptoCandlesSchema, type CryptoCandles } from "../models/crypto-candles.js";
import { cryptoProfileSchema, type CryptoProfile } from "../models/crypto-profile.js";
import { cryptoSymbolSchema, type CryptoSymbol } from "../models/crypto-symbol.js";
import type { Servers } from "../servers.js";

export class Crypto {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cryptoCandles(
    request: Crypto.CryptoCandlesRequest,
    options?: RequestOptions,
  ): ApiPromise<CryptoCandles, ResponseError> {
    return this.#rawClient.execute<CryptoCandles, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/crypto/candle"),
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
        success: { kind: "json", schema: cryptoCandlesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cryptoExchanges(options?: RequestOptions): ApiPromise<string[], ResponseError> {
    return this.#rawClient.execute<string[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/crypto/exchange"),
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

  cryptoProfile(
    request: Crypto.CryptoProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<CryptoProfile, ResponseError> {
    return this.#rawClient.execute<CryptoProfile, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/crypto/profile"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cryptoProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cryptoSymbols(
    request: Crypto.CryptoSymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<CryptoSymbol[], ResponseError> {
    return this.#rawClient.execute<CryptoSymbol[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/crypto/symbol"),
        auth: this.#auth.apiKey,
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => cryptoSymbolSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Crypto {
  export type CryptoCandlesRequest = {
    symbol: string;
    resolution: string;
    from: number;
    to: number;
  };

  export type CryptoProfileRequest = {
    symbol: string;
  };

  export type CryptoSymbolsRequest = {
    exchange: string;
  };
}
