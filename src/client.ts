import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
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

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options);
  }

  get bond(): Bond {
    return (this.#bond ??= new Bond(this.#rawClient, this.#servers, this.#auth));
  }

  get calendar(): Calendar {
    return (this.#calendar ??= new Calendar(this.#rawClient, this.#servers, this.#auth));
  }

  get corporateActions(): CorporateActions {
    return (this.#corporateActions ??= new CorporateActions(this.#rawClient, this.#servers, this.#auth));
  }

  get crypto(): Crypto {
    return (this.#crypto ??= new Crypto(this.#rawClient, this.#servers, this.#auth));
  }

  get economic(): Economic {
    return (this.#economic ??= new Economic(this.#rawClient, this.#servers, this.#auth));
  }

  get etf(): Etf {
    return (this.#etf ??= new Etf(this.#rawClient, this.#servers, this.#auth));
  }

  get forex(): Forex {
    return (this.#forex ??= new Forex(this.#rawClient, this.#servers, this.#auth));
  }

  get globalFilings(): GlobalFilings {
    return (this.#globalFilings ??= new GlobalFilings(this.#rawClient, this.#servers, this.#auth));
  }

  get index(): Index {
    return (this.#index ??= new Index(this.#rawClient, this.#servers, this.#auth));
  }

  get institutional(): Institutional {
    return (this.#institutional ??= new Institutional(this.#rawClient, this.#servers, this.#auth));
  }

  get misc(): Misc {
    return (this.#misc ??= new Misc(this.#rawClient, this.#servers, this.#auth));
  }

  get mutualFund(): MutualFund {
    return (this.#mutualFund ??= new MutualFund(this.#rawClient, this.#servers, this.#auth));
  }

  get news(): News {
    return (this.#news ??= new News(this.#rawClient, this.#servers, this.#auth));
  }

  get scan(): Scan {
    return (this.#scan ??= new Scan(this.#rawClient, this.#servers, this.#auth));
  }

  get stockEstimates(): StockEstimates {
    return (this.#stockEstimates ??= new StockEstimates(this.#rawClient, this.#servers, this.#auth));
  }

  get stockFundamentals(): StockFundamentals {
    return (this.#stockFundamentals ??= new StockFundamentals(this.#rawClient, this.#servers, this.#auth));
  }

  get stockOwnership(): StockOwnership {
    return (this.#stockOwnership ??= new StockOwnership(this.#rawClient, this.#servers, this.#auth));
  }

  get stockPrices(): StockPrices {
    return (this.#stockPrices ??= new StockPrices(this.#rawClient, this.#servers, this.#auth));
  }
}
