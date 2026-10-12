<!-- Generated file — do not edit; regenerated with the SDK. -->

# StockOwnership — operations

Accessor: `client.stockOwnership` · Source: `src/resources/stock-ownership.ts` · 12 operations · Request types: namespace `StockOwnership`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### congressionalTrading

- **Signature**: `congressionalTrading(request: StockOwnership.CongressionalTradingRequest, options?: RequestOptions): ApiPromise<CongressionalTrading, ApiError>`
- **Wire**: `GET /stock/congressional-trading`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CongressionalTrading`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.CongressionalTradingRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CongressionalTrading` | `congressionalTradingSchema` | `src/models/congressional-trading.ts` |

### fundOwnership

- **Signature**: `fundOwnership(request: StockOwnership.FundOwnershipRequest, options?: RequestOptions): ApiPromise<FundOwnership, ApiError>`
- **Wire**: `GET /stock/fund-ownership`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundOwnership`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.FundOwnershipRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundOwnership` | `fundOwnershipSchema` | `src/models/fund-ownership.ts` |

### insiderSentiment

- **Signature**: `insiderSentiment(request: StockOwnership.InsiderSentimentRequest, options?: RequestOptions): ApiPromise<InsiderSentiments, ApiError>`
- **Wire**: `GET /stock/insider-sentiment`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsiderSentiments`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.InsiderSentimentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsiderSentiments` | `insiderSentimentsSchema` | `src/models/insider-sentiments.ts` |

### insiderTransactions

- **Signature**: `insiderTransactions(request: StockOwnership.InsiderTransactionsRequest, options?: RequestOptions): ApiPromise<InsiderTransactions, ApiError>`
- **Wire**: `GET /stock/insider-transactions`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsiderTransactions`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.InsiderTransactionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsiderTransactions` | `insiderTransactionsSchema` | `src/models/insider-transactions.ts` |

### investmentThemes

- **Signature**: `investmentThemes(request: StockOwnership.InvestmentThemesRequest, options?: RequestOptions): ApiPromise<InvestmentThemes, ApiError>`
- **Wire**: `GET /stock/investment-theme`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvestmentThemes`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.InvestmentThemesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `theme` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvestmentThemes` | `investmentThemesSchema` | `src/models/investment-themes.ts` |

### ownership

- **Signature**: `ownership(request: StockOwnership.OwnershipRequest, options?: RequestOptions): ApiPromise<Ownership, ApiError>`
- **Wire**: `GET /stock/ownership`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ownership`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.OwnershipRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ownership` | `ownershipSchema` | `src/models/ownership.ts` |

### socialSentiment

- **Signature**: `socialSentiment(request: StockOwnership.SocialSentimentRequest, options?: RequestOptions): ApiPromise<SocialSentiment, ApiError>`
- **Wire**: `GET /stock/social-sentiment`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SocialSentiment`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.SocialSentimentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SocialSentiment` | `socialSentimentSchema` | `src/models/social-sentiment.ts` |

### stockLobbying

- **Signature**: `stockLobbying(request: StockOwnership.StockLobbyingRequest, options?: RequestOptions): ApiPromise<LobbyingResult, ApiError>`
- **Wire**: `GET /stock/lobbying`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LobbyingResult`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.StockLobbyingRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LobbyingResult` | `lobbyingResultSchema` | `src/models/lobbying-result.ts` |

### stockUsaSpending

- **Signature**: `stockUsaSpending(request: StockOwnership.StockUsaSpendingRequest, options?: RequestOptions): ApiPromise<UsaSpendingResult, ApiError>`
- **Wire**: `GET /stock/usa-spending`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsaSpendingResult`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.StockUsaSpendingRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsaSpendingResult` | `usaSpendingResultSchema` | `src/models/usa-spending-result.ts` |

### stockUsptoPatent

- **Signature**: `stockUsptoPatent(request: StockOwnership.StockUsptoPatentRequest, options?: RequestOptions): ApiPromise<UsptoPatentResult, ApiError>`
- **Wire**: `GET /stock/uspto-patent`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsptoPatentResult`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.StockUsptoPatentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsptoPatentResult` | `usptoPatentResultSchema` | `src/models/uspto-patent-result.ts` |

### stockVisaApplication

- **Signature**: `stockVisaApplication(request: StockOwnership.StockVisaApplicationRequest, options?: RequestOptions): ApiPromise<VisaApplicationResult, ApiError>`
- **Wire**: `GET /stock/visa-application`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VisaApplicationResult`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.StockVisaApplicationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisaApplicationResult` | `visaApplicationResultSchema` | `src/models/visa-application-result.ts` |

### supplyChainRelationships

- **Signature**: `supplyChainRelationships(request: StockOwnership.SupplyChainRelationshipsRequest, options?: RequestOptions): ApiPromise<SupplyChainRelationships, ApiError>`
- **Wire**: `GET /stock/supply-chain`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupplyChainRelationships`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockOwnership.SupplyChainRelationshipsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupplyChainRelationships` | `supplyChainRelationshipsSchema` | `src/models/supply-chain-relationships.ts` |

