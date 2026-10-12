import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

/**
 * Stock symbols, market status, candles, ticks, quotes-adjacent price data, dividends and splits
 */
export class StockPrices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get company peers. Return a list of peers operating in the same country and sector/industry.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyPeers(
    request: StockPrices.CompanyPeersRequest,
    options?: RequestOptions,
  ): ApiPromise<string[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/peers"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "grouping", value: request.grouping, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get historical market cap data for global companies.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  historicalMarketCap(
    request: StockPrices.HistoricalMarketCapRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalMarketCapData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/historical-market-cap"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalMarketCapDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of holidays for global exchanges.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marketHoliday(
    request: StockPrices.MarketHolidayRequest,
    options?: RequestOptions,
  ): ApiPromise<MarketHoliday, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/market-holiday"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marketHolidaySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get current market status for global exchanges (whether exchanges are open or close).
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marketStatus(
    request: StockPrices.MarketStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<MarketStatus, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/market-status"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marketStatusSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company price performance statistics such as 52-week high/low, YTD return and much more.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  priceMetrics(
    request: StockPrices.PriceMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<PriceMetrics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/price-metric"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceMetricsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get global dividends data.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockBasicDividends(
    request: StockPrices.StockBasicDividendsRequest,
    options?: RequestOptions,
  ): ApiPromise<Dividends2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/dividend2"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dividends2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get last bid/ask data for US stocks.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockBidask(
    request: StockPrices.StockBidaskRequest,
    options?: RequestOptions,
  ): ApiPromise<LastBidAsk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/bidask"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lastBidAskSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get candlestick data (OHLCV) for stocks.</p><p>Daily data will be adjusted for Splits.
   * Intraday data will remain unadjusted. Only 1 month of intraday will be returned at a time. If
   * you need more historical intraday data, please use the from and to params iteratively to
   * request more data.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockCandles(
    request: StockPrices.StockCandlesRequest,
    options?: RequestOptions,
  ): ApiPromise<StockCandles, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/candle"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
          { name: "from", value: request.from, schema: s.int() },
          { name: "to", value: request.to, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stockCandlesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get dividends data for common stocks going back 30 years.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockDividends(
    request: StockPrices.StockDividendsRequest,
    options?: RequestOptions,
  ): ApiPromise<Dividends[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/dividend"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dividendsSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get historical best bid and offer for US stocks, LSE, TSX, Euronext and Deutsche
   * Borse.</p><p>For US market, this endpoint only serves historical NBBO from the beginning of
   * 2023. To download more historical data, please visit our bulk download page in the Dashboard <a
   * target="_blank" href="/dashboard/download",>here</a>.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockNbbo(
    request: StockPrices.StockNbboRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalNbbo, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/bbo"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "date", value: request.date, schema: s.dateOnly() },
          { name: "limit", value: request.limit, schema: s.int() },
          { name: "skip", value: request.skip, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalNbboSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get splits data for stocks.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockSplits(
    request: StockPrices.StockSplitsRequest,
    options?: RequestOptions,
  ): ApiPromise<Split[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/split"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => splitSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List supported stocks. We use the following symbology to identify stocks on Finnhub
   * <code>Exchange_Ticker.Exchange_Code</code>. A list of supported exchange codes can be found <a
   * href="https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing"
   * target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockSymbols(
    request: StockPrices.StockSymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<StockSymbol[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/symbol"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "exchange", value: request.exchange, schema: s.string() },
          { name: "mic", value: request.mic, schema: s.optional(s.string()) },
          { name: "securityType", value: request.securityType, schema: s.optional(s.string()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stockSymbolSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get historical tick data for global exchanges.</p><p>For more historical tick data, you can
   * visit our bulk download page in the Dashboard <a target="_blank"
   * href="/dashboard/download",>here</a> to speed up the download process.</p><table class="table
   * table-hover"> <thead> <tr> <th>Exchange</th> <th>Segment</th> <th>Delay</th> </tr> </thead>
   * <tbody> <tr> <td class="text-blue">US CTA/UTP</th> <td>Full SIP</td> <td>End-of-day</td> </tr>
   * <tr> <td class="text-blue">TSX</th> <td><ul><li>TSX</li><li>TSX
   * Venture</li><li>Index</li></ul></td> <td>End-of-day</td> </tr> <tr> <td
   * class="text-blue">LSE</th> <td><ul><li>London Stock Exchange (L)</li><li>LSE International
   * (L)</li><li>LSE European (L)</li></ul></td> <td>15 minute</td> </tr> <tr> <td
   * class="text-blue">Euronext</th> <td><ul> <li>Euronext Paris (PA)</li> <li>Euronext Amsterdam
   * (AS)</li> <li>Euronext Lisbon (LS)</li> <li>Euronext Brussels (BR)</li> <li>Euronext Oslo
   * (OL)</li> <li>Euronext London (LN)</li> <li>Euronext Dublin (IR)</li> <li>Index</li>
   * <li>Warrant</li></ul></td> <td>End-of-day</td> </tr> <tr> <td class="text-blue">Deutsche
   * Börse</th> <td><ul> <li>Frankfurt (F)</li> <li>Xetra (DE)</li> <li>Duesseldorf (DU)</li>
   * <li>Hamburg (HM)</li> <li>Berlin (BE)</li> <li>Hanover (HA)</li> <li>Stoxx (SX)</li>
   * <li>TradeGate (TG)</li> <li>Zertifikate (SC)</li> <li>Index</li> <li>Warrant</li></ul></td>
   * <td>End-of-day</td> </tr> </tbody> </table>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockTick(request: StockPrices.StockTickRequest, options?: RequestOptions): ApiPromise<TickData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/tick"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "date", value: request.date, schema: s.dateOnly() },
          { name: "limit", value: request.limit, schema: s.int() },
          { name: "skip", value: request.skip, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tickDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StockPrices {
  export type CompanyPeersRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Specify the grouping criteria for choosing peers.Supporter values: <code>sector</code>,
     * <code>industry</code>, <code>subIndustry</code>. Default to <code>subIndustry</code>.
     */
    grouping?: string;
  };

  export type HistoricalMarketCapRequest = {
    /** Company symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type MarketHolidayRequest = {
    /** Exchange code. */
    exchange: string;
  };

  export type MarketStatusRequest = {
    /** Exchange code. */
    exchange: string;
  };

  export type PriceMetricsRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Get data on a specific date in the past. The data is available weekly so your date will be
     * automatically adjusted to the last day of that week.
     */
    date?: string;
  };

  export type StockBasicDividendsRequest = {
    /** Symbol. */
    symbol: string;
  };

  export type StockBidaskRequest = {
    /** Symbol. */
    symbol: string;
  };

  export type StockCandlesRequest = {
    /** Symbol. */
    symbol: string;
    /**
     * Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might
     * not be available depending on the exchange.
     */
    resolution: string;
    /** UNIX timestamp. Interval initial value. */
    from: number;
    /** UNIX timestamp. Interval end value. */
    to: number;
  };

  export type StockDividendsRequest = {
    /** Symbol. */
    symbol: string;
    /** YYYY-MM-DD. */
    from: string;
    /** YYYY-MM-DD. */
    to: string;
  };

  export type StockNbboRequest = {
    /** Symbol. */
    symbol: string;
    /** Date: 2020-04-02. */
    date: string;
    /** Limit number of ticks returned. Maximum value: <code>25000</code> */
    limit: number;
    /** Number of ticks to skip. Use this parameter to loop through the entire data. */
    skip: number;
  };

  export type StockSplitsRequest = {
    /** Symbol. */
    symbol: string;
    /** YYYY-MM-DD. */
    from: string;
    /** YYYY-MM-DD. */
    to: string;
  };

  export type StockSymbolsRequest = {
    /**
     * Exchange you want to get the list of symbols from. List of exchange codes can be found <a
     * href="https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing"
     * target="_blank">here</a>.
     */
    exchange: string;
    /** Filter by MIC code. */
    mic?: string;
    /** Filter by security type used by OpenFigi standard. */
    securityType?: string;
    /** Filter by currency. */
    currency?: string;
  };

  export type StockTickRequest = {
    /** Symbol. */
    symbol: string;
    /** Date: 2020-04-02. */
    date: string;
    /** Limit number of ticks returned. Maximum value: <code>25000</code> */
    limit: number;
    /** Number of ticks to skip. Use this parameter to loop through the entire data. */
    skip: number;
  };
}
