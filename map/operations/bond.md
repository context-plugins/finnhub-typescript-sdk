<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bond — operations

Accessor: `client.bond` · Source: `src/resources/bond.ts` · 4 operations · Request types: namespace `Bond`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bondPrice

- **Signature**: `bondPrice(request: Bond.BondPriceRequest, options?: RequestOptions): ApiPromise<BondCandles, ResponseError>`
- **Wire**: `GET /bond/price`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BondCandles`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bond.BondPriceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `query` | `string` | yes |
| `from` | `query` | `number` | yes |
| `to` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BondCandles` | `bondCandlesSchema` | `src/models/bond-candles.ts` |

### bondProfile

- **Signature**: `bondProfile(request: Bond.BondProfileRequest, options?: RequestOptions): ApiPromise<BondProfile, ResponseError>`
- **Wire**: `GET /bond/profile`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BondProfile`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bond.BondProfileRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `query` | `string` | no |
| `cusip` | `query` | `string` | no |
| `figi` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BondProfile` | `bondProfileSchema` | `src/models/bond-profile.ts` |

### bondTick

- **Signature**: `bondTick(request: Bond.BondTickRequest, options?: RequestOptions): ApiPromise<BondTickData, ResponseError>`
- **Wire**: `GET /bond/tick`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BondTickData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bond.BondTickRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `query` | `string` | yes |
| `date` | `query` | `string` (date) | yes |
| `limit` | `query` | `number` | yes |
| `skip` | `query` | `number` | yes |
| `exchange` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BondTickData` | `bondTickDataSchema` | `src/models/bond-tick-data.ts` |

### bondYieldCurve

- **Signature**: `bondYieldCurve(request: Bond.BondYieldCurveRequest, options?: RequestOptions): ApiPromise<BondYieldCurve, ResponseError>`
- **Wire**: `GET /bond/yield-curve`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BondYieldCurve`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bond.BondYieldCurveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BondYieldCurve` | `bondYieldCurveSchema` | `src/models/bond-yield-curve.ts` |

