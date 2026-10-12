import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { congressionalTradingSchema, type CongressionalTrading } from "../models/congressional-trading.js";
import { fundOwnershipSchema, type FundOwnership } from "../models/fund-ownership.js";
import { insiderSentimentsSchema, type InsiderSentiments } from "../models/insider-sentiments.js";
import { insiderTransactionsSchema, type InsiderTransactions } from "../models/insider-transactions.js";
import { investmentThemesSchema, type InvestmentThemes } from "../models/investment-themes.js";
import { lobbyingResultSchema, type LobbyingResult } from "../models/lobbying-result.js";
import { ownershipSchema, type Ownership } from "../models/ownership.js";
import { socialSentimentSchema, type SocialSentiment } from "../models/social-sentiment.js";
import {
  supplyChainRelationshipsSchema,
  type SupplyChainRelationships,
} from "../models/supply-chain-relationships.js";
import { usaSpendingResultSchema, type UsaSpendingResult } from "../models/usa-spending-result.js";
import { usptoPatentResultSchema, type UsptoPatentResult } from "../models/uspto-patent-result.js";
import {
  visaApplicationResultSchema,
  type VisaApplicationResult,
} from "../models/visa-application-result.js";
import type { Servers } from "../servers.js";

/**
 * Ownership, insider activity, congressional trading, lobbying and alternative data
 */
