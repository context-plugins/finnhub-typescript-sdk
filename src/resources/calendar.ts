import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { earningsCalendarSchema, type EarningsCalendar } from "../models/earnings-calendar.js";
import { economicCalendarSchema, type EconomicCalendar } from "../models/economic-calendar.js";
import { ipoCalendarSchema, type IpoCalendar } from "../models/ipo-calendar.js";
import type { Servers } from "../servers.js";

/**
 * Earnings and IPO calendars
 */
export class Calendar {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get historical and coming earnings release. EPS and Revenue in this endpoint are non-GAAP,
   * which means they are adjusted to exclude some one-time or unusual items. This is the same data
   * investors usually react to and talked about on the media. Estimates are sourced from both
   * sell-side and buy-side analysts.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  earningsCalendar(
    request: Calendar.EarningsCalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCalendar, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/calendar/earnings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "international", value: request.international, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCalendarSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get recent and upcoming economic releases.</p><p>Historical events and surprises are
   * available for Enterprise clients.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  economicCalendar(
    request: Calendar.EconomicCalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<EconomicCalendar, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/calendar/economic"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: economicCalendarSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get recent and upcoming IPO.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ipoCalendar(
    request: Calendar.IpoCalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<IpoCalendar, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/calendar/ipo"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipoCalendarSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Calendar {
  export type EarningsCalendarRequest = {
    /** From date: 2020-03-15. */
    from?: string;
    /** To date: 2020-03-16. */
    to?: string;
    /** Filter by symbol: AAPL. */
    symbol?: string;
    /**
     * Set to <code>true</code> to include international markets. Default value is
     * <code>false</code>
     */
    international?: boolean;
  };

  export type EconomicCalendarRequest = {
    /** From date <code>YYYY-MM-DD</code>. */
    from?: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to?: string;
  };

  export type IpoCalendarRequest = {
    /** From date: 2020-03-15. */
    from: string;
    /** To date: 2020-03-16. */
    to: string;
  };
}
