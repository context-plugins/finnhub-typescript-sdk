<!-- Generated file — do not edit; regenerated with the SDK. -->

# StockEstimates — operations

Accessor: `client.stockEstimates` · Source: `src/resources/stock-estimates.ts` · 18 operations · Request types: namespace `StockEstimates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### companyCapexEstimates

- **Signature**: `companyCapexEstimates(request: StockEstimates.CompanyCapexEstimatesRequest, options?: RequestOptions): ApiPromise<CapexEstimates, ResponseError>`
- **Wire**: `GET /stock/capex-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CapexEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyCapexEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CapexEstimates` | `capexEstimatesSchema` | `src/models/capex-estimates.ts` |

### companyDpsEstimates

- **Signature**: `companyDpsEstimates(request: StockEstimates.CompanyDpsEstimatesRequest, options?: RequestOptions): ApiPromise<DpsEstimates, ResponseError>`
- **Wire**: `GET /stock/dps-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DpsEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyDpsEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DpsEstimates` | `dpsEstimatesSchema` | `src/models/dps-estimates.ts` |

### companyEarnings

- **Signature**: `companyEarnings(request: StockEstimates.CompanyEarningsRequest, options?: RequestOptions): ApiPromise<EarningResult[], ResponseError>`
- **Wire**: `GET /stock/earnings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EarningResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyEarningsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EarningResult` | `earningResultSchema` | `src/models/earning-result.ts` |

### companyEarningsQualityScore

- **Signature**: `companyEarningsQualityScore(request: StockEstimates.CompanyEarningsQualityScoreRequest, options?: RequestOptions): ApiPromise<CompanyEarningsQualityScore, ResponseError>`
- **Wire**: `GET /stock/earnings-quality-score`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyEarningsQualityScore`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyEarningsQualityScoreRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyEarningsQualityScore` | `companyEarningsQualityScoreSchema` | `src/models/company-earnings-quality-score.ts` |

### companyEbitEstimates

- **Signature**: `companyEbitEstimates(request: StockEstimates.CompanyEbitEstimatesRequest, options?: RequestOptions): ApiPromise<EbitEstimates, ResponseError>`
- **Wire**: `GET /stock/ebit-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EbitEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyEbitEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EbitEstimates` | `ebitEstimatesSchema` | `src/models/ebit-estimates.ts` |

### companyEbitdaEstimates

- **Signature**: `companyEbitdaEstimates(request: StockEstimates.CompanyEbitdaEstimatesRequest, options?: RequestOptions): ApiPromise<EbitdaEstimates, ResponseError>`
- **Wire**: `GET /stock/ebitda-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EbitdaEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyEbitdaEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EbitdaEstimates` | `ebitdaEstimatesSchema` | `src/models/ebitda-estimates.ts` |

### companyEpsEstimates

- **Signature**: `companyEpsEstimates(request: StockEstimates.CompanyEpsEstimatesRequest, options?: RequestOptions): ApiPromise<EarningsEstimates, ResponseError>`
- **Wire**: `GET /stock/eps-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EarningsEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyEpsEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EarningsEstimates` | `earningsEstimatesSchema` | `src/models/earnings-estimates.ts` |

### companyFcfEstimates

- **Signature**: `companyFcfEstimates(request: StockEstimates.CompanyFcfEstimatesRequest, options?: RequestOptions): ApiPromise<FcfEstimates, ResponseError>`
- **Wire**: `GET /stock/fcf-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FcfEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyFcfEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FcfEstimates` | `fcfEstimatesSchema` | `src/models/fcf-estimates.ts` |

### companyGrossIncomeEstimates

- **Signature**: `companyGrossIncomeEstimates(request: StockEstimates.CompanyGrossIncomeEstimatesRequest, options?: RequestOptions): ApiPromise<GrossIncomeEstimates, ResponseError>`
- **Wire**: `GET /stock/gross-income-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GrossIncomeEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyGrossIncomeEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrossIncomeEstimates` | `grossIncomeEstimatesSchema` | `src/models/gross-income-estimates.ts` |

### companyNetIncomeEstimates

- **Signature**: `companyNetIncomeEstimates(request: StockEstimates.CompanyNetIncomeEstimatesRequest, options?: RequestOptions): ApiPromise<NetIncomeEstimates, ResponseError>`
- **Wire**: `GET /stock/net-income-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NetIncomeEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyNetIncomeEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NetIncomeEstimates` | `netIncomeEstimatesSchema` | `src/models/net-income-estimates.ts` |

### companyOcfEstimates

- **Signature**: `companyOcfEstimates(request: StockEstimates.CompanyOcfEstimatesRequest, options?: RequestOptions): ApiPromise<OcfEstimates, ResponseError>`
- **Wire**: `GET /stock/ocf-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OcfEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyOcfEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OcfEstimates` | `ocfEstimatesSchema` | `src/models/ocf-estimates.ts` |

### companyPretaxIncomeEstimates

- **Signature**: `companyPretaxIncomeEstimates(request: StockEstimates.CompanyPretaxIncomeEstimatesRequest, options?: RequestOptions): ApiPromise<PretaxIncomeEstimates, ResponseError>`
- **Wire**: `GET /stock/pretax-income-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PretaxIncomeEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyPretaxIncomeEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PretaxIncomeEstimates` | `pretaxIncomeEstimatesSchema` | `src/models/pretax-income-estimates.ts` |

### companyRevenueEstimates

- **Signature**: `companyRevenueEstimates(request: StockEstimates.CompanyRevenueEstimatesRequest, options?: RequestOptions): ApiPromise<RevenueEstimates, ResponseError>`
- **Wire**: `GET /stock/revenue-estimate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevenueEstimates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.CompanyRevenueEstimatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevenueEstimates` | `revenueEstimatesSchema` | `src/models/revenue-estimates.ts` |

### priceTarget

- **Signature**: `priceTarget(request: StockEstimates.PriceTargetRequest, options?: RequestOptions): ApiPromise<PriceTarget, ResponseError>`
- **Wire**: `GET /stock/price-target`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PriceTarget`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.PriceTargetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceTarget` | `priceTargetSchema` | `src/models/price-target.ts` |

### recommendationTrends

- **Signature**: `recommendationTrends(request: StockEstimates.RecommendationTrendsRequest, options?: RequestOptions): ApiPromise<RecommendationTrend[], ResponseError>`
- **Wire**: `GET /stock/recommendation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecommendationTrend[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.RecommendationTrendsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecommendationTrend` | `recommendationTrendSchema` | `src/models/recommendation-trend.ts` |

### revenueBreakdown

- **Signature**: `revenueBreakdown(request: StockEstimates.RevenueBreakdownRequest, options?: RequestOptions): ApiPromise<RevenueBreakdown, ResponseError>`
- **Wire**: `GET /stock/revenue-breakdown`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevenueBreakdown`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.RevenueBreakdownRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `cik` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevenueBreakdown` | `revenueBreakdownSchema` | `src/models/revenue-breakdown.ts` |

### revenueBreakdown2

- **Signature**: `revenueBreakdown2(request: StockEstimates.RevenueBreakdown2Request, options?: RequestOptions): ApiPromise<RevenueBreakdown2, ResponseError>`
- **Wire**: `GET /stock/revenue-breakdown2`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevenueBreakdown2`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.RevenueBreakdown2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevenueBreakdown2` | `revenueBreakdown2Schema` | `src/models/revenue-breakdown2.ts` |

### upgradeDowngrade

- **Signature**: `upgradeDowngrade(request: StockEstimates.UpgradeDowngradeRequest, options?: RequestOptions): ApiPromise<UpgradeDowngrade[], ResponseError>`
- **Wire**: `GET /stock/upgrade-downgrade`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UpgradeDowngrade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockEstimates.UpgradeDowngradeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpgradeDowngrade` | `upgradeDowngradeSchema` | `src/models/upgrade-downgrade.ts` |

