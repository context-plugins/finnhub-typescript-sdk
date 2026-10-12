import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Bond } from "./resources/bond.js";
import { Calendar } from "./resources/calendar.js";
import { CorporateActions } from "./resources/corporate-actions.js";
import { Crypto } from "./resources/crypto.js";
import { Economic } from "./resources/economic.js";
import { Etf } from "./resources/etf.js";
import { Forex } from "./resources/forex.js";
import { GlobalFilings } from "./resources/global-filings.js";
import { Index } from "./resources/index.js";
import { Institutional } from "./resources/institutional.js";
import { Misc } from "./resources/misc.js";
import { MutualFund } from "./resources/mutual-fund.js";
import { News } from "./resources/news.js";
import { Scan } from "./resources/scan.js";
import { StockEstimates } from "./resources/stock-estimates.js";
import { StockFundamentals } from "./resources/stock-fundamentals.js";
import { StockOwnership } from "./resources/stock-ownership.js";
import { StockPrices } from "./resources/stock-prices.js";
import { buildServers, type Servers } from "./servers.js";

export class FinnhubApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #bond?: Bond;
  #calendar?: Calendar;
  #corporateActions?: CorporateActions;
  #crypto?: Crypto;
  #economic?: Economic;
  #etf?: Etf;
  #forex?: Forex;
  #globalFilings?: GlobalFilings;
  #index?: Index;
  #institutional?: Institutional;
  #misc?: Misc;
  #mutualFund?: MutualFund;
  #news?: News;
  #scan?: Scan;
  #stockEstimates?: StockEstimates;
  #stockFundamentals?: StockFundamentals;
  #stockOwnership?: StockOwnership;
  #stockPrices?: StockPrices;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FINNHUB_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FinnhubApiClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Bond profiles, prices and yields
   */
  get bond(): Bond {
    return (this.#bond ??= new Bond(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Earnings and IPO calendars
   */
  get calendar(): Calendar {
    return (this.#calendar ??= new Calendar(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Corporate actions
   */
  get corporateActions(): CorporateActions {
    return (this.#corporateActions ??= new CorporateActions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Crypto exchanges, symbols and candles
   */
  get crypto(): Crypto {
    return (this.#crypto ??= new Crypto(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Economic codes and data
   */
  get economic(): Economic {
    return (this.#economic ??= new Economic(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * ETF profiles, holdings and data
   */
  get etf(): Etf {
    return (this.#etf ??= new Etf(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Forex exchanges, symbols and candles
   */
  get forex(): Forex {
    return (this.#forex ??= new Forex(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Global filings search and download
   */
  get globalFilings(): GlobalFilings {
    return (this.#globalFilings ??= new GlobalFilings(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Index constituents
   */
  get index(): Index {
    return (this.#index ??= new Index(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Institutional portfolios and ownership
   */
  get institutional(): Institutional {
    return (this.#institutional ??= new Institutional(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search, quote, sector metrics, technical indicators and other utilities
   */
  get misc(): Misc {
    return (this.#misc ??= new Misc(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Mutual fund profiles, holdings and data
   */
  get mutualFund(): MutualFund {
    return (this.#mutualFund ??= new MutualFund(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Market and company news, press releases, news sentiment
   */
  get news(): News {
    return (this.#news ??= new News(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Technical analysis scanner
   */
  get scan(): Scan {
    return (this.#scan ??= new Scan(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Analyst estimates, earnings, price targets, recommendations and revenue breakdowns
   */
  get stockEstimates(): StockEstimates {
    return (this.#stockEstimates ??= new StockEstimates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Company profiles, financials, filings, ESG, transcripts and presentations
   */
  get stockFundamentals(): StockFundamentals {
    return (this.#stockFundamentals ??= new StockFundamentals(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Ownership, insider activity, congressional trading, lobbying and alternative data
   */
  get stockOwnership(): StockOwnership {
    return (this.#stockOwnership ??= new StockOwnership(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Stock symbols, market status, candles, ticks, quotes-adjacent price data, dividends and splits
   */
  get stockPrices(): StockPrices {
    return (this.#stockPrices ??= new StockPrices(this.#rawClient, this.#servers, this.#auth));
  }
}
