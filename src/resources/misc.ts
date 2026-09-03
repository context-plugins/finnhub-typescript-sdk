import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { aiChatBodySchema, type AiChatBody } from "../models/ai-chat-body.js";
import { aiChatResponseSchema, type AiChatResponse } from "../models/ai-chat-response.js";
import {
  airlinePriceIndexDataSchema,
  type AirlinePriceIndexData,
} from "../models/airline-price-index-data.js";
import { bankBranchResSchema, type BankBranchRes } from "../models/bank-branch-res.js";
import { countryMetadataSchema, type CountryMetadata } from "../models/country-metadata.js";
import { covidInfoSchema, type CovidInfo } from "../models/covid-info.js";
import { fdaComitteeMeetingSchema, type FdaComitteeMeeting } from "../models/fda-comittee-meeting.js";
import { quoteSchema, type Quote } from "../models/quote.js";
import { sectorMetricSchema, type SectorMetric } from "../models/sector-metric.js";
import { symbolLookupSchema, type SymbolLookup } from "../models/symbol-lookup.js";
import type { Servers } from "../servers.js";

export class Misc {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  aiChat(request: Misc.AiChatRequest, options?: RequestOptions): ApiPromise<AiChatResponse, ResponseError> {
    return this.#rawClient.execute<AiChatResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/ai-chat"),
        auth: this.#auth.apiKey,
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => aiChatBodySchema)) },
      },
      {
        success: { kind: "json", schema: aiChatResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  airlinePriceIndex(
    request: Misc.AirlinePriceIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<AirlinePriceIndexData, ResponseError> {
    return this.#rawClient.execute<AirlinePriceIndexData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/airline/price-index"),
        auth: this.#auth.apiKey,
        query: [
          { name: "airline", value: request.airline, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: airlinePriceIndexDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bankBranch(
    request: Misc.BankBranchRequest,
    options?: RequestOptions,
  ): ApiPromise<BankBranchRes, ResponseError> {
    return this.#rawClient.execute<BankBranchRes, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/bank-branch"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.record(s.string(), s.unknown()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bankBranchResSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  country(options?: RequestOptions): ApiPromise<CountryMetadata[], ResponseError> {
    return this.#rawClient.execute<CountryMetadata[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/country"),
        auth: this.#auth.apiKey,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => countryMetadataSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  covid19(options?: RequestOptions): ApiPromise<CovidInfo[], ResponseError> {
    return this.#rawClient.execute<CovidInfo[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/covid19/us"),
        auth: this.#auth.apiKey,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => covidInfoSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fdaCommitteeMeetingCalendar(options?: RequestOptions): ApiPromise<FdaComitteeMeeting[], ResponseError> {
    return this.#rawClient.execute<FdaComitteeMeeting[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/fda-advisory-committee-calendar"),
        auth: this.#auth.apiKey,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fdaComitteeMeetingSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  quote(request: Misc.QuoteRequest, options?: RequestOptions): ApiPromise<Quote, ResponseError> {
    return this.#rawClient.execute<Quote, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/quote"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: quoteSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  sectorMetric(
    request: Misc.SectorMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<SectorMetric, ResponseError> {
    return this.#rawClient.execute<SectorMetric, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/sector/metrics"),
        auth: this.#auth.apiKey,
        query: [{ name: "region", value: request.region, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sectorMetricSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  symbolSearch(
    request: Misc.SymbolSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SymbolLookup, ResponseError> {
    return this.#rawClient.execute<SymbolLookup, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/search"),
        auth: this.#auth.apiKey,
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: symbolLookupSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  technicalIndicator(
    request: Misc.TechnicalIndicatorRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/indicator"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
          { name: "from", value: request.from, schema: s.number() },
          { name: "to", value: request.to, schema: s.number() },
          { name: "indicator", value: request.indicator, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Misc {
  export type AiChatRequest = {
    body?: AiChatBody;
  };

  export type AirlinePriceIndexRequest = {
    airline: string;
    from: string;
    to: string;
  };

  export type BankBranchRequest = {
    symbol: Record<string, unknown>;
  };

  export type QuoteRequest = {
    symbol: string;
  };

  export type SectorMetricRequest = {
    region: string;
  };

  export type SymbolSearchRequest = {
    q: string;
    exchange?: string;
  };

  export type TechnicalIndicatorRequest = {
    symbol: string;
    resolution: string;
    from: number;
    to: number;
    indicator: string;
  };
}
