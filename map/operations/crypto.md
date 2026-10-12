<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crypto — operations

Accessor: `client.crypto` · Source: `src/resources/crypto.ts` · 4 operations · Request types: namespace `Crypto`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cryptoCandles

- **Signature**: `cryptoCandles(request: Crypto.CryptoCandlesRequest, options?: RequestOptions): ApiPromise<CryptoCandles, ApiError>`
- **Wire**: `GET /crypto/candle`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CryptoCandles`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Crypto.CryptoCandlesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `resolution` | `query` | `string` | yes |
| `from` | `query` | `number` | yes |
| `to` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CryptoCandles` | `cryptoCandlesSchema` | `src/models/crypto-candles.ts` |

### cryptoExchanges

- **Signature**: `cryptoExchanges(options?: RequestOptions): ApiPromise<string[], ApiError>`
- **Wire**: `GET /crypto/exchange`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### cryptoProfile

- **Signature**: `cryptoProfile(request: Crypto.CryptoProfileRequest, options?: RequestOptions): ApiPromise<CryptoProfile, ApiError>`
- **Wire**: `GET /crypto/profile`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CryptoProfile`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Crypto.CryptoProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CryptoProfile` | `cryptoProfileSchema` | `src/models/crypto-profile.ts` |

### cryptoSymbols

- **Signature**: `cryptoSymbols(request: Crypto.CryptoSymbolsRequest, options?: RequestOptions): ApiPromise<CryptoSymbol[], ApiError>`
- **Wire**: `GET /crypto/symbol`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CryptoSymbol[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Crypto.CryptoSymbolsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exchange` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CryptoSymbol` | `cryptoSymbolSchema` | `src/models/crypto-symbol.ts` |

