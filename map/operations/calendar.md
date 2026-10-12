<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calendar — operations

Accessor: `client.calendar` · Source: `src/resources/calendar.ts` · 3 operations · Request types: namespace `Calendar`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### earningsCalendar

- **Signature**: `earningsCalendar(request: Calendar.EarningsCalendarRequest, options?: RequestOptions): ApiPromise<EarningsCalendar, ApiError>`
- **Wire**: `GET /calendar/earnings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EarningsCalendar`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Calendar.EarningsCalendarRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |
| `symbol` | `query` | `string` | no |
| `international` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EarningsCalendar` | `earningsCalendarSchema` | `src/models/earnings-calendar.ts` |

### economicCalendar

- **Signature**: `economicCalendar(request: Calendar.EconomicCalendarRequest, options?: RequestOptions): ApiPromise<EconomicCalendar, ApiError>`
- **Wire**: `GET /calendar/economic`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EconomicCalendar`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Calendar.EconomicCalendarRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EconomicCalendar` | `economicCalendarSchema` | `src/models/economic-calendar.ts` |

### ipoCalendar

- **Signature**: `ipoCalendar(request: Calendar.IpoCalendarRequest, options?: RequestOptions): ApiPromise<IpoCalendar, ApiError>`
- **Wire**: `GET /calendar/ipo`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpoCalendar`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Calendar.IpoCalendarRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IpoCalendar` | `ipoCalendarSchema` | `src/models/ipo-calendar.ts` |

