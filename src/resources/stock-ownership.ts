import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

export class StockOwnership {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  congressionalTrading(
    request: StockOwnership.CongressionalTradingRequest,
    options?: RequestOptions,
  ): ApiPromise<CongressionalTrading, ResponseError> {
    return this.#rawClient.execute<CongressionalTrading, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/congressional-trading"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: congressionalTradingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fundOwnership(
    request: StockOwnership.FundOwnershipRequest,
    options?: RequestOptions,
  ): ApiPromise<FundOwnership, ResponseError> {
    return this.#rawClient.execute<FundOwnership, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/fund-ownership"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundOwnershipSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  insiderSentiment(
    request: StockOwnership.InsiderSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<InsiderSentiments, ResponseError> {
    return this.#rawClient.execute<InsiderSentiments, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/insider-sentiment"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insiderSentimentsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  insiderTransactions(
    request: StockOwnership.InsiderTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsiderTransactions, ResponseError> {
    return this.#rawClient.execute<InsiderTransactions, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/insider-transactions"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insiderTransactionsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  investmentThemes(
    request: StockOwnership.InvestmentThemesRequest,
    options?: RequestOptions,
  ): ApiPromise<InvestmentThemes, ResponseError> {
    return this.#rawClient.execute<InvestmentThemes, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/investment-theme"),
        auth: this.#auth.apiKey,
        query: [{ name: "theme", value: request.theme, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: investmentThemesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  ownership(
    request: StockOwnership.OwnershipRequest,
    options?: RequestOptions,
  ): ApiPromise<Ownership, ResponseError> {
    return this.#rawClient.execute<Ownership, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/ownership"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ownershipSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  socialSentiment(
    request: StockOwnership.SocialSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<SocialSentiment, ResponseError> {
    return this.#rawClient.execute<SocialSentiment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/social-sentiment"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: socialSentimentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockLobbying(
    request: StockOwnership.StockLobbyingRequest,
    options?: RequestOptions,
  ): ApiPromise<LobbyingResult, ResponseError> {
    return this.#rawClient.execute<LobbyingResult, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/lobbying"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lobbyingResultSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockUsaSpending(
    request: StockOwnership.StockUsaSpendingRequest,
    options?: RequestOptions,
  ): ApiPromise<UsaSpendingResult, ResponseError> {
    return this.#rawClient.execute<UsaSpendingResult, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/usa-spending"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usaSpendingResultSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockUsptoPatent(
    request: StockOwnership.StockUsptoPatentRequest,
    options?: RequestOptions,
  ): ApiPromise<UsptoPatentResult, ResponseError> {
    return this.#rawClient.execute<UsptoPatentResult, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/uspto-patent"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usptoPatentResultSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockVisaApplication(
    request: StockOwnership.StockVisaApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<VisaApplicationResult, ResponseError> {
    return this.#rawClient.execute<VisaApplicationResult, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/visa-application"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: visaApplicationResultSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  supplyChainRelationships(
    request: StockOwnership.SupplyChainRelationshipsRequest,
    options?: RequestOptions,
  ): ApiPromise<SupplyChainRelationships, ResponseError> {
    return this.#rawClient.execute<SupplyChainRelationships, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/supply-chain"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supplyChainRelationshipsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StockOwnership {
  export type CongressionalTradingRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type FundOwnershipRequest = {
    symbol: string;
    limit?: number;
  };

  export type InsiderSentimentRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type InsiderTransactionsRequest = {
    symbol: string;
    from?: string;
    to?: string;
  };

  export type InvestmentThemesRequest = {
    theme: string;
  };

  export type OwnershipRequest = {
    symbol: string;
    limit?: number;
  };

  export type SocialSentimentRequest = {
    symbol: string;
    from?: string;
    to?: string;
  };

  export type StockLobbyingRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type StockUsaSpendingRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type StockUsptoPatentRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type StockVisaApplicationRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type SupplyChainRelationshipsRequest = {
    symbol: string;
  };
}
