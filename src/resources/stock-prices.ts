import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { dividendsSchema, type Dividends } from "../models/dividends.js";
import { dividends2Schema, type Dividends2 } from "../models/dividends2.js";
import {
  historicalMarketCapDataSchema,
  type HistoricalMarketCapData,
} from "../models/historical-market-cap-data.js";
import { historicalNbboSchema, type HistoricalNbbo } from "../models/historical-nbbo.js";
import { lastBidAskSchema, type LastBidAsk } from "../models/last-bid-ask.js";
import { marketHolidaySchema, type MarketHoliday } from "../models/market-holiday.js";
import { marketStatusSchema, type MarketStatus } from "../models/market-status.js";
import { priceMetricsSchema, type PriceMetrics } from "../models/price-metrics.js";
import { splitSchema, type Split } from "../models/split.js";
import { stockCandlesSchema, type StockCandles } from "../models/stock-candles.js";
import { stockSymbolSchema, type StockSymbol } from "../models/stock-symbol.js";
import { tickDataSchema, type TickData } from "../models/tick-data.js";
import type { Servers } from "../servers.js";

export class StockPrices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  companyPeers(
    request: StockPrices.CompanyPeersRequest,
    options?: RequestOptions,
  ): ApiPromise<string[], ResponseError> {
    return this.#rawClient.execute<string[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/peers"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "grouping", value: request.grouping, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  historicalMarketCap(
    request: StockPrices.HistoricalMarketCapRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalMarketCapData, ResponseError> {
    return this.#rawClient.execute<HistoricalMarketCapData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/historical-market-cap"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalMarketCapDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  marketHoliday(
    request: StockPrices.MarketHolidayRequest,
    options?: RequestOptions,
  ): ApiPromise<MarketHoliday, ResponseError> {
    return this.#rawClient.execute<MarketHoliday, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/market-holiday"),
        auth: this.#auth.apiKey,
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marketHolidaySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  marketStatus(
    request: StockPrices.MarketStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<MarketStatus, ResponseError> {
    return this.#rawClient.execute<MarketStatus, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/market-status"),
        auth: this.#auth.apiKey,
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marketStatusSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  priceMetrics(
    request: StockPrices.PriceMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<PriceMetrics, ResponseError> {
    return this.#rawClient.execute<PriceMetrics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/price-metric"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceMetricsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockBasicDividends(
    request: StockPrices.StockBasicDividendsRequest,
    options?: RequestOptions,
  ): ApiPromise<Dividends2, ResponseError> {
    return this.#rawClient.execute<Dividends2, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/dividend2"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dividends2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockBidask(
    request: StockPrices.StockBidaskRequest,
    options?: RequestOptions,
  ): ApiPromise<LastBidAsk, ResponseError> {
    return this.#rawClient.execute<LastBidAsk, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/bidask"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lastBidAskSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockCandles(
    request: StockPrices.StockCandlesRequest,
    options?: RequestOptions,
  ): ApiPromise<StockCandles, ResponseError> {
    return this.#rawClient.execute<StockCandles, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/candle"),
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
        success: { kind: "json", schema: stockCandlesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockDividends(
    request: StockPrices.StockDividendsRequest,
    options?: RequestOptions,
  ): ApiPromise<Dividends[], ResponseError> {
    return this.#rawClient.execute<Dividends[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/dividend"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dividendsSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockNbbo(
    request: StockPrices.StockNbboRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalNbbo, ResponseError> {
    return this.#rawClient.execute<HistoricalNbbo, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/bbo"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "date", value: request.date, schema: s.dateOnly() },
          { name: "limit", value: request.limit, schema: s.number() },
          { name: "skip", value: request.skip, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalNbboSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockSplits(
    request: StockPrices.StockSplitsRequest,
    options?: RequestOptions,
  ): ApiPromise<Split[], ResponseError> {
    return this.#rawClient.execute<Split[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/split"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => splitSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockSymbols(
    request: StockPrices.StockSymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<StockSymbol[], ResponseError> {
    return this.#rawClient.execute<StockSymbol[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/symbol"),
        auth: this.#auth.apiKey,
        query: [
          { name: "exchange", value: request.exchange, schema: s.string() },
          { name: "mic", value: request.mic, schema: s.optional(s.string()) },
          { name: "securityType", value: request.securityType, schema: s.optional(s.string()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stockSymbolSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockTick(
    request: StockPrices.StockTickRequest,
    options?: RequestOptions,
  ): ApiPromise<TickData, ResponseError> {
    return this.#rawClient.execute<TickData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/tick"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "date", value: request.date, schema: s.dateOnly() },
          { name: "limit", value: request.limit, schema: s.number() },
          { name: "skip", value: request.skip, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tickDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StockPrices {
  export type CompanyPeersRequest = {
    symbol: string;
    grouping?: string;
  };

  export type HistoricalMarketCapRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type MarketHolidayRequest = {
    exchange: string;
  };

  export type MarketStatusRequest = {
    exchange: string;
  };

  export type PriceMetricsRequest = {
    symbol: string;
    date?: string;
  };

  export type StockBasicDividendsRequest = {
    symbol: string;
  };

  export type StockBidaskRequest = {
    symbol: string;
  };

  export type StockCandlesRequest = {
    symbol: string;
    resolution: string;
    from: number;
    to: number;
  };

  export type StockDividendsRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type StockNbboRequest = {
    symbol: string;
    date: string;
    limit: number;
    skip: number;
  };

  export type StockSplitsRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type StockSymbolsRequest = {
    exchange: string;
    mic?: string;
    securityType?: string;
    currency?: string;
  };

  export type StockTickRequest = {
    symbol: string;
    date: string;
    limit: number;
    skip: number;
  };
}
