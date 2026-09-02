<!-- Generated file — do not edit; regenerated with the SDK. -->

# StockPrices — operations

Accessor: `client.stockPrices` · Source: `src/resources/stock-prices.ts` · 13 operations · Request types: namespace `StockPrices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### companyPeers

- **Signature**: `companyPeers(request: StockPrices.CompanyPeersRequest, options?: RequestOptions): ApiPromise<string[], ResponseError>`
- **Wire**: `GET /stock/peers`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.CompanyPeersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `grouping` | `query` | `string` | no |

### historicalMarketCap

- **Signature**: `historicalMarketCap(request: StockPrices.HistoricalMarketCapRequest, options?: RequestOptions): ApiPromise<HistoricalMarketCapData, ResponseError>`
- **Wire**: `GET /stock/historical-market-cap`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoricalMarketCapData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.HistoricalMarketCapRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HistoricalMarketCapData` | `historicalMarketCapDataSchema` | `src/models/historical-market-cap-data.ts` |

### marketHoliday

- **Signature**: `marketHoliday(request: StockPrices.MarketHolidayRequest, options?: RequestOptions): ApiPromise<MarketHoliday, ResponseError>`
- **Wire**: `GET /stock/market-holiday`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarketHoliday`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.MarketHolidayRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exchange` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MarketHoliday` | `marketHolidaySchema` | `src/models/market-holiday.ts` |

### marketStatus

- **Signature**: `marketStatus(request: StockPrices.MarketStatusRequest, options?: RequestOptions): ApiPromise<MarketStatus, ResponseError>`
- **Wire**: `GET /stock/market-status`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarketStatus`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.MarketStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exchange` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MarketStatus` | `marketStatusSchema` | `src/models/market-status.ts` |

### priceMetrics

- **Signature**: `priceMetrics(request: StockPrices.PriceMetricsRequest, options?: RequestOptions): ApiPromise<PriceMetrics, ResponseError>`
- **Wire**: `GET /stock/price-metric`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PriceMetrics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.PriceMetricsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceMetrics` | `priceMetricsSchema` | `src/models/price-metrics.ts` |

### stockBasicDividends

- **Signature**: `stockBasicDividends(request: StockPrices.StockBasicDividendsRequest, options?: RequestOptions): ApiPromise<Dividends2, ResponseError>`
- **Wire**: `GET /stock/dividend2`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Dividends2`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockBasicDividendsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dividends2` | `dividends2Schema` | `src/models/dividends2.ts` |

### stockBidask

- **Signature**: `stockBidask(request: StockPrices.StockBidaskRequest, options?: RequestOptions): ApiPromise<LastBidAsk, ResponseError>`
- **Wire**: `GET /stock/bidask`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LastBidAsk`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockBidaskRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LastBidAsk` | `lastBidAskSchema` | `src/models/last-bid-ask.ts` |

### stockCandles

- **Signature**: `stockCandles(request: StockPrices.StockCandlesRequest, options?: RequestOptions): ApiPromise<StockCandles, ResponseError>`
- **Wire**: `GET /stock/candle`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StockCandles`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockCandlesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `resolution` | `query` | `string` | yes |
| `from` | `query` | `number` | yes |
| `to` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StockCandles` | `stockCandlesSchema` | `src/models/stock-candles.ts` |

### stockDividends

- **Signature**: `stockDividends(request: StockPrices.StockDividendsRequest, options?: RequestOptions): ApiPromise<Dividends[], ResponseError>`
- **Wire**: `GET /stock/dividend`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Dividends[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockDividendsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dividends` | `dividendsSchema` | `src/models/dividends.ts` |

### stockNbbo

- **Signature**: `stockNbbo(request: StockPrices.StockNbboRequest, options?: RequestOptions): ApiPromise<HistoricalNbbo, ResponseError>`
- **Wire**: `GET /stock/bbo`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoricalNbbo`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockNbboRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `date` | `query` | `string` (date) | yes |
| `limit` | `query` | `number` | yes |
| `skip` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HistoricalNbbo` | `historicalNbboSchema` | `src/models/historical-nbbo.ts` |

### stockSplits

- **Signature**: `stockSplits(request: StockPrices.StockSplitsRequest, options?: RequestOptions): ApiPromise<Split[], ResponseError>`
- **Wire**: `GET /stock/split`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Split[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockSplitsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Split` | `splitSchema` | `src/models/split.ts` |

### stockSymbols

- **Signature**: `stockSymbols(request: StockPrices.StockSymbolsRequest, options?: RequestOptions): ApiPromise<StockSymbol[], ResponseError>`
- **Wire**: `GET /stock/symbol`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StockSymbol[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockSymbolsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exchange` | `query` | `string` | yes |
| `mic` | `query` | `string` | no |
| `securityType` | `query` | `string` | no |
| `currency` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StockSymbol` | `stockSymbolSchema` | `src/models/stock-symbol.ts` |

### stockTick

- **Signature**: `stockTick(request: StockPrices.StockTickRequest, options?: RequestOptions): ApiPromise<TickData, ResponseError>`
- **Wire**: `GET /stock/tick`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TickData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockPrices.StockTickRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `date` | `query` | `string` (date) | yes |
| `limit` | `query` | `number` | yes |
| `skip` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TickData` | `tickDataSchema` | `src/models/tick-data.ts` |

