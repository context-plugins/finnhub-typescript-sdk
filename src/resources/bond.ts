import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { bondCandlesSchema, type BondCandles } from "../models/bond-candles.js";
import { bondProfileSchema, type BondProfile } from "../models/bond-profile.js";
import { bondTickDataSchema, type BondTickData } from "../models/bond-tick-data.js";
import { bondYieldCurveSchema, type BondYieldCurve } from "../models/bond-yield-curve.js";
import type { Servers } from "../servers.js";

export class Bond {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bondPrice(
    request: Bond.BondPriceRequest,
    options?: RequestOptions,
  ): ApiPromise<BondCandles, ResponseError> {
    return this.#rawClient.execute<BondCandles, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/bond/price"),
        auth: this.#auth.apiKey,
        query: [
          { name: "isin", value: request.isin, schema: s.string() },
          { name: "from", value: request.from, schema: s.number() },
          { name: "to", value: request.to, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondCandlesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bondProfile(
    request: Bond.BondProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<BondProfile, ResponseError> {
    return this.#rawClient.execute<BondProfile, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/bond/profile"),
        auth: this.#auth.apiKey,
        query: [
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "cusip", value: request.cusip, schema: s.optional(s.string()) },
          { name: "figi", value: request.figi, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bondTick(request: Bond.BondTickRequest, options?: RequestOptions): ApiPromise<BondTickData, ResponseError> {
    return this.#rawClient.execute<BondTickData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/bond/tick"),
        auth: this.#auth.apiKey,
        query: [
          { name: "isin", value: request.isin, schema: s.string() },
          { name: "date", value: request.date, schema: s.dateOnly() },
          { name: "limit", value: request.limit, schema: s.number() },
          { name: "skip", value: request.skip, schema: s.number() },
          { name: "exchange", value: request.exchange, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondTickDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bondYieldCurve(
    request: Bond.BondYieldCurveRequest,
    options?: RequestOptions,
  ): ApiPromise<BondYieldCurve, ResponseError> {
    return this.#rawClient.execute<BondYieldCurve, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/bond/yield-curve"),
        auth: this.#auth.apiKey,
        query: [{ name: "code", value: request.code, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondYieldCurveSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Bond {
  export type BondPriceRequest = {
    isin: string;
    from: number;
    to: number;
  };

  export type BondProfileRequest = {
    isin?: string;
    cusip?: string;
    figi?: string;
  };

  export type BondTickRequest = {
    isin: string;
    date: string;
    limit: number;
    skip: number;
    exchange: string;
  };

  export type BondYieldCurveRequest = {
    code: string;
  };
}
