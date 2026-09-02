import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { companyNewsSchema, type CompanyNews } from "../models/company-news.js";
import { marketNewsSchema, type MarketNews } from "../models/market-news.js";
import { newsSentimentSchema, type NewsSentiment } from "../models/news-sentiment.js";
import { pressReleaseSchema, type PressRelease } from "../models/press-release.js";
import type { Servers } from "../servers.js";

export class News {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  companyNews(
    request: News.CompanyNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyNews[], ResponseError> {
    return this.#rawClient.execute<CompanyNews[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/company-news"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => companyNewsSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  marketNews(
    request: News.MarketNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<MarketNews[], ResponseError> {
    return this.#rawClient.execute<MarketNews[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/news"),
        auth: this.#auth.apiKey,
        query: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "minId", value: request.minId, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marketNewsSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  newsSentiment(
    request: News.NewsSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<NewsSentiment, ResponseError> {
    return this.#rawClient.execute<NewsSentiment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/news-sentiment"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsSentimentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  pressReleases(
    request: News.PressReleasesRequest,
    options?: RequestOptions,
  ): ApiPromise<PressRelease, ResponseError> {
    return this.#rawClient.execute<PressRelease, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/press-releases"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pressReleaseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace News {
  export type CompanyNewsRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type MarketNewsRequest = {
    category: string;
    minId?: number;
  };

  export type NewsSentimentRequest = {
    symbol: string;
  };

  export type PressReleasesRequest = {
    symbol: string;
    from?: string;
    to?: string;
  };
}