export class StockOwnership {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get stock trades data disclosed by members of congress.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  congressionalTrading(
    request: StockOwnership.CongressionalTradingRequest,
    options?: RequestOptions,
  ): ApiPromise<CongressionalTrading, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/congressional-trading"),
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
        success: { kind: "json", schema: congressionalTradingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a full list fund and institutional investors of a company in descending order of the number
   * of shares held. Data is sourced from <code>13F form</code>, <code>Schedule 13D</code> and
   * <code>13G</code> for US market, <code>UK Share Register</code> for UK market, <code>SEDI</code>
   * for Canadian market and equivalent filings for other international markets.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundOwnership(
    request: StockOwnership.FundOwnershipRequest,
    options?: RequestOptions,
  ): ApiPromise<FundOwnership, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/fund-ownership"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundOwnershipSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get insider sentiment data for US companies calculated using method discussed <a
   * href="https://medium.com/@stock-api/finnhub-insiders-sentiment-analysis-cc43f9f64b3a"
   * target="_blank">here</a>. The MSPR ranges from -100 for the most negative to 100 for the most
   * positive which can signal price changes in the coming 30-90 days.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insiderSentiment(
    request: StockOwnership.InsiderSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<InsiderSentiments, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/insider-sentiment"),
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
        success: { kind: "json", schema: insiderSentimentsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Company insider transactions data sourced from <code>Form 3,4,5</code>, SEDI and relevant
   * companies' filings. This endpoint covers US, UK, Canada, Australia, India, and all major EU
   * markets. Limit to 100 transactions per API call.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insiderTransactions(
    request: StockOwnership.InsiderTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsiderTransactions, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/insider-transactions"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insiderTransactionsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Thematic investing involves creating a portfolio (or portion of a portfolio) by gathering
   * together a collection of companies involved in certain areas that you predict will generate
   * above-market returns over the long term. Themes can be based on a concept such as ageing
   * populations or a sub-sector such as robotics, and drones. Thematic investing focuses on
   * predicted long-term trends rather than specific companies or sectors, enabling investors to
   * access structural, one-off shifts that can change an entire industry.</p><p>This endpoint will
   * help you get portfolios of different investment themes that are changing our life and are the
   * way of the future.</p><p>A full list of themes supported can be found <a target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp=sharing">here</a>.
   * The theme coverage and portfolios are updated bi-weekly by our analysts. Our approach excludes
   * penny, super-small cap and illiquid stocks.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  investmentThemes(
    request: StockOwnership.InvestmentThemesRequest,
    options?: RequestOptions,
  ): ApiPromise<InvestmentThemes, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/investment-theme"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "theme", value: request.theme, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: investmentThemesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a full list of shareholders of a company in descending order of the number of shares held.
   * Data is sourced from <code>13F form</code>, <code>Schedule 13D</code> and <code>13G</code> for
   * US market, <code>UK Share Register</code> for UK market, <code>SEDI</code> for Canadian market
   * and equivalent filings for other international markets.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ownership(
    request: StockOwnership.OwnershipRequest,
    options?: RequestOptions,
  ): ApiPromise<Ownership, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/ownership"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ownershipSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get social sentiment for stocks on Reddit and Twitter.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialSentiment(
    request: StockOwnership.SocialSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<SocialSentiment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/social-sentiment"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: socialSentimentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of reported lobbying activities in the Senate and the House.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockLobbying(
    request: StockOwnership.StockLobbyingRequest,
    options?: RequestOptions,
  ): ApiPromise<LobbyingResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/lobbying"),
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
        success: { kind: "json", schema: lobbyingResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get a list of government's spending activities from USASpending dataset for public
   * companies. This dataset can help you identify companies that win big government contracts which
   * is extremely important for industries such as Defense, Aerospace, and Education. Only recent
   * data is available via the API.</p><p>For historical data, you can download it here: <a
   * href="/api/v1/stock/usa-spending?fileId=before_2021&token=" target="_blank">Pre-2021</a>, <a
   * href="/api/v1/stock/usa-spending?fileId=2021&token=" target="_blank">2021</a>, <a
   * href="/api/v1/stock/usa-spending?fileId=2022&token=" target="_blank">2022</a>, <a
   * href="/api/v1/stock/usa-spending?fileId=2023&token=" target="_blank">2023</a>, <a
   * href="/api/v1/stock/usa-spending?fileId=2024&token=" target="_blank">2024</a></p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockUsaSpending(
    request: StockOwnership.StockUsaSpendingRequest,
    options?: RequestOptions,
  ): ApiPromise<UsaSpendingResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/usa-spending"),
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
        success: { kind: "json", schema: usaSpendingResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List USPTO patents for companies. Limit to 250 records per API call.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockUsptoPatent(
    request: StockOwnership.StockUsptoPatentRequest,
    options?: RequestOptions,
  ): ApiPromise<UsptoPatentResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/uspto-patent"),
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
        success: { kind: "json", schema: usptoPatentResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of H1-B and Permanent visa applications for companies from the DOL. The data is
   * updated quarterly.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockVisaApplication(
    request: StockOwnership.StockVisaApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<VisaApplicationResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/visa-application"),
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
        success: { kind: "json", schema: visaApplicationResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>This endpoint provides an overall map of public companies' key customers and suppliers. The
   * data offers a deeper look into a company's supply chain and how products are created. The data
   * will help investors manage risk, limit exposure or generate alpha-generating ideas and trading
   * insights.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  supplyChainRelationships(
    request: StockOwnership.SupplyChainRelationshipsRequest,
    options?: RequestOptions,
  ): ApiPromise<SupplyChainRelationships, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/supply-chain"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supplyChainRelationshipsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StockOwnership {
  export type CongressionalTradingRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type FundOwnershipRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /** Limit number of results. Leave empty to get the full list. */
    limit?: number;
  };

  export type InsiderSentimentRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /** From date: 2020-03-15. */
    from: string;
    /** To date: 2020-03-16. */
    to: string;
  };

  export type InsiderTransactionsRequest = {
    /** Symbol of the company: AAPL. Leave this param blank to get the latest transactions. */
    symbol: string;
    /** From date: 2020-03-15. */
    from?: string;
    /** To date: 2020-03-16. */
    to?: string;
  };

  export type InvestmentThemesRequest = {
    /**
     * Investment theme. A full list of themes supported can be found <a target="_blank"
     * href="https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp=sharing">here</a>.
     */
    theme: string;
  };

  export type OwnershipRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /** Limit number of results. Leave empty to get the full list. */
    limit?: number;
  };

  export type SocialSentimentRequest = {
    /** Company symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from?: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to?: string;
  };

  export type StockLobbyingRequest = {
    /** Symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type StockUsaSpendingRequest = {
    /** Symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. Filter for <code>actionDate</code> */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. Filter for <code>actionDate</code> */
    to: string;
  };

  export type StockUsptoPatentRequest = {
    /** Symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type StockVisaApplicationRequest = {
    /** Symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. Filter on the <code>beginDate</code> column. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. Filter on the <code>beginDate</code> column. */
    to: string;
  };

  export type SupplyChainRelationshipsRequest = {
    /** Symbol. */
    symbol: string;
  };
}
