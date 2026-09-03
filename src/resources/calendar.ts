import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { earningsCalendarSchema, type EarningsCalendar } from "../models/earnings-calendar.js";
import { economicCalendarSchema, type EconomicCalendar } from "../models/economic-calendar.js";
import { ipoCalendarSchema, type IpoCalendar } from "../models/ipo-calendar.js";
import type { Servers } from "../servers.js";

export class Calendar {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  earningsCalendar(
    request: Calendar.EarningsCalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCalendar, ResponseError> {
    return this.#rawClient.execute<EarningsCalendar, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/calendar/earnings"),
        auth: this.#auth.apiKey,
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "international", value: request.international, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCalendarSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  economicCalendar(
    request: Calendar.EconomicCalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<EconomicCalendar, ResponseError> {
    return this.#rawClient.execute<EconomicCalendar, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/calendar/economic"),
        auth: this.#auth.apiKey,
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: economicCalendarSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  ipoCalendar(
    request: Calendar.IpoCalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<IpoCalendar, ResponseError> {
    return this.#rawClient.execute<IpoCalendar, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/calendar/ipo"),
        auth: this.#auth.apiKey,
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipoCalendarSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Calendar {
  export type EarningsCalendarRequest = {
    from?: string;
    to?: string;
    symbol?: string;
    international?: boolean;
  };

  export type EconomicCalendarRequest = {
    from?: string;
    to?: string;
  };

  export type IpoCalendarRequest = {
    from: string;
    to: string;
  };
}
