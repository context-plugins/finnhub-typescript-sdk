import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { aggregateIndicatorsSchema, type AggregateIndicators } from "../models/aggregate-indicators.js";
import { patternRecognitionSchema, type PatternRecognition } from "../models/pattern-recognition.js";
import { supportResistanceSchema, type SupportResistance } from "../models/support-resistance.js";
import type { Servers } from "../servers.js";

export class Scan {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  aggregateIndicator(
    request: Scan.AggregateIndicatorRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregateIndicators, ResponseError> {
    return this.#rawClient.execute<AggregateIndicators, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/scan/technical-indicator"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aggregateIndicatorsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  patternRecognition(
    request: Scan.PatternRecognitionRequest,
    options?: RequestOptions,
  ): ApiPromise<PatternRecognition, ResponseError> {
    return this.#rawClient.execute<PatternRecognition, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/scan/pattern"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: patternRecognitionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  supportResistance(
    request: Scan.SupportResistanceRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportResistance, ResponseError> {
    return this.#rawClient.execute<SupportResistance, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/scan/support-resistance"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportResistanceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Scan {
  export type AggregateIndicatorRequest = {
    symbol: string;
    resolution: string;
  };

  export type PatternRecognitionRequest = {
    symbol: string;
    resolution: string;
  };

  export type SupportResistanceRequest = {
    symbol: string;
    resolution: string;
  };
}
