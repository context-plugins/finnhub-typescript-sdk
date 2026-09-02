<!-- Generated file — do not edit; regenerated with the SDK. -->

# StockFundamentals — operations

Accessor: `client.stockFundamentals` · Source: `src/resources/stock-fundamentals.ts` · 18 operations · Request types: namespace `StockFundamentals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### companyBasicFinancials

- **Signature**: `companyBasicFinancials(request: StockFundamentals.CompanyBasicFinancialsRequest, options?: RequestOptions): ApiPromise<BasicFinancials, ResponseError>`
- **Wire**: `GET /stock/metric`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BasicFinancials`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.CompanyBasicFinancialsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `metric` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BasicFinancials` | `basicFinancialsSchema` | `src/models/basic-financials.ts` |

### companyEsgScore

- **Signature**: `companyEsgScore(request: StockFundamentals.CompanyEsgScoreRequest, options?: RequestOptions): ApiPromise<CompanyEsg, ResponseError>`
- **Wire**: `GET /stock/esg`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyEsg`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.CompanyEsgScoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyEsg` | `companyEsgSchema` | `src/models/company-esg.ts` |

### companyExecutive

- **Signature**: `companyExecutive(request: StockFundamentals.CompanyExecutiveRequest, options?: RequestOptions): ApiPromise<CompanyExecutive, ResponseError>`
- **Wire**: `GET /stock/executive`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyExecutive`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.CompanyExecutiveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyExecutive` | `companyExecutiveSchema` | `src/models/company-executive.ts` |

### companyHistoricalEsgScore

- **Signature**: `companyHistoricalEsgScore(request: StockFundamentals.CompanyHistoricalEsgScoreRequest, options?: RequestOptions): ApiPromise<HistoricalCompanyEsg, ResponseError>`
- **Wire**: `GET /stock/historical-esg`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoricalCompanyEsg`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.CompanyHistoricalEsgScoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HistoricalCompanyEsg` | `historicalCompanyEsgSchema` | `src/models/historical-company-esg.ts` |

### companyProfile

- **Signature**: `companyProfile(request: StockFundamentals.CompanyProfileRequest, options?: RequestOptions): ApiPromise<CompanyProfile, ResponseError>`
- **Wire**: `GET /stock/profile`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyProfile`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.CompanyProfileRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |
| `cusip` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyProfile` | `companyProfileSchema` | `src/models/company-profile.ts` |

### companyProfile2

- **Signature**: `companyProfile2(request: StockFundamentals.CompanyProfile2Request, options?: RequestOptions): ApiPromise<CompanyProfile2, ResponseError>`
- **Wire**: `GET /stock/profile2`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyProfile2`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.CompanyProfile2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |
| `cusip` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyProfile2` | `companyProfile2Schema` | `src/models/company-profile2.ts` |

### earningsCallLive

- **Signature**: `earningsCallLive(request: StockFundamentals.EarningsCallLiveRequest, options?: RequestOptions): ApiPromise<EarningsCallLive, ResponseError>`
- **Wire**: `GET /stock/earnings-call-live`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EarningsCallLive`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.EarningsCallLiveRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |
| `symbol` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EarningsCallLive` | `earningsCallLiveSchema` | `src/models/earnings-call-live.ts` |

### filings

- **Signature**: `filings(request: StockFundamentals.FilingsRequest, options?: RequestOptions): ApiPromise<Filing[], ResponseError>`
- **Wire**: `GET /stock/filings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Filing[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.FilingsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `cik` | `query` | `string` | no |
| `accessNumber` | `query` | `string` | no |
| `form` | `query` | `string` | no |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filing` | `filingSchema` | `src/models/filing.ts` |

### filingsSentiment

- **Signature**: `filingsSentiment(request: StockFundamentals.FilingsSentimentRequest, options?: RequestOptions): ApiPromise<SecSentimentAnalysis, ResponseError>`
- **Wire**: `GET /stock/filings-sentiment`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SecSentimentAnalysis`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.FilingsSentimentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accessNumber` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecSentimentAnalysis` | `secSentimentAnalysisSchema` | `src/models/sec-sentiment-analysis.ts` |

### financials

- **Signature**: `financials(request: StockFundamentals.FinancialsRequest, options?: RequestOptions): ApiPromise<FinancialStatements, ResponseError>`
- **Wire**: `GET /stock/financials`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FinancialStatements`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.FinancialsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `statement` | `query` | `string` | yes |
| `freq` | `query` | `string` | yes |
| `preliminary` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FinancialStatements` | `financialStatementsSchema` | `src/models/financial-statements.ts` |

### financialsReported

- **Signature**: `financialsReported(request: StockFundamentals.FinancialsReportedRequest, options?: RequestOptions): ApiPromise<FinancialsAsReported, ResponseError>`
- **Wire**: `GET /stock/financials-reported`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FinancialsAsReported`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.FinancialsReportedRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `cik` | `query` | `string` | no |
| `accessNumber` | `query` | `string` | no |
| `freq` | `query` | `string` | no |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FinancialsAsReported` | `financialsAsReportedSchema` | `src/models/financials-as-reported.ts` |

### historicalEmployeeCount

- **Signature**: `historicalEmployeeCount(request: StockFundamentals.HistoricalEmployeeCountRequest, options?: RequestOptions): ApiPromise<HistoricalEmployeeCount, ResponseError>`
- **Wire**: `GET /stock/historical-employee-count`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoricalEmployeeCount`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.HistoricalEmployeeCountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HistoricalEmployeeCount` | `historicalEmployeeCountSchema` | `src/models/historical-employee-count.ts` |

### internationalFilings

- **Signature**: `internationalFilings(request: StockFundamentals.InternationalFilingsRequest, options?: RequestOptions): ApiPromise<InternationalFiling[], ResponseError>`
- **Wire**: `GET /stock/international-filings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InternationalFiling[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.InternationalFilingsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `country` | `query` | `string` | no |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InternationalFiling` | `internationalFilingSchema` | `src/models/international-filing.ts` |

### newsroom

- **Signature**: `newsroom(request: StockFundamentals.NewsroomRequest, options?: RequestOptions): ApiPromise<Newsroom, ResponseError>`
- **Wire**: `GET /stock/newsroom`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Newsroom`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.NewsroomRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Newsroom` | `newsroomSchema` | `src/models/newsroom.ts` |

### similarityIndex

- **Signature**: `similarityIndex(request: StockFundamentals.SimilarityIndexRequest, options?: RequestOptions): ApiPromise<SimilarityIndex, ResponseError>`
- **Wire**: `GET /stock/similarity-index`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimilarityIndex`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.SimilarityIndexRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `cik` | `query` | `string` | no |
| `freq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimilarityIndex` | `similarityIndexSchema` | `src/models/similarity-index.ts` |

### stockPresentation

- **Signature**: `stockPresentation(request: StockFundamentals.StockPresentationRequest, options?: RequestOptions): ApiPromise<StockPresentation, ResponseError>`
- **Wire**: `GET /stock/presentation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StockPresentation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.StockPresentationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StockPresentation` | `stockPresentationSchema` | `src/models/stock-presentation.ts` |

### transcripts

- **Signature**: `transcripts(request: StockFundamentals.TranscriptsRequest, options?: RequestOptions): ApiPromise<EarningsCallTranscripts, ResponseError>`
- **Wire**: `GET /stock/transcripts`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EarningsCallTranscripts`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.TranscriptsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EarningsCallTranscripts` | `earningsCallTranscriptsSchema` | `src/models/earnings-call-transcripts.ts` |

### transcriptsList

- **Signature**: `transcriptsList(request: StockFundamentals.TranscriptsListRequest, options?: RequestOptions): ApiPromise<EarningsCallTranscriptsList, ResponseError>`
- **Wire**: `GET /stock/transcripts/list`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EarningsCallTranscriptsList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StockFundamentals.TranscriptsListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EarningsCallTranscriptsList` | `earningsCallTranscriptsListSchema` | `src/models/earnings-call-transcripts-list.ts` |

