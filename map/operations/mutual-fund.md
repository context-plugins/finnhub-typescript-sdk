<!-- Generated file — do not edit; regenerated with the SDK. -->

# MutualFund — operations

Accessor: `client.mutualFund` · Source: `src/resources/mutual-fund.ts` · 6 operations · Request types: namespace `MutualFund`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### mutualFundCountryExposure

- **Signature**: `mutualFundCountryExposure(request: MutualFund.MutualFundCountryExposureRequest, options?: RequestOptions): ApiPromise<MutualFundCountryExposure, ApiError>`
- **Wire**: `GET /mutual-fund/country`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MutualFundCountryExposure`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MutualFund.MutualFundCountryExposureRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MutualFundCountryExposure` | `mutualFundCountryExposureSchema` | `src/models/mutual-fund-country-exposure.ts` |

### mutualFundEet

- **Signature**: `mutualFundEet(request: MutualFund.MutualFundEetRequest, options?: RequestOptions): ApiPromise<MutualFundEet, ApiError>`
- **Wire**: `GET /mutual-fund/eet`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MutualFundEet`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MutualFund.MutualFundEetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MutualFundEet` | `mutualFundEetSchema` | `src/models/mutual-fund-eet.ts` |

### mutualFundEetPai

- **Signature**: `mutualFundEetPai(request: MutualFund.MutualFundEetPaiRequest, options?: RequestOptions): ApiPromise<MutualFundEetPai, ApiError>`
- **Wire**: `GET /mutual-fund/eet-pai`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MutualFundEetPai`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MutualFund.MutualFundEetPaiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MutualFundEetPai` | `mutualFundEetPaiSchema` | `src/models/mutual-fund-eet-pai.ts` |

### mutualFundHoldings

- **Signature**: `mutualFundHoldings(request: MutualFund.MutualFundHoldingsRequest, options?: RequestOptions): ApiPromise<MutualFundHoldings, ApiError>`
- **Wire**: `GET /mutual-fund/holdings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MutualFundHoldings`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MutualFund.MutualFundHoldingsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |
| `skip` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MutualFundHoldings` | `mutualFundHoldingsSchema` | `src/models/mutual-fund-holdings.ts` |

### mutualFundProfile

- **Signature**: `mutualFundProfile(request: MutualFund.MutualFundProfileRequest, options?: RequestOptions): ApiPromise<MutualFundProfile, ApiError>`
- **Wire**: `GET /mutual-fund/profile`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MutualFundProfile`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MutualFund.MutualFundProfileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MutualFundProfile` | `mutualFundProfileSchema` | `src/models/mutual-fund-profile.ts` |

### mutualFundSectorExposure

- **Signature**: `mutualFundSectorExposure(request: MutualFund.MutualFundSectorExposureRequest, options?: RequestOptions): ApiPromise<MutualFundSectorExposure, ApiError>`
- **Wire**: `GET /mutual-fund/sector`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MutualFundSectorExposure`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MutualFund.MutualFundSectorExposureRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MutualFundSectorExposure` | `mutualFundSectorExposureSchema` | `src/models/mutual-fund-sector-exposure.ts` |

