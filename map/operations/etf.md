<!-- Generated file — do not edit; regenerated with the SDK. -->

# Etf — operations

Accessor: `client.etf` · Source: `src/resources/etf.ts` · 5 operations · Request types: namespace `Etf`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### etfsAllocation

- **Signature**: `etfsAllocation(request: Etf.EtfsAllocationRequest, options?: RequestOptions): ApiPromise<EtFsAllocation, ApiError>`
- **Wire**: `GET /etf/allocation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EtFsAllocation`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Etf.EtfsAllocationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtFsAllocation` | `etFsAllocationSchema` | `src/models/et-fs-allocation.ts` |

### etfsCountryExposure

- **Signature**: `etfsCountryExposure(request: Etf.EtfsCountryExposureRequest, options?: RequestOptions): ApiPromise<EtFsCountryExposure, ApiError>`
- **Wire**: `GET /etf/country`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EtFsCountryExposure`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Etf.EtfsCountryExposureRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtFsCountryExposure` | `etFsCountryExposureSchema` | `src/models/et-fs-country-exposure.ts` |

### etfsHoldings

- **Signature**: `etfsHoldings(request: Etf.EtfsHoldingsRequest, options?: RequestOptions): ApiPromise<EtFsHoldings, ApiError>`
- **Wire**: `GET /etf/holdings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EtFsHoldings`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Etf.EtfsHoldingsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |
| `skip` | `query` | `number` | no |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtFsHoldings` | `etFsHoldingsSchema` | `src/models/et-fs-holdings.ts` |

### etfsProfile

- **Signature**: `etfsProfile(request: Etf.EtfsProfileRequest, options?: RequestOptions): ApiPromise<EtFsProfile, ApiError>`
- **Wire**: `GET /etf/profile`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EtFsProfile`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Etf.EtfsProfileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtFsProfile` | `etFsProfileSchema` | `src/models/et-fs-profile.ts` |

### etfsSectorExposure

- **Signature**: `etfsSectorExposure(request: Etf.EtfsSectorExposureRequest, options?: RequestOptions): ApiPromise<EtFsSectorExposure, ApiError>`
- **Wire**: `GET /etf/sector`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EtFsSectorExposure`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Etf.EtfsSectorExposureRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `isin` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtFsSectorExposure` | `etFsSectorExposureSchema` | `src/models/et-fs-sector-exposure.ts` |

