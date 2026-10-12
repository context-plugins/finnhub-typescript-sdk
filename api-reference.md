# Reference

> Source: [FinnhubApiClient](src/client.ts)

## Bond

> Source: [Bond](src/resources/bond.ts)

<details>
<summary><code>bondPrice(request: Bond.BondPriceRequest, options?: RequestOptions): ApiPromise&lt;BondCandles, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get bond's price data. The following datasets are supported:</p><table class="table table-hover">
  <thead>
    <tr>
      <th>Exchange</th>
      <th>Segment</th>
      <th>Delay</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td class="text-blue">US Government Bonds</td>
      <td>Government Bonds</td>
      <td>End-of-day</td>
    </tr>
    <tr>
      <td class="text-blue">FINRA Trace</td>
      <td>BTDS: US Corporate Bonds</td>
      <td>Delayed 4h</td>
    </tr>
    <tr>
      <td class="text-blue">FINRA Trace</td>
      <td>144A Bonds</td>
      <td>Delayed 4h</td>
    </tr>
    <tr>
  	  <td class="text-blue">International Bonds</td>
      <td>International Bonds</td>
      <td>End-of-day</td>
    </tr>
</tbody>
</table>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bond.bondPrice({ isin: "some example string", from: 1, to: 1 });
  // TODO: Handle 'response' of type BondCandles
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bond.bondPrice({ isin: "some example string", from: 1, to: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BondCandles
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN. |
| <code>from</code> | <code>number</code> | UNIX timestamp. Interval initial value. |
| <code>to</code> | <code>number</code> | UNIX timestamp. Interval end value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bond.bondPrice(request)`

- **OnSuccess**: <code>[BondCandles](src/models/bond-candles.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.bond.bondPrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BondCandles, ApiError&gt;</code>, with `result.value` of type <code>[BondCandles](src/models/bond-candles.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bondProfile(request: Bond.BondProfileRequest, options?: RequestOptions): ApiPromise&lt;BondProfile, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get general information of a bond. You can query by FIGI, ISIN or CUSIP. A list of supported bonds can be found <a href="/api/v1/bond/list?type=csv&token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bond.bondProfile();
  // TODO: Handle 'response' of type BondProfile
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bond.bondProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BondProfile
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin?</code> | <code>string</code> | ISIN |
| <code>cusip?</code> | <code>string</code> | CUSIP |
| <code>figi?</code> | <code>string</code> | FIGI |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bond.bondProfile(request)`

- **OnSuccess**: <code>[BondProfile](src/models/bond-profile.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.bond.bondProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BondProfile, ApiError&gt;</code>, with `result.value` of type <code>[BondProfile](src/models/bond-profile.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bondTick(request: Bond.BondTickRequest, options?: RequestOptions): ApiPromise&lt;BondTickData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get trade-level data for bonds. The following datasets are supported:</p><table class="table table-hover">
  <thead>
    <tr>
      <th>Exchange</th>
      <th>Segment</th>
      <th>Delay</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-blue">FINRA Trace</th>
      <td>BTDS: US Corporate Bonds</td>
      <td>Delayed 4h</td>
    </tr>
    <tr>
      <td class="text-blue">FINRA Trace</th>
      <td>144A Bonds</td>
      <td>Delayed 4h</td>
    </tr>
  </tbody>
</table>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bond.bondTick({
    isin: "some example string",
    date: "2024-01-15",
    limit: 1,
    skip: 1,
    exchange: "some example string",
  });
  // TODO: Handle 'response' of type BondTickData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bond.bondTick({
  isin: "some example string",
  date: "2024-01-15",
  limit: 1,
  skip: 1,
  exchange: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BondTickData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN. |
| <code>date</code> | <code>string</code> (date) | Date: 2020-04-02. |
| <code>limit</code> | <code>number</code> | Limit number of ticks returned. Maximum value: <code>25000</code> |
| <code>skip</code> | <code>number</code> | Number of ticks to skip. Use this parameter to loop through the entire data. |
| <code>exchange</code> | <code>string</code> | Currently support the following values: <code>trace</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bond.bondTick(request)`

- **OnSuccess**: <code>[BondTickData](src/models/bond-tick-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.bond.bondTick(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BondTickData, ApiError&gt;</code>, with `result.value` of type <code>[BondTickData](src/models/bond-tick-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bondYieldCurve(request: Bond.BondYieldCurveRequest, options?: RequestOptions): ApiPromise&lt;BondYieldCurve, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get yield curve data for Treasury bonds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bond.bondYieldCurve({ code: "some example string" });
  // TODO: Handle 'response' of type BondYieldCurve
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bond.bondYieldCurve({ code: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BondYieldCurve
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | Bond's code. You can find the list of supported code <a href="https://docs.google.com/spreadsheets/d/1iA-lM0Kht7lsQZ7Uu_s6r2i1BbQNUNO9eGkO5-zglHg/edit?usp=sharing" target="_blank" rel="noopener">here</a>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bond.bondYieldCurve(request)`

- **OnSuccess**: <code>[BondYieldCurve](src/models/bond-yield-curve.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.bond.bondYieldCurve(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BondYieldCurve, ApiError&gt;</code>, with `result.value` of type <code>[BondYieldCurve](src/models/bond-yield-curve.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Calendar

> Source: [Calendar](src/resources/calendar.ts)

<details>
<summary><code>earningsCalendar(request: Calendar.EarningsCalendarRequest, options?: RequestOptions): ApiPromise&lt;EarningsCalendar, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get historical and coming earnings release. EPS and Revenue in this endpoint are non-GAAP, which means they are adjusted to exclude some one-time or unusual items. This is the same data investors usually react to and talked about on the media. Estimates are sourced from both sell-side and buy-side analysts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.earningsCalendar();
  // TODO: Handle 'response' of type EarningsCalendar
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar.earningsCalendar().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EarningsCalendar
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from?</code> | <code>string</code> (date) | From date: 2020-03-15. |
| <code>to?</code> | <code>string</code> (date) | To date: 2020-03-16. |
| <code>symbol?</code> | <code>string</code> | Filter by symbol: AAPL. |
| <code>international?</code> | <code>boolean</code> | Set to <code>true</code> to include international markets. Default value is <code>false</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.earningsCalendar(request)`

- **OnSuccess**: <code>[EarningsCalendar](src/models/earnings-calendar.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.calendar.earningsCalendar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EarningsCalendar, ApiError&gt;</code>, with `result.value` of type <code>[EarningsCalendar](src/models/earnings-calendar.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>economicCalendar(request: Calendar.EconomicCalendarRequest, options?: RequestOptions): ApiPromise&lt;EconomicCalendar, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get recent and upcoming economic releases.</p><p>Historical events and surprises are available for Enterprise clients.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.economicCalendar();
  // TODO: Handle 'response' of type EconomicCalendar
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar.economicCalendar().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EconomicCalendar
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from?</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to?</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.economicCalendar(request)`

- **OnSuccess**: <code>[EconomicCalendar](src/models/economic-calendar.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.calendar.economicCalendar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EconomicCalendar, ApiError&gt;</code>, with `result.value` of type <code>[EconomicCalendar](src/models/economic-calendar.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ipoCalendar(request: Calendar.IpoCalendarRequest, options?: RequestOptions): ApiPromise&lt;IpoCalendar, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get recent and upcoming IPO.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.ipoCalendar({ from: "2024-01-15", to: "2024-01-15" });
  // TODO: Handle 'response' of type IpoCalendar
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar.ipoCalendar({ from: "2024-01-15", to: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpoCalendar
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | From date: 2020-03-15. |
| <code>to</code> | <code>string</code> (date) | To date: 2020-03-16. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.ipoCalendar(request)`

- **OnSuccess**: <code>[IpoCalendar](src/models/ipo-calendar.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.calendar.ipoCalendar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpoCalendar, ApiError&gt;</code>, with `result.value` of type <code>[IpoCalendar](src/models/ipo-calendar.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CorporateActions

> Source: [CorporateActions](src/resources/corporate-actions.ts)

<details>
<summary><code>isinChange(request: CorporateActions.IsinChangeRequest, options?: RequestOptions): ApiPromise&lt;IsinChange, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of ISIN changes for EU-listed securities. Limit to 2000 events at a time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.corporateActions.isinChange({
    from: "some example string",
    to: "some example string",
  });
  // TODO: Handle 'response' of type IsinChange
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.corporateActions.isinChange({
  from: "some example string",
  to: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IsinChange
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.corporateActions.isinChange(request)`

- **OnSuccess**: <code>[IsinChange](src/models/isin-change.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.corporateActions.isinChange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IsinChange, ApiError&gt;</code>, with `result.value` of type <code>[IsinChange](src/models/isin-change.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>symbolChange(request: CorporateActions.SymbolChangeRequest, options?: RequestOptions): ApiPromise&lt;SymbolChange, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of symbol changes for US-listed, EU-listed, NSE and ASX securities. Limit to 2000 events at a time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.corporateActions.symbolChange({
    from: "some example string",
    to: "some example string",
  });
  // TODO: Handle 'response' of type SymbolChange
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.corporateActions.symbolChange({
  from: "some example string",
  to: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SymbolChange
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.corporateActions.symbolChange(request)`

- **OnSuccess**: <code>[SymbolChange](src/models/symbol-change.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.corporateActions.symbolChange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SymbolChange, ApiError&gt;</code>, with `result.value` of type <code>[SymbolChange](src/models/symbol-change.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Crypto

> Source: [Crypto](src/resources/crypto.ts)

<details>
<summary><code>cryptoCandles(request: Crypto.CryptoCandlesRequest, options?: RequestOptions): ApiPromise&lt;CryptoCandles, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get candlestick data for crypto symbols.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crypto.cryptoCandles({
    symbol: "some example string",
    resolution: "some example string",
    from: 1,
    to: 1,
  });
  // TODO: Handle 'response' of type CryptoCandles
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crypto.cryptoCandles({
  symbol: "some example string",
  resolution: "some example string",
  from: 1,
  to: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CryptoCandles
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Use symbol returned in <code>/crypto/symbol</code> endpoint for this field. |
| <code>resolution</code> | <code>string</code> | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange. |
| <code>from</code> | <code>number</code> | UNIX timestamp. Interval initial value. |
| <code>to</code> | <code>number</code> | UNIX timestamp. Interval end value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crypto.cryptoCandles(request)`

- **OnSuccess**: <code>[CryptoCandles](src/models/crypto-candles.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.crypto.cryptoCandles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CryptoCandles, ApiError&gt;</code>, with `result.value` of type <code>[CryptoCandles](src/models/crypto-candles.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptoExchanges(options?: RequestOptions): ApiPromise&lt;string[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List supported crypto exchanges

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crypto.cryptoExchanges();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crypto.cryptoExchanges().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crypto.cryptoExchanges()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.crypto.cryptoExchanges().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ApiError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptoProfile(request: Crypto.CryptoProfileRequest, options?: RequestOptions): ApiPromise&lt;CryptoProfile, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get crypto's profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crypto.cryptoProfile({ symbol: "some example string" });
  // TODO: Handle 'response' of type CryptoProfile
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crypto.cryptoProfile({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CryptoProfile
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Crypto symbol such as BTC or ETH. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crypto.cryptoProfile(request)`

- **OnSuccess**: <code>[CryptoProfile](src/models/crypto-profile.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.crypto.cryptoProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CryptoProfile, ApiError&gt;</code>, with `result.value` of type <code>[CryptoProfile](src/models/crypto-profile.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptoSymbols(request: Crypto.CryptoSymbolsRequest, options?: RequestOptions): ApiPromise&lt;CryptoSymbol[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List supported crypto symbols by exchange

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crypto.cryptoSymbols({ exchange: "some example string" });
  // TODO: Handle 'response' of type CryptoSymbol[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crypto.cryptoSymbols({ exchange: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CryptoSymbol[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>string</code> | Exchange you want to get the list of symbols from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crypto.cryptoSymbols(request)`

- **OnSuccess**: <code>[CryptoSymbol](src/models/crypto-symbol.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.crypto.cryptoSymbols(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CryptoSymbol[], ApiError&gt;</code>, with `result.value` of type <code>[CryptoSymbol](src/models/crypto-symbol.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Economic

> Source: [Economic](src/resources/economic.ts)

<details>
<summary><code>economicCode(options?: RequestOptions): ApiPromise&lt;EconomicCode[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List codes of supported economic data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.economic.economicCode();
  // TODO: Handle 'response' of type EconomicCode[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.economic.economicCode().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EconomicCode[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.economic.economicCode()`

- **OnSuccess**: <code>[EconomicCode](src/models/economic-code.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.economic.economicCode().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EconomicCode[], ApiError&gt;</code>, with `result.value` of type <code>[EconomicCode](src/models/economic-code.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>economicData(request: Economic.EconomicDataRequest, options?: RequestOptions): ApiPromise&lt;EconomicData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get economic data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.economic.economicData({ code: "some example string" });
  // TODO: Handle 'response' of type EconomicData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.economic.economicData({ code: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EconomicData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | Economic code. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.economic.economicData(request)`

- **OnSuccess**: <code>[EconomicData](src/models/economic-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.economic.economicData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EconomicData, ApiError&gt;</code>, with `result.value` of type <code>[EconomicData](src/models/economic-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Etf

> Source: [Etf](src/resources/etf.ts)

<details>
<summary><code>etfsAllocation(request: Etf.EtfsAllocationRequest, options?: RequestOptions): ApiPromise&lt;EtFsAllocation, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get ETF equity allocation based on the characteristics of the holdings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etf.etfsAllocation();
  // TODO: Handle 'response' of type EtFsAllocation
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etf.etfsAllocation().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EtFsAllocation
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | ETF symbol. |
| <code>isin?</code> | <code>string</code> | ETF isin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.etf.etfsAllocation(request)`

- **OnSuccess**: <code>[EtFsAllocation](src/models/et-fs-allocation.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.etf.etfsAllocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EtFsAllocation, ApiError&gt;</code>, with `result.value` of type <code>[EtFsAllocation](src/models/et-fs-allocation.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>etfsCountryExposure(request: Etf.EtfsCountryExposureRequest, options?: RequestOptions): ApiPromise&lt;EtFsCountryExposure, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get ETF country exposure data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etf.etfsCountryExposure();
  // TODO: Handle 'response' of type EtFsCountryExposure
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etf.etfsCountryExposure().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EtFsCountryExposure
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | ETF symbol. |
| <code>isin?</code> | <code>string</code> | ETF isin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.etf.etfsCountryExposure(request)`

- **OnSuccess**: <code>[EtFsCountryExposure](src/models/et-fs-country-exposure.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.etf.etfsCountryExposure(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EtFsCountryExposure, ApiError&gt;</code>, with `result.value` of type <code>[EtFsCountryExposure](src/models/et-fs-country-exposure.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>etfsHoldings(request: Etf.EtfsHoldingsRequest, options?: RequestOptions): ApiPromise&lt;EtFsHoldings, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full ETF holdings/constituents. This endpoint has global coverage. Widget only shows top 10 holdings. A list of supported ETFs can be found <a href="/api/v1/etf/list?token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etf.etfsHoldings();
  // TODO: Handle 'response' of type EtFsHoldings
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etf.etfsHoldings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EtFsHoldings
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | ETF symbol. |
| <code>isin?</code> | <code>string</code> | ETF isin. |
| <code>skip?</code> | <code>number</code> | Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip=0 or not set. |
| <code>date?</code> | <code>string</code> | Query holdings by date. You can use either this param or <code>skip</code> param, not both. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.etf.etfsHoldings(request)`

- **OnSuccess**: <code>[EtFsHoldings](src/models/et-fs-holdings.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.etf.etfsHoldings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EtFsHoldings, ApiError&gt;</code>, with `result.value` of type <code>[EtFsHoldings](src/models/et-fs-holdings.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>etfsProfile(request: Etf.EtfsProfileRequest, options?: RequestOptions): ApiPromise&lt;EtFsProfile, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get ETF profile information. This endpoint has global coverage. A list of supported ETFs can be found <a href="/api/v1/etf/list?type=csv&token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etf.etfsProfile();
  // TODO: Handle 'response' of type EtFsProfile
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etf.etfsProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EtFsProfile
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | ETF symbol. |
| <code>isin?</code> | <code>string</code> | ETF isin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.etf.etfsProfile(request)`

- **OnSuccess**: <code>[EtFsProfile](src/models/et-fs-profile.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.etf.etfsProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EtFsProfile, ApiError&gt;</code>, with `result.value` of type <code>[EtFsProfile](src/models/et-fs-profile.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>etfsSectorExposure(request: Etf.EtfsSectorExposureRequest, options?: RequestOptions): ApiPromise&lt;EtFsSectorExposure, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get ETF sector exposure data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etf.etfsSectorExposure();
  // TODO: Handle 'response' of type EtFsSectorExposure
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etf.etfsSectorExposure().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EtFsSectorExposure
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | ETF symbol. |
| <code>isin?</code> | <code>string</code> | ETF isin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.etf.etfsSectorExposure(request)`

- **OnSuccess**: <code>[EtFsSectorExposure](src/models/et-fs-sector-exposure.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.etf.etfsSectorExposure(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EtFsSectorExposure, ApiError&gt;</code>, with `result.value` of type <code>[EtFsSectorExposure](src/models/et-fs-sector-exposure.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Forex

> Source: [Forex](src/resources/forex.ts)

<details>
<summary><code>forexCandles(request: Forex.ForexCandlesRequest, options?: RequestOptions): ApiPromise&lt;ForexCandles, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get candlestick data for forex symbols.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.forex.forexCandles({
    symbol: "some example string",
    resolution: "some example string",
    from: 1,
    to: 1,
  });
  // TODO: Handle 'response' of type ForexCandles
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forex.forexCandles({
  symbol: "some example string",
  resolution: "some example string",
  from: 1,
  to: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ForexCandles
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Use symbol returned in <code>/forex/symbol</code> endpoint for this field. |
| <code>resolution</code> | <code>string</code> | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange. |
| <code>from</code> | <code>number</code> | UNIX timestamp. Interval initial value. |
| <code>to</code> | <code>number</code> | UNIX timestamp. Interval end value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forex.forexCandles(request)`

- **OnSuccess**: <code>[ForexCandles](src/models/forex-candles.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.forex.forexCandles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ForexCandles, ApiError&gt;</code>, with `result.value` of type <code>[ForexCandles](src/models/forex-candles.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>forexExchanges(options?: RequestOptions): ApiPromise&lt;string[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List supported forex exchanges

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.forex.forexExchanges();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forex.forexExchanges().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forex.forexExchanges()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.forex.forexExchanges().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ApiError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>forexRates(request: Forex.ForexRatesRequest, options?: RequestOptions): ApiPromise&lt;Forexrates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get rates for all forex pairs. Ideal for currency conversion

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.forex.forexRates();
  // TODO: Handle 'response' of type Forexrates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forex.forexRates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Forexrates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base?</code> | <code>string</code> | Base currency. Default to EUR. |
| <code>date?</code> | <code>string</code> | Date. Leave blank to get the latest data. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forex.forexRates(request)`

- **OnSuccess**: <code>[Forexrates](src/models/forexrates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.forex.forexRates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Forexrates, ApiError&gt;</code>, with `result.value` of type <code>[Forexrates](src/models/forexrates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>forexSymbols(request: Forex.ForexSymbolsRequest, options?: RequestOptions): ApiPromise&lt;ForexSymbol[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List supported forex symbols.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.forex.forexSymbols({ exchange: "some example string" });
  // TODO: Handle 'response' of type ForexSymbol[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forex.forexSymbols({ exchange: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ForexSymbol[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>string</code> | Exchange you want to get the list of symbols from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forex.forexSymbols(request)`

- **OnSuccess**: <code>[ForexSymbol](src/models/forex-symbol.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.forex.forexSymbols(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ForexSymbol[], ApiError&gt;</code>, with `result.value` of type <code>[ForexSymbol](src/models/forex-symbol.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalFilings

> Source: [GlobalFilings](src/resources/global-filings.ts)

<details>
<summary><code>globalFilingsDownload(request: GlobalFilings.GlobalFilingsDownloadRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Download filings using document ids.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.globalFilings.globalFilingsDownload({ documentId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalFilings.globalFilingsDownload({
  documentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>documentId</code> | <code>string</code> | Document's id. Note that this is different from filingId as 1 filing can contain multiple documents. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalFilings.globalFilingsDownload(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.globalFilings.globalFilingsDownload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>globalFilingsSearch(request: GlobalFilings.GlobalFilingsSearchRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Search for best-matched filings across global companies' filings, transcripts and press releases. You can filter by anything from symbol, ISIN to form type, and document sources.</p><p>This endpoint will return a list of documents that match your search criteria. If you would like to get the excerpts as well, please set <code>highlighted</code> to <code>true</code>. Once you have the list of documents, you can get a list of excerpts and positions to highlight the document using the <code>/search-in-filing</code> endpoint</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalFilings.globalFilingsSearch();
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalFilings.globalFilingsSearch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SearchBody](src/models/search-body.ts)</code> | Search body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalFilings.globalFilingsSearch(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.globalFilings.globalFilingsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, ApiError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>globalFilingsSearchFilter(request: GlobalFilings.GlobalFilingsSearchFilterRequest, options?: RequestOptions): ApiPromise&lt;SearchFilter, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get available values for each filter in search body.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalFilings.globalFilingsSearchFilter({ field: "some example string" });
  // TODO: Handle 'response' of type SearchFilter
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalFilings.globalFilingsSearchFilter({
  field: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchFilter
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>field</code> | <code>string</code> | Field to get available filters. Available filters are "countries", "exchanges", "exhibits", "forms", "gics", "naics", "caps", "acts", and "sort". |
| <code>source?</code> | <code>string</code> | Get available forms for each source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalFilings.globalFilingsSearchFilter(request)`

- **OnSuccess**: <code>[SearchFilter](src/models/search-filter.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.globalFilings.globalFilingsSearchFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchFilter, ApiError&gt;</code>, with `result.value` of type <code>[SearchFilter](src/models/search-filter.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchInFiling(request: GlobalFilings.SearchInFilingRequest, options?: RequestOptions): ApiPromise&lt;InFilingResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get a list of excerpts and highlight positions within a document using your query.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalFilings.searchInFiling();
  // TODO: Handle 'response' of type InFilingResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalFilings.searchInFiling().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InFilingResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[InFilingSearchBody](src/models/in-filing-search-body.ts)</code> | Search body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalFilings.searchInFiling(request)`

- **OnSuccess**: <code>[InFilingResponse](src/models/in-filing-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.globalFilings.searchInFiling(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InFilingResponse, ApiError&gt;</code>, with `result.value` of type <code>[InFilingResponse](src/models/in-filing-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Index

> Source: [Index](src/resources/index.ts)

<details>
<summary><code>indicesConstituents(request: Index.IndicesConstituentsRequest, options?: RequestOptions): ApiPromise&lt;IndicesConstituents, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of index's constituents. A list of supported indices for this endpoint can be found <a href="/api/v1/index/list?token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.index.indicesConstituents({ symbol: "some example string" });
  // TODO: Handle 'response' of type IndicesConstituents
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.index.indicesConstituents({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IndicesConstituents
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | symbol |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.index.indicesConstituents(request)`

- **OnSuccess**: <code>[IndicesConstituents](src/models/indices-constituents.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.index.indicesConstituents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IndicesConstituents, ApiError&gt;</code>, with `result.value` of type <code>[IndicesConstituents](src/models/indices-constituents.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indicesHistoricalConstituents(request: Index.IndicesHistoricalConstituentsRequest, options?: RequestOptions): ApiPromise&lt;IndicesHistoricalConstituents, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full history of index's constituents including symbols and dates of joining and leaving the Index. A list of supported indices for this endpoint can be found <a href="/api/v1/index/historical-list?token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.index.indicesHistoricalConstituents({ symbol: "some example string" });
  // TODO: Handle 'response' of type IndicesHistoricalConstituents
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.index.indicesHistoricalConstituents({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IndicesHistoricalConstituents
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | symbol |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.index.indicesHistoricalConstituents(request)`

- **OnSuccess**: <code>[IndicesHistoricalConstituents](src/models/indices-historical-constituents.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.index.indicesHistoricalConstituents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IndicesHistoricalConstituents, ApiError&gt;</code>, with `result.value` of type <code>[IndicesHistoricalConstituents](src/models/indices-historical-constituents.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Institutional

> Source: [Institutional](src/resources/institutional.ts)

<details>
<summary><code>institutionalOwnership(request: Institutional.InstitutionalOwnershipRequest, options?: RequestOptions): ApiPromise&lt;InstitutionalOwnership, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list institutional investors' positions for a particular stock overtime. Data from 13-F filings. Limit to 1 year of data at a time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.institutional.institutionalOwnership({
    symbol: "some example string",
    cusip: "some example string",
    from: "some example string",
    to: "some example string",
  });
  // TODO: Handle 'response' of type InstitutionalOwnership
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.institutional.institutionalOwnership({
  symbol: "some example string",
  cusip: "some example string",
  from: "some example string",
  to: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstitutionalOwnership
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Filter by symbol. |
| <code>cusip</code> | <code>string</code> | Filter by CUSIP. |
| <code>from</code> | <code>string</code> | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.institutional.institutionalOwnership(request)`

- **OnSuccess**: <code>[InstitutionalOwnership](src/models/institutional-ownership.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.institutional.institutionalOwnership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstitutionalOwnership, ApiError&gt;</code>, with `result.value` of type <code>[InstitutionalOwnership](src/models/institutional-ownership.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>institutionalPortfolio(request: Institutional.InstitutionalPortfolioRequest, options?: RequestOptions): ApiPromise&lt;InstitutionalPortfolio, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the holdings/portfolio data of institutional investors from 13-F filings. Limit to 1 year of data at a time. You can get a list of supported CIK <a href="/api/v1/institutional/list?token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.institutional.institutionalPortfolio({
    cik: "some example string",
    from: "some example string",
    to: "some example string",
  });
  // TODO: Handle 'response' of type InstitutionalPortfolio
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.institutional.institutionalPortfolio({
  cik: "some example string",
  from: "some example string",
  to: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstitutionalPortfolio
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cik</code> | <code>string</code> | Fund's CIK. |
| <code>from</code> | <code>string</code> | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.institutional.institutionalPortfolio(request)`

- **OnSuccess**: <code>[InstitutionalPortfolio](src/models/institutional-portfolio.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.institutional.institutionalPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstitutionalPortfolio, ApiError&gt;</code>, with `result.value` of type <code>[InstitutionalPortfolio](src/models/institutional-portfolio.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>institutionalProfile(request: Institutional.InstitutionalProfileRequest, options?: RequestOptions): ApiPromise&lt;InstitutionalProfile, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of well-known institutional investors. Currently support 60+ profiles.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.institutional.institutionalProfile();
  // TODO: Handle 'response' of type InstitutionalProfile
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.institutional.institutionalProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstitutionalProfile
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cik?</code> | <code>string</code> | Filter by CIK. Leave blank to get the full list. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.institutional.institutionalProfile(request)`

- **OnSuccess**: <code>[InstitutionalProfile](src/models/institutional-profile.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.institutional.institutionalProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstitutionalProfile, ApiError&gt;</code>, with `result.value` of type <code>[InstitutionalProfile](src/models/institutional-profile.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Misc

> Source: [Misc](src/resources/misc.ts)

<details>
<summary><code>aiChat(request: Misc.AiChatRequest, options?: RequestOptions): ApiPromise&lt;AiChatResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Chat with our AI copilot trained on the extensive Finnhub's global data. You can ask it any finance-related questions just like with other LLM models and receive results in texts and widgets.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.aiChat();
  // TODO: Handle 'response' of type AiChatResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.aiChat().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AiChatResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AiChatBody](src/models/ai-chat-body.ts)</code> | Search body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.aiChat(request)`

- **OnSuccess**: <code>[AiChatResponse](src/models/ai-chat-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.aiChat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AiChatResponse, ApiError&gt;</code>, with `result.value` of type <code>[AiChatResponse](src/models/ai-chat-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>airlinePriceIndex(request: Misc.AirlinePriceIndexRequest, options?: RequestOptions): ApiPromise&lt;AirlinePriceIndexData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>The Flight Ticket Price Index API provides comprehensive data on airline ticket prices, including the average daily ticket price and its percentage change (price index). This data, collected weekly and projected two weeks ahead, aggregates daily prices and indexes from the 50 busiest and largest airports across the USA. The dataset includes detailed information on airlines, dates, and average ticket prices, offering valuable insights for market analysis and pricing strategies.</p><p>The price index is calculated as percentage change of average daily ticket price from the previous weekly reading. Raw ticket prices data is available for Enterprise users. <a href="mailto:support@finnhub.io">Contact us</a> to inquire about the raw price data.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.airlinePriceIndex({
    airline: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type AirlinePriceIndexData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.airlinePriceIndex({
  airline: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AirlinePriceIndexData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>airline</code> | <code>string</code> | Filter data by airline. Accepted values: <code>united</code>,<code>delta</code>,<code>american_airlines</code>,<code>southwest</code>,<code>southern_airways_express</code>,<code>alaska_airlines</code>,<code>frontier_airlines</code>,<code>jetblue_airways</code>,<code>spirit_airlines</code>,<code>sun_country_airlines</code>,<code>breeze_airways</code>,<code>hawaiian_airlines</code> |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.airlinePriceIndex(request)`

- **OnSuccess**: <code>[AirlinePriceIndexData](src/models/airline-price-index-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.airlinePriceIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AirlinePriceIndexData, ApiError&gt;</code>, with `result.value` of type <code>[AirlinePriceIndexData](src/models/airline-price-index-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankBranch(request: Misc.BankBranchRequest, options?: RequestOptions): ApiPromise&lt;BankBranchRes, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve list of US bank branches information for a given symbol.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.bankBranch({ symbol: {} });
  // TODO: Handle 'response' of type BankBranchRes
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.bankBranch({ symbol: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankBranchRes
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>Record&lt;string, unknown&gt;</code> | Symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.bankBranch(request)`

- **OnSuccess**: <code>[BankBranchRes](src/models/bank-branch-res.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.bankBranch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankBranchRes, ApiError&gt;</code>, with `result.value` of type <code>[BankBranchRes](src/models/bank-branch-res.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>country(options?: RequestOptions): ApiPromise&lt;CountryMetadata[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all countries and metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.country();
  // TODO: Handle 'response' of type CountryMetadata[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.country().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountryMetadata[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.country()`

- **OnSuccess**: <code>[CountryMetadata](src/models/country-metadata.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.country().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountryMetadata[], ApiError&gt;</code>, with `result.value` of type <code>[CountryMetadata](src/models/country-metadata.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>covid19(options?: RequestOptions): ApiPromise&lt;CovidInfo[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get real-time updates on the number of COVID-19 (Corona virus) cases in the US with a state-by-state breakdown. Data is sourced from CDC and reputable sources. You can also access this API <a href="https://rapidapi.com/Finnhub/api/finnhub-real-time-covid-19" target="_blank" rel="nofollow">here</a>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.covid19();
  // TODO: Handle 'response' of type CovidInfo[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.covid19().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CovidInfo[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.covid19()`

- **OnSuccess**: <code>[CovidInfo](src/models/covid-info.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.covid19().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CovidInfo[], ApiError&gt;</code>, with `result.value` of type <code>[CovidInfo](src/models/covid-info.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fdaCommitteeMeetingCalendar(options?: RequestOptions): ApiPromise&lt;FdaComitteeMeeting[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

FDA's advisory committees are established to provide functions which support the agency's mission of protecting and promoting the public health, while meeting the requirements set forth in the Federal Advisory Committee Act. Committees are either mandated by statute or established at the discretion of the Department of Health and Human Services. Each committee is subject to renewal at two-year intervals unless the committee charter states otherwise.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.fdaCommitteeMeetingCalendar();
  // TODO: Handle 'response' of type FdaComitteeMeeting[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.fdaCommitteeMeetingCalendar().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FdaComitteeMeeting[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.fdaCommitteeMeetingCalendar()`

- **OnSuccess**: <code>[FdaComitteeMeeting](src/models/fda-comittee-meeting.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.fdaCommitteeMeetingCalendar().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FdaComitteeMeeting[], ApiError&gt;</code>, with `result.value` of type <code>[FdaComitteeMeeting](src/models/fda-comittee-meeting.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>quote(request: Misc.QuoteRequest, options?: RequestOptions): ApiPromise&lt;Quote, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get real-time quote data for US stocks. Constant polling is not recommended. Use websocket if you need real-time updates.</p><p>Real-time stock prices for international markets are supported for Enterprise clients via our partner's feed. <a href="mailto:support@finnhub.io">Contact Us</a> to learn more.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.quote({ symbol: "some example string" });
  // TODO: Handle 'response' of type Quote
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.quote({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Quote
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.quote(request)`

- **OnSuccess**: <code>[Quote](src/models/quote.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.quote(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Quote, ApiError&gt;</code>, with `result.value` of type <code>[Quote](src/models/quote.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sectorMetric(request: Misc.SectorMetricRequest, options?: RequestOptions): ApiPromise&lt;SectorMetric, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get ratios for different sectors and regions/indices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.sectorMetric({ region: "some example string" });
  // TODO: Handle 'response' of type SectorMetric
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.sectorMetric({ region: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectorMetric
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region</code> | <code>string</code> | Region. A list of supported values for this field can be found <a href="https://docs.google.com/spreadsheets/d/1afedyv7yWJ-z7pMjaAZK-f6ENY3mI3EBCk95QffpoHw/edit?usp=sharing" target="_blank">here</a>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.sectorMetric(request)`

- **OnSuccess**: <code>[SectorMetric](src/models/sector-metric.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.sectorMetric(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectorMetric, ApiError&gt;</code>, with `result.value` of type <code>[SectorMetric](src/models/sector-metric.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>symbolSearch(request: Misc.SymbolSearchRequest, options?: RequestOptions): ApiPromise&lt;SymbolLookup, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.symbolSearch({ q: "some example string" });
  // TODO: Handle 'response' of type SymbolLookup
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.symbolSearch({ q: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SymbolLookup
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | Query text can be symbol, name, isin, or cusip. |
| <code>exchange?</code> | <code>string</code> | Exchange limit. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.symbolSearch(request)`

- **OnSuccess**: <code>[SymbolLookup](src/models/symbol-lookup.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.symbolSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SymbolLookup, ApiError&gt;</code>, with `result.value` of type <code>[SymbolLookup](src/models/symbol-lookup.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>technicalIndicator(request: Misc.TechnicalIndicatorRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return technical indicator with price data. List of supported indicators can be found <a href="https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.technicalIndicator({
    symbol: "some example string",
    resolution: "some example string",
    from: 1,
    to: 1,
    indicator: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.technicalIndicator({
  symbol: "some example string",
  resolution: "some example string",
  from: 1,
  to: 1,
  indicator: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | symbol |
| <code>resolution</code> | <code>string</code> | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange. |
| <code>from</code> | <code>number</code> | UNIX timestamp. Interval initial value. |
| <code>to</code> | <code>number</code> | UNIX timestamp. Interval end value. |
| <code>indicator</code> | <code>string</code> | Indicator name. Full list can be found <a href="https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing" target="_blank">here</a>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.technicalIndicator(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.technicalIndicator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MutualFund

> Source: [MutualFund](src/resources/mutual-fund.ts)

<details>
<summary><code>mutualFundCountryExposure(request: MutualFund.MutualFundCountryExposureRequest, options?: RequestOptions): ApiPromise&lt;MutualFundCountryExposure, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Mutual Funds country exposure data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.mutualFundCountryExposure();
  // TODO: Handle 'response' of type MutualFundCountryExposure
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.mutualFundCountryExposure().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MutualFundCountryExposure
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol. |
| <code>isin?</code> | <code>string</code> | Fund's isin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.mutualFundCountryExposure(request)`

- **OnSuccess**: <code>[MutualFundCountryExposure](src/models/mutual-fund-country-exposure.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mutualFund.mutualFundCountryExposure(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MutualFundCountryExposure, ApiError&gt;</code>, with `result.value` of type <code>[MutualFundCountryExposure](src/models/mutual-fund-country-exposure.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mutualFundEet(request: MutualFund.MutualFundEetRequest, options?: RequestOptions): ApiPromise&lt;MutualFundEet, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get EET data for EU funds. For PAIs data, please see the EET PAI endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.mutualFundEet({ isin: "some example string" });
  // TODO: Handle 'response' of type MutualFundEet
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.mutualFundEet({ isin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MutualFundEet
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.mutualFundEet(request)`

- **OnSuccess**: <code>[MutualFundEet](src/models/mutual-fund-eet.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mutualFund.mutualFundEet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MutualFundEet, ApiError&gt;</code>, with `result.value` of type <code>[MutualFundEet](src/models/mutual-fund-eet.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mutualFundEetPai(request: MutualFund.MutualFundEetPaiRequest, options?: RequestOptions): ApiPromise&lt;MutualFundEetPai, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get EET PAI data for EU funds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.mutualFundEetPai({ isin: "some example string" });
  // TODO: Handle 'response' of type MutualFundEetPai
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.mutualFundEetPai({ isin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MutualFundEetPai
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.mutualFundEetPai(request)`

- **OnSuccess**: <code>[MutualFundEetPai](src/models/mutual-fund-eet-pai.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mutualFund.mutualFundEetPai(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MutualFundEetPai, ApiError&gt;</code>, with `result.value` of type <code>[MutualFundEetPai](src/models/mutual-fund-eet-pai.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mutualFundHoldings(request: MutualFund.MutualFundHoldingsRequest, options?: RequestOptions): ApiPromise&lt;MutualFundHoldings, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full Mutual Funds holdings/constituents. This endpoint covers both US and global mutual funds. For international funds, you must query the data using ISIN. A list of supported funds can be found <a href="/api/v1/mutual-fund/list?token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.mutualFundHoldings();
  // TODO: Handle 'response' of type MutualFundHoldings
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.mutualFundHoldings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MutualFundHoldings
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Fund's symbol. |
| <code>isin?</code> | <code>string</code> | Fund's isin. |
| <code>skip?</code> | <code>number</code> | Skip the first n results. You can use this parameter to query historical constituents data. The latest result is returned if skip=0 or not set. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.mutualFundHoldings(request)`

- **OnSuccess**: <code>[MutualFundHoldings](src/models/mutual-fund-holdings.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mutualFund.mutualFundHoldings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MutualFundHoldings, ApiError&gt;</code>, with `result.value` of type <code>[MutualFundHoldings](src/models/mutual-fund-holdings.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mutualFundProfile(request: MutualFund.MutualFundProfileRequest, options?: RequestOptions): ApiPromise&lt;MutualFundProfile, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get mutual funds profile information. This endpoint covers both US and global mutual funds. For international funds, you must query the data using ISIN. A list of supported funds can be found <a href="/api/v1/mutual-fund/list?type=csv&token=" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.mutualFundProfile();
  // TODO: Handle 'response' of type MutualFundProfile
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.mutualFundProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MutualFundProfile
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Fund's symbol. |
| <code>isin?</code> | <code>string</code> | Fund's isin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.mutualFundProfile(request)`

- **OnSuccess**: <code>[MutualFundProfile](src/models/mutual-fund-profile.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mutualFund.mutualFundProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MutualFundProfile, ApiError&gt;</code>, with `result.value` of type <code>[MutualFundProfile](src/models/mutual-fund-profile.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mutualFundSectorExposure(request: MutualFund.MutualFundSectorExposureRequest, options?: RequestOptions): ApiPromise&lt;MutualFundSectorExposure, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Mutual Funds sector exposure data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.mutualFundSectorExposure();
  // TODO: Handle 'response' of type MutualFundSectorExposure
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.mutualFundSectorExposure().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MutualFundSectorExposure
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Mutual Fund symbol. |
| <code>isin?</code> | <code>string</code> | Fund's isin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.mutualFundSectorExposure(request)`

- **OnSuccess**: <code>[MutualFundSectorExposure](src/models/mutual-fund-sector-exposure.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mutualFund.mutualFundSectorExposure(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MutualFundSectorExposure, ApiError&gt;</code>, with `result.value` of type <code>[MutualFundSectorExposure](src/models/mutual-fund-sector-exposure.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/resources/news.ts)

<details>
<summary><code>companyNews(request: News.CompanyNewsRequest, options?: RequestOptions): ApiPromise&lt;CompanyNews[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List latest company news by symbol. This endpoint is only available for North American companies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.companyNews({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type CompanyNews[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.companyNews({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyNews[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.companyNews(request)`

- **OnSuccess**: <code>[CompanyNews](src/models/company-news.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.news.companyNews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyNews[], ApiError&gt;</code>, with `result.value` of type <code>[CompanyNews](src/models/company-news.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marketNews(request: News.MarketNewsRequest, options?: RequestOptions): ApiPromise&lt;MarketNews[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get latest market news.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.marketNews({ category: "some example string" });
  // TODO: Handle 'response' of type MarketNews[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.marketNews({ category: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MarketNews[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | This parameter can be 1 of the following values <code>general, forex, crypto, merger</code>. |
| <code>minId?</code> | <code>number</code> | Use this field to get only news after this ID. Default to 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.marketNews(request)`

- **OnSuccess**: <code>[MarketNews](src/models/market-news.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.news.marketNews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MarketNews[], ApiError&gt;</code>, with `result.value` of type <code>[MarketNews](src/models/market-news.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newsSentiment(request: News.NewsSentimentRequest, options?: RequestOptions): ApiPromise&lt;NewsSentiment, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's news sentiment and statistics. This endpoint is only available for US companies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.newsSentiment({ symbol: "some example string" });
  // TODO: Handle 'response' of type NewsSentiment
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.newsSentiment({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsSentiment
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.newsSentiment(request)`

- **OnSuccess**: <code>[NewsSentiment](src/models/news-sentiment.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.news.newsSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsSentiment, ApiError&gt;</code>, with `result.value` of type <code>[NewsSentiment](src/models/news-sentiment.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pressReleases(request: News.PressReleasesRequest, options?: RequestOptions): ApiPromise&lt;PressRelease, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get latest major press releases of a company. This data can be used to highlight the most significant events comprised of mostly press releases sourced from the exchanges, BusinessWire, AccessWire, GlobeNewswire, Newsfile, and PRNewswire.</p><p>Full-text press releases data is available for Enterprise clients. <a href="mailto:support@finnhub.io">Contact Us</a> to learn more.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.pressReleases({ symbol: "some example string" });
  // TODO: Handle 'response' of type PressRelease
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.pressReleases({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PressRelease
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |
| <code>from?</code> | <code>string</code> (date) | From time: 2020-01-01. |
| <code>to?</code> | <code>string</code> (date) | To time: 2020-01-05. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.pressReleases(request)`

- **OnSuccess**: <code>[PressRelease](src/models/press-release.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.news.pressReleases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PressRelease, ApiError&gt;</code>, with `result.value` of type <code>[PressRelease](src/models/press-release.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Scan

> Source: [Scan](src/resources/scan.ts)

<details>
<summary><code>aggregateIndicator(request: Scan.AggregateIndicatorRequest, options?: RequestOptions): ApiPromise&lt;AggregateIndicators, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get aggregate signal of multiple technical indicators such as MACD, RSI, Moving Average v.v. A full list of indicators can be found <a href="https://docs.google.com/spreadsheets/d/1MWuy0WuT2yVlxr1KbPdggVygMZtJfunDnhe-C0GEXYM/edit?usp=sharing" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scan.aggregateIndicator({
    symbol: "some example string",
    resolution: "some example string",
  });
  // TODO: Handle 'response' of type AggregateIndicators
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scan.aggregateIndicator({
  symbol: "some example string",
  resolution: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AggregateIndicators
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | symbol |
| <code>resolution</code> | <code>string</code> | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scan.aggregateIndicator(request)`

- **OnSuccess**: <code>[AggregateIndicators](src/models/aggregate-indicators.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.scan.aggregateIndicator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AggregateIndicators, ApiError&gt;</code>, with `result.value` of type <code>[AggregateIndicators](src/models/aggregate-indicators.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patternRecognition(request: Scan.PatternRecognitionRequest, options?: RequestOptions): ApiPromise&lt;PatternRecognition, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run pattern recognition algorithm on a symbol. Support double top/bottom, triple top/bottom, head and shoulders, triangle, wedge, channel, flag, and candlestick patterns.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scan.patternRecognition({
    symbol: "some example string",
    resolution: "some example string",
  });
  // TODO: Handle 'response' of type PatternRecognition
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scan.patternRecognition({
  symbol: "some example string",
  resolution: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PatternRecognition
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol |
| <code>resolution</code> | <code>string</code> | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scan.patternRecognition(request)`

- **OnSuccess**: <code>[PatternRecognition](src/models/pattern-recognition.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.scan.patternRecognition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PatternRecognition, ApiError&gt;</code>, with `result.value` of type <code>[PatternRecognition](src/models/pattern-recognition.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>supportResistance(request: Scan.SupportResistanceRequest, options?: RequestOptions): ApiPromise&lt;SupportResistance, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get support and resistance levels for a symbol.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scan.supportResistance({
    symbol: "some example string",
    resolution: "some example string",
  });
  // TODO: Handle 'response' of type SupportResistance
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scan.supportResistance({
  symbol: "some example string",
  resolution: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportResistance
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol |
| <code>resolution</code> | <code>string</code> | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scan.supportResistance(request)`

- **OnSuccess**: <code>[SupportResistance](src/models/support-resistance.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.scan.supportResistance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportResistance, ApiError&gt;</code>, with `result.value` of type <code>[SupportResistance](src/models/support-resistance.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StockEstimates

> Source: [StockEstimates](src/resources/stock-estimates.ts)

<details>
<summary><code>companyCapexEstimates(request: StockEstimates.CompanyCapexEstimatesRequest, options?: RequestOptions): ApiPromise&lt;CapexEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's capital expenditure estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyCapexEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type CapexEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyCapexEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CapexEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyCapexEstimates(request)`

- **OnSuccess**: <code>[CapexEstimates](src/models/capex-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyCapexEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CapexEstimates, ApiError&gt;</code>, with `result.value` of type <code>[CapexEstimates](src/models/capex-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyDpsEstimates(request: StockEstimates.CompanyDpsEstimatesRequest, options?: RequestOptions): ApiPromise&lt;DpsEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's Dividend per Share estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyDpsEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type DpsEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyDpsEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DpsEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyDpsEstimates(request)`

- **OnSuccess**: <code>[DpsEstimates](src/models/dps-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyDpsEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DpsEstimates, ApiError&gt;</code>, with `result.value` of type <code>[DpsEstimates](src/models/dps-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyEarnings(request: StockEstimates.CompanyEarningsRequest, options?: RequestOptions): ApiPromise&lt;EarningResult[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company historical quarterly earnings surprise going back to 2000.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyEarnings({ symbol: "some example string" });
  // TODO: Handle 'response' of type EarningResult[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyEarnings({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EarningResult[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>limit?</code> | <code>number</code> | Limit number of period returned. Leave blank to get the full history. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyEarnings(request)`

- **OnSuccess**: <code>[EarningResult](src/models/earning-result.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyEarnings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EarningResult[], ApiError&gt;</code>, with `result.value` of type <code>[EarningResult](src/models/earning-result.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyEarningsQualityScore(request: StockEstimates.CompanyEarningsQualityScoreRequest, options?: RequestOptions): ApiPromise&lt;CompanyEarningsQualityScore, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>This endpoint provides Earnings Quality Score for global companies.</p><p> Earnings quality refers to the extent to which current earnings predict future earnings. "High-quality" earnings are expected to persist, while "low-quality" earnings do not. A higher score means a higher earnings quality</p><p>Finnhub uses a proprietary model which takes into consideration 4 criteria:</p> <ul style="list-style-type: unset; margin-left: 30px;"><li>Profitability</li><li>Growth</li><li>Cash Generation & Capital Allocation</li><li>Leverage</li></ul><br/><p>We then compare the metrics of each company in each category against its peers in the same industry to gauge how quality its earnings is.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyEarningsQualityScore({
    symbol: "some example string",
    freq: "some example string",
  });
  // TODO: Handle 'response' of type CompanyEarningsQualityScore
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyEarningsQualityScore({
  symbol: "some example string",
  freq: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyEarningsQualityScore
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>freq</code> | <code>string</code> | Frequency. Currently support <code>annual</code> and <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyEarningsQualityScore(request)`

- **OnSuccess**: <code>[CompanyEarningsQualityScore](src/models/company-earnings-quality-score.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyEarningsQualityScore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyEarningsQualityScore, ApiError&gt;</code>, with `result.value` of type <code>[CompanyEarningsQualityScore](src/models/company-earnings-quality-score.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyEbitEstimates(request: StockEstimates.CompanyEbitEstimatesRequest, options?: RequestOptions): ApiPromise&lt;EbitEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's ebit estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyEbitEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type EbitEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyEbitEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EbitEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyEbitEstimates(request)`

- **OnSuccess**: <code>[EbitEstimates](src/models/ebit-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyEbitEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EbitEstimates, ApiError&gt;</code>, with `result.value` of type <code>[EbitEstimates](src/models/ebit-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyEbitdaEstimates(request: StockEstimates.CompanyEbitdaEstimatesRequest, options?: RequestOptions): ApiPromise&lt;EbitdaEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's ebitda estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyEbitdaEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type EbitdaEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyEbitdaEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EbitdaEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyEbitdaEstimates(request)`

- **OnSuccess**: <code>[EbitdaEstimates](src/models/ebitda-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyEbitdaEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EbitdaEstimates, ApiError&gt;</code>, with `result.value` of type <code>[EbitdaEstimates](src/models/ebitda-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyEpsEstimates(request: StockEstimates.CompanyEpsEstimatesRequest, options?: RequestOptions): ApiPromise&lt;EarningsEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's EPS estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyEpsEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type EarningsEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyEpsEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EarningsEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyEpsEstimates(request)`

- **OnSuccess**: <code>[EarningsEstimates](src/models/earnings-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyEpsEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EarningsEstimates, ApiError&gt;</code>, with `result.value` of type <code>[EarningsEstimates](src/models/earnings-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyFcfEstimates(request: StockEstimates.CompanyFcfEstimatesRequest, options?: RequestOptions): ApiPromise&lt;FcfEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's free cash flow estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyFcfEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type FcfEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyFcfEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FcfEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyFcfEstimates(request)`

- **OnSuccess**: <code>[FcfEstimates](src/models/fcf-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyFcfEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FcfEstimates, ApiError&gt;</code>, with `result.value` of type <code>[FcfEstimates](src/models/fcf-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyGrossIncomeEstimates(request: StockEstimates.CompanyGrossIncomeEstimatesRequest, options?: RequestOptions): ApiPromise&lt;GrossIncomeEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's gross income estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyGrossIncomeEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type GrossIncomeEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyGrossIncomeEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GrossIncomeEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyGrossIncomeEstimates(request)`

- **OnSuccess**: <code>[GrossIncomeEstimates](src/models/gross-income-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyGrossIncomeEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GrossIncomeEstimates, ApiError&gt;</code>, with `result.value` of type <code>[GrossIncomeEstimates](src/models/gross-income-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyNetIncomeEstimates(request: StockEstimates.CompanyNetIncomeEstimatesRequest, options?: RequestOptions): ApiPromise&lt;NetIncomeEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's net income estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyNetIncomeEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type NetIncomeEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyNetIncomeEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetIncomeEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyNetIncomeEstimates(request)`

- **OnSuccess**: <code>[NetIncomeEstimates](src/models/net-income-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyNetIncomeEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetIncomeEstimates, ApiError&gt;</code>, with `result.value` of type <code>[NetIncomeEstimates](src/models/net-income-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyOcfEstimates(request: StockEstimates.CompanyOcfEstimatesRequest, options?: RequestOptions): ApiPromise&lt;OcfEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's operating cash flow estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyOcfEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type OcfEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyOcfEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OcfEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyOcfEstimates(request)`

- **OnSuccess**: <code>[OcfEstimates](src/models/ocf-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyOcfEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OcfEstimates, ApiError&gt;</code>, with `result.value` of type <code>[OcfEstimates](src/models/ocf-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyPretaxIncomeEstimates(request: StockEstimates.CompanyPretaxIncomeEstimatesRequest, options?: RequestOptions): ApiPromise&lt;PretaxIncomeEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's pretax income estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyPretaxIncomeEstimates({
    symbol: "some example string",
  });
  // TODO: Handle 'response' of type PretaxIncomeEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyPretaxIncomeEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PretaxIncomeEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyPretaxIncomeEstimates(request)`

- **OnSuccess**: <code>[PretaxIncomeEstimates](src/models/pretax-income-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyPretaxIncomeEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PretaxIncomeEstimates, ApiError&gt;</code>, with `result.value` of type <code>[PretaxIncomeEstimates](src/models/pretax-income-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyRevenueEstimates(request: StockEstimates.CompanyRevenueEstimatesRequest, options?: RequestOptions): ApiPromise&lt;RevenueEstimates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company's revenue estimates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.companyRevenueEstimates({ symbol: "some example string" });
  // TODO: Handle 'response' of type RevenueEstimates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.companyRevenueEstimates({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevenueEstimates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>freq?</code> | <code>string</code> | Can take 1 of the following values: <code>annual, quarterly</code>. Default to <code>quarterly</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.companyRevenueEstimates(request)`

- **OnSuccess**: <code>[RevenueEstimates](src/models/revenue-estimates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.companyRevenueEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevenueEstimates, ApiError&gt;</code>, with `result.value` of type <code>[RevenueEstimates](src/models/revenue-estimates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>priceTarget(request: StockEstimates.PriceTargetRequest, options?: RequestOptions): ApiPromise&lt;PriceTarget, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get latest price target consensus.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.priceTarget({ symbol: "some example string" });
  // TODO: Handle 'response' of type PriceTarget
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.priceTarget({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PriceTarget
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.priceTarget(request)`

- **OnSuccess**: <code>[PriceTarget](src/models/price-target.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.priceTarget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PriceTarget, ApiError&gt;</code>, with `result.value` of type <code>[PriceTarget](src/models/price-target.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recommendationTrends(request: StockEstimates.RecommendationTrendsRequest, options?: RequestOptions): ApiPromise&lt;RecommendationTrend[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get latest analyst recommendation trends for a company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.recommendationTrends({ symbol: "some example string" });
  // TODO: Handle 'response' of type RecommendationTrend[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.recommendationTrends({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecommendationTrend[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.recommendationTrends(request)`

- **OnSuccess**: <code>[RecommendationTrend](src/models/recommendation-trend.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.recommendationTrends(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecommendationTrend[], ApiError&gt;</code>, with `result.value` of type <code>[RecommendationTrend](src/models/recommendation-trend.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revenueBreakdown(request: StockEstimates.RevenueBreakdownRequest, options?: RequestOptions): ApiPromise&lt;RevenueBreakdown, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get revenue breakdown as-reporetd by product and geography. Users on personal plans can access data for US companies which disclose their revenue breakdown in the annual or quarterly reports.</p><p>Global standardized revenue breakdown/segments data is available for Enterprise users. <a href="mailto:support@finnhub.io">Contact us</a> to inquire about the access for Global standardized data.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.revenueBreakdown();
  // TODO: Handle 'response' of type RevenueBreakdown
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.revenueBreakdown().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevenueBreakdown
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol. |
| <code>cik?</code> | <code>string</code> | CIK. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.revenueBreakdown(request)`

- **OnSuccess**: <code>[RevenueBreakdown](src/models/revenue-breakdown.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.revenueBreakdown(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevenueBreakdown, ApiError&gt;</code>, with `result.value` of type <code>[RevenueBreakdown](src/models/revenue-breakdown.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revenueBreakdown2(request: StockEstimates.RevenueBreakdown2Request, options?: RequestOptions): ApiPromise&lt;RevenueBreakdown2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get standardized revenue breakdown and KPIs data for 30,000+ global companies.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.revenueBreakdown2({ symbol: "some example string" });
  // TODO: Handle 'response' of type RevenueBreakdown2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.revenueBreakdown2({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevenueBreakdown2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.revenueBreakdown2(request)`

- **OnSuccess**: <code>[RevenueBreakdown2](src/models/revenue-breakdown2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.revenueBreakdown2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevenueBreakdown2, ApiError&gt;</code>, with `result.value` of type <code>[RevenueBreakdown2](src/models/revenue-breakdown2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upgradeDowngrade(request: StockEstimates.UpgradeDowngradeRequest, options?: RequestOptions): ApiPromise&lt;UpgradeDowngrade[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get latest stock upgrade and downgrade.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockEstimates.upgradeDowngrade();
  // TODO: Handle 'response' of type UpgradeDowngrade[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockEstimates.upgradeDowngrade().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpgradeDowngrade[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol of the company: AAPL. If left blank, the API will return latest stock upgrades/downgrades. |
| <code>from?</code> | <code>string</code> (date) | From date: 2000-03-15. |
| <code>to?</code> | <code>string</code> (date) | To date: 2020-03-16. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockEstimates.upgradeDowngrade(request)`

- **OnSuccess**: <code>[UpgradeDowngrade](src/models/upgrade-downgrade.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockEstimates.upgradeDowngrade(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpgradeDowngrade[], ApiError&gt;</code>, with `result.value` of type <code>[UpgradeDowngrade](src/models/upgrade-downgrade.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StockFundamentals

> Source: [StockFundamentals](src/resources/stock-fundamentals.ts)

<details>
<summary><code>companyBasicFinancials(request: StockFundamentals.CompanyBasicFinancialsRequest, options?: RequestOptions): ApiPromise&lt;BasicFinancials, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company basic financials such as margin, P/E ratio, 52-week high/low etc.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.companyBasicFinancials({
    symbol: "some example string",
    metric: "some example string",
  });
  // TODO: Handle 'response' of type BasicFinancials
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.companyBasicFinancials({
  symbol: "some example string",
  metric: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BasicFinancials
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>metric</code> | <code>string</code> | Metric type. Can be 1 of the following values <code>all</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.companyBasicFinancials(request)`

- **OnSuccess**: <code>[BasicFinancials](src/models/basic-financials.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.companyBasicFinancials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BasicFinancials, ApiError&gt;</code>, with `result.value` of type <code>[BasicFinancials](src/models/basic-financials.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyEsgScore(request: StockFundamentals.CompanyEsgScoreRequest, options?: RequestOptions): ApiPromise&lt;CompanyEsg, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>This endpoint provides the latest ESG scores and important indicators for 7000+ global companies. The data is collected through company's public ESG disclosure and public sources.</p><p>Our ESG scoring models takes into account more than 150 different inputs to calculate the level of ESG risks and how well a company is managing them. A higher score means lower ESG risk or better ESG management. ESG scores are in the the range of 0-100. Some key indicators might contain letter-grade score from C- to A+ with C- is the lowest score and A+ is the highest score.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.companyEsgScore({ symbol: "some example string" });
  // TODO: Handle 'response' of type CompanyEsg
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.companyEsgScore({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyEsg
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.companyEsgScore(request)`

- **OnSuccess**: <code>[CompanyEsg](src/models/company-esg.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.companyEsgScore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyEsg, ApiError&gt;</code>, with `result.value` of type <code>[CompanyEsg](src/models/company-esg.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyExecutive(request: StockFundamentals.CompanyExecutiveRequest, options?: RequestOptions): ApiPromise&lt;CompanyExecutive, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of company's executives and members of the Board.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.companyExecutive({ symbol: "some example string" });
  // TODO: Handle 'response' of type CompanyExecutive
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.companyExecutive({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyExecutive
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.companyExecutive(request)`

- **OnSuccess**: <code>[CompanyExecutive](src/models/company-executive.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.companyExecutive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyExecutive, ApiError&gt;</code>, with `result.value` of type <code>[CompanyExecutive](src/models/company-executive.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyHistoricalEsgScore(request: StockFundamentals.CompanyHistoricalEsgScoreRequest, options?: RequestOptions): ApiPromise&lt;HistoricalCompanyEsg, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>This endpoint provides historical ESG scores and important indicators for 7000+ global companies. The data is collected through company's public ESG disclosure and public sources.</p><p>Our ESG scoring models takes into account more than 150 different inputs to calculate the level of ESG risks and how well a company is managing them. A higher score means lower ESG risk or better ESG management. ESG scores are in the the range of 0-100. Some key indicators might contain letter-grade score from C- to A+ with C- is the lowest score and A+ is the highest score.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.companyHistoricalEsgScore({
    symbol: "some example string",
  });
  // TODO: Handle 'response' of type HistoricalCompanyEsg
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.companyHistoricalEsgScore({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoricalCompanyEsg
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.companyHistoricalEsgScore(request)`

- **OnSuccess**: <code>[HistoricalCompanyEsg](src/models/historical-company-esg.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.companyHistoricalEsgScore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoricalCompanyEsg, ApiError&gt;</code>, with `result.value` of type <code>[HistoricalCompanyEsg](src/models/historical-company-esg.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyProfile(request: StockFundamentals.CompanyProfileRequest, options?: RequestOptions): ApiPromise&lt;CompanyProfile, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get general information of a company. You can query by symbol, ISIN or CUSIP

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.companyProfile();
  // TODO: Handle 'response' of type CompanyProfile
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.companyProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyProfile
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol of the company: AAPL e.g. |
| <code>isin?</code> | <code>string</code> | ISIN |
| <code>cusip?</code> | <code>string</code> | CUSIP |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.companyProfile(request)`

- **OnSuccess**: <code>[CompanyProfile](src/models/company-profile.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.companyProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyProfile, ApiError&gt;</code>, with `result.value` of type <code>[CompanyProfile](src/models/company-profile.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companyProfile2(request: StockFundamentals.CompanyProfile2Request, options?: RequestOptions): ApiPromise&lt;CompanyProfile2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get general information of a company. You can query by symbol, ISIN or CUSIP. This is the free version of <a href="#company-profile">Company Profile</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.companyProfile2();
  // TODO: Handle 'response' of type CompanyProfile2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.companyProfile2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyProfile2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol of the company: AAPL e.g. |
| <code>isin?</code> | <code>string</code> | ISIN |
| <code>cusip?</code> | <code>string</code> | CUSIP |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.companyProfile2(request)`

- **OnSuccess**: <code>[CompanyProfile2](src/models/company-profile2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.companyProfile2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyProfile2, ApiError&gt;</code>, with `result.value` of type <code>[CompanyProfile2](src/models/company-profile2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>earningsCallLive(request: StockFundamentals.EarningsCallLiveRequest, options?: RequestOptions): ApiPromise&lt;EarningsCallLive, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Stream live earnings calls with data provided in the calendar. The data will be available in m3u8 format. mp3 files will be available once the calls finish in the <code>recording</code> field.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.earningsCallLive();
  // TODO: Handle 'response' of type EarningsCallLive
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.earningsCallLive().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EarningsCallLive
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from?</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to?</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |
| <code>symbol?</code> | <code>string</code> | Filter by symbol: AAPL. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.earningsCallLive(request)`

- **OnSuccess**: <code>[EarningsCallLive](src/models/earnings-call-live.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.earningsCallLive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EarningsCallLive, ApiError&gt;</code>, with `result.value` of type <code>[EarningsCallLive](src/models/earnings-call-live.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filings(request: StockFundamentals.FilingsRequest, options?: RequestOptions): ApiPromise&lt;Filing[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List company's filing. Limit to 250 documents at a time. This data is available for bulk download on <a href="https://www.kaggle.com/finnhub/sec-filings" target="_blank">Kaggle SEC Filings database</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.filings();
  // TODO: Handle 'response' of type Filing[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.filings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Filing[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol. Leave <code>symbol</code>,<code>cik</code> and <code>accessNumber</code> empty to list latest filings. |
| <code>cik?</code> | <code>string</code> | CIK. |
| <code>accessNumber?</code> | <code>string</code> | Access number of a specific report you want to retrieve data from. |
| <code>form?</code> | <code>string</code> | Filter by form. You can use this value <code>NT 10-K</code> to find non-timely filings for a company. |
| <code>from?</code> | <code>string</code> (date) | From date: 2023-03-15. |
| <code>to?</code> | <code>string</code> (date) | To date: 2023-03-16. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.filings(request)`

- **OnSuccess**: <code>[Filing](src/models/filing.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.filings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Filing[], ApiError&gt;</code>, with `result.value` of type <code>[Filing](src/models/filing.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filingsSentiment(request: StockFundamentals.FilingsSentimentRequest, options?: RequestOptions): ApiPromise&lt;SecSentimentAnalysis, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get sentiment analysis of 10-K and 10-Q filings from SEC. An abnormal increase in the number of positive/negative words in filings can signal a significant change in the company's stock price in the upcoming 4 quarters. We make use of <a href= "https://sraf.nd.edu/textual-analysis/resources/" target="_blank">Loughran and McDonald Sentiment Word Lists</a> to calculate the sentiment for each filing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.filingsSentiment({ accessNumber: "some example string" });
  // TODO: Handle 'response' of type SecSentimentAnalysis
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.filingsSentiment({
  accessNumber: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SecSentimentAnalysis
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accessNumber</code> | <code>string</code> | Access number of a specific report you want to retrieve data from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.filingsSentiment(request)`

- **OnSuccess**: <code>[SecSentimentAnalysis](src/models/sec-sentiment-analysis.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.filingsSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SecSentimentAnalysis, ApiError&gt;</code>, with `result.value` of type <code>[SecSentimentAnalysis](src/models/sec-sentiment-analysis.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>financials(request: StockFundamentals.FinancialsRequest, options?: RequestOptions): ApiPromise&lt;FinancialStatements, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get standardized balance sheet, income statement and cash flow for global companies going back 30+ years. Data is sourced from original filings most of which made available through <a href="#filings">SEC Filings</a> and <a href="#international-filings">International Filings</a> endpoints.</p><p>Set <code>preliminary</code> param to true for faster updates for US companies.</p><p><i>Wondering why our standardized data is different from Bloomberg, Reuters, Factset, S&P or Yahoo Finance ? Check out our <a href="/faq">FAQ page</a> to learn more</i></p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.financials({
    symbol: "some example string",
    statement: "some example string",
    freq: "some example string",
  });
  // TODO: Handle 'response' of type FinancialStatements
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.financials({
  symbol: "some example string",
  statement: "some example string",
  freq: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FinancialStatements
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>statement</code> | <code>string</code> | Statement can take 1 of these values <code>bs, ic, cf</code> for Balance Sheet, Income Statement, Cash Flow respectively. |
| <code>freq</code> | <code>string</code> | Frequency can take 1 of these values <code>annual, quarterly, ttm, ytd</code>.  TTM (Trailing Twelve Months) option is available for Income Statement and Cash Flow. YTD (Year To Date) option is only available for Cash Flow. |
| <code>preliminary?</code> | <code>string</code> | If set to <code>true</code>, it will return Preliminary financial statements for the latest period which are usually available within an hour of the earnings announcement if finalized data is not available yet. This preliminary data is currently available for US companies. You will see <code>"preliminary": true</code> in the data if that period is using preliminary data. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.financials(request)`

- **OnSuccess**: <code>[FinancialStatements](src/models/financial-statements.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.financials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FinancialStatements, ApiError&gt;</code>, with `result.value` of type <code>[FinancialStatements](src/models/financial-statements.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>financialsReported(request: StockFundamentals.FinancialsReportedRequest, options?: RequestOptions): ApiPromise&lt;FinancialsAsReported, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get financials as reported. This data is available for bulk download on <a href="https://www.kaggle.com/finnhub/reported-financials" target="_blank">Kaggle SEC Financials database</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.financialsReported();
  // TODO: Handle 'response' of type FinancialsAsReported
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.financialsReported().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FinancialsAsReported
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol. |
| <code>cik?</code> | <code>string</code> | CIK. |
| <code>accessNumber?</code> | <code>string</code> | Access number of a specific report you want to retrieve financials from. |
| <code>freq?</code> | <code>string</code> | Frequency. Can be either <code>annual</code> or <code>quarterly</code>. Default to <code>annual</code>. |
| <code>from?</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. Filter for endDate. |
| <code>to?</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. Filter for endDate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.financialsReported(request)`

- **OnSuccess**: <code>[FinancialsAsReported](src/models/financials-as-reported.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.financialsReported(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FinancialsAsReported, ApiError&gt;</code>, with `result.value` of type <code>[FinancialsAsReported](src/models/financials-as-reported.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>historicalEmployeeCount(request: StockFundamentals.HistoricalEmployeeCountRequest, options?: RequestOptions): ApiPromise&lt;HistoricalEmployeeCount, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get historical employee count for global companies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.historicalEmployeeCount({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type HistoricalEmployeeCount
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.historicalEmployeeCount({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoricalEmployeeCount
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.historicalEmployeeCount(request)`

- **OnSuccess**: <code>[HistoricalEmployeeCount](src/models/historical-employee-count.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.historicalEmployeeCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoricalEmployeeCount, ApiError&gt;</code>, with `result.value` of type <code>[HistoricalEmployeeCount](src/models/historical-employee-count.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>internationalFilings(request: StockFundamentals.InternationalFilingsRequest, options?: RequestOptions): ApiPromise&lt;InternationalFiling[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List filings for international companies. Limit to 500 documents at a time. These are the documents we use to source our fundamental data. Enterprise clients who need access to the full filings for global markets should contact us for the access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.internationalFilings();
  // TODO: Handle 'response' of type InternationalFiling[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.internationalFilings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InternationalFiling[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol. Leave empty to list latest filings. |
| <code>country?</code> | <code>string</code> | Filter by country using country's 2-letter code. |
| <code>from?</code> | <code>string</code> (date) | From date: 2023-01-15. |
| <code>to?</code> | <code>string</code> (date) | To date: 2023-12-16. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.internationalFilings(request)`

- **OnSuccess**: <code>[InternationalFiling](src/models/international-filing.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.internationalFilings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InternationalFiling[], ApiError&gt;</code>, with `result.value` of type <code>[InternationalFiling](src/models/international-filing.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newsroom(request: StockFundamentals.NewsroomRequest, options?: RequestOptions): ApiPromise&lt;Newsroom, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get latest articles posted directly on the companies' newsroom and investor relations page. Newsroom API along with the Press Releases API provide a comprehensive text-based dataset directly from the company. We currently cover 1,250 US Companies with this dataset.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.newsroom({ symbol: "some example string" });
  // TODO: Handle 'response' of type Newsroom
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.newsroom({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Newsroom
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |
| <code>from?</code> | <code>string</code> (date) | From time: 2025-01-01. |
| <code>to?</code> | <code>string</code> (date) | To time: 2026-01-05. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.newsroom(request)`

- **OnSuccess**: <code>[Newsroom](src/models/newsroom.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.newsroom(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Newsroom, ApiError&gt;</code>, with `result.value` of type <code>[Newsroom](src/models/newsroom.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>similarityIndex(request: StockFundamentals.SimilarityIndexRequest, options?: RequestOptions): ApiPromise&lt;SimilarityIndex, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Calculate the textual difference between a company's 10-K / 10-Q reports and the same type of report in the previous year using Cosine Similarity. For example, this endpoint compares 2019's 10-K with 2018's 10-K. Companies breaking from its routines in disclosure of financial condition and risk analysis section can signal a significant change in the company's stock price in the upcoming 4 quarters.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.similarityIndex();
  // TODO: Handle 'response' of type SimilarityIndex
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.similarityIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimilarityIndex
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Symbol. Required if cik is empty |
| <code>cik?</code> | <code>string</code> | CIK. Required if symbol is empty |
| <code>freq?</code> | <code>string</code> | <code>annual</code> or <code>quarterly</code>. Default to <code>annual</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.similarityIndex(request)`

- **OnSuccess**: <code>[SimilarityIndex](src/models/similarity-index.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.similarityIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimilarityIndex, ApiError&gt;</code>, with `result.value` of type <code>[SimilarityIndex](src/models/similarity-index.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockPresentation(request: StockFundamentals.StockPresentationRequest, options?: RequestOptions): ApiPromise&lt;StockPresentation, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get presentations/slides data in PDF format that are usually used during earnings calls. You can get a list of supported symbols <a target="_blank" href="/api/v1/stock/presentation/symbol?token=">here</a></p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.stockPresentation({ symbol: "some example string" });
  // TODO: Handle 'response' of type StockPresentation
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.stockPresentation({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StockPresentation
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.stockPresentation(request)`

- **OnSuccess**: <code>[StockPresentation](src/models/stock-presentation.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.stockPresentation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StockPresentation, ApiError&gt;</code>, with `result.value` of type <code>[StockPresentation](src/models/stock-presentation.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transcripts(request: StockFundamentals.TranscriptsRequest, options?: RequestOptions): ApiPromise&lt;EarningsCallTranscripts, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get earnings call transcripts, audio and participants' list. Data is available for US, UK, European, Australian and Canadian companies.<p>15+ years of data is available with 220,000+ audio which add up to 7TB in size.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.transcripts({ id: "some example string" });
  // TODO: Handle 'response' of type EarningsCallTranscripts
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.transcripts({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EarningsCallTranscripts
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Transcript's id obtained with <a href="#transcripts-list">Transcripts List endpoint</a>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.transcripts(request)`

- **OnSuccess**: <code>[EarningsCallTranscripts](src/models/earnings-call-transcripts.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.transcripts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EarningsCallTranscripts, ApiError&gt;</code>, with `result.value` of type <code>[EarningsCallTranscripts](src/models/earnings-call-transcripts.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transcriptsList(request: StockFundamentals.TranscriptsListRequest, options?: RequestOptions): ApiPromise&lt;EarningsCallTranscriptsList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List earnings call transcripts' metadata. This endpoint is available for Global companies. You can get a list of supported symbols <a target="_blank" href="/api/v1/stock/transcripts/symbol?token=">here</a>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockFundamentals.transcriptsList({ symbol: "some example string" });
  // TODO: Handle 'response' of type EarningsCallTranscriptsList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockFundamentals.transcriptsList({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EarningsCallTranscriptsList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol: AAPL. Leave empty to list the latest transcripts |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockFundamentals.transcriptsList(request)`

- **OnSuccess**: <code>[EarningsCallTranscriptsList](src/models/earnings-call-transcripts-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockFundamentals.transcriptsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EarningsCallTranscriptsList, ApiError&gt;</code>, with `result.value` of type <code>[EarningsCallTranscriptsList](src/models/earnings-call-transcripts-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StockOwnership

> Source: [StockOwnership](src/resources/stock-ownership.ts)

<details>
<summary><code>congressionalTrading(request: StockOwnership.CongressionalTradingRequest, options?: RequestOptions): ApiPromise&lt;CongressionalTrading, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get stock trades data disclosed by members of congress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.congressionalTrading({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type CongressionalTrading
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.congressionalTrading({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CongressionalTrading
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.congressionalTrading(request)`

- **OnSuccess**: <code>[CongressionalTrading](src/models/congressional-trading.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.congressionalTrading(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CongressionalTrading, ApiError&gt;</code>, with `result.value` of type <code>[CongressionalTrading](src/models/congressional-trading.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundOwnership(request: StockOwnership.FundOwnershipRequest, options?: RequestOptions): ApiPromise&lt;FundOwnership, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a full list fund and institutional investors of a company in descending order of the number of shares held. Data is sourced from <code>13F form</code>, <code>Schedule 13D</code> and <code>13G</code> for US market, <code>UK Share Register</code> for UK market, <code>SEDI</code> for Canadian market and equivalent filings for other international markets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.fundOwnership({ symbol: "some example string" });
  // TODO: Handle 'response' of type FundOwnership
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.fundOwnership({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundOwnership
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>limit?</code> | <code>number</code> | Limit number of results. Leave empty to get the full list. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.fundOwnership(request)`

- **OnSuccess**: <code>[FundOwnership](src/models/fund-ownership.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.fundOwnership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundOwnership, ApiError&gt;</code>, with `result.value` of type <code>[FundOwnership](src/models/fund-ownership.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insiderSentiment(request: StockOwnership.InsiderSentimentRequest, options?: RequestOptions): ApiPromise&lt;InsiderSentiments, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get insider sentiment data for US companies calculated using method discussed <a href="https://medium.com/@stock-api/finnhub-insiders-sentiment-analysis-cc43f9f64b3a" target="_blank">here</a>. The MSPR ranges from -100 for the most negative to 100 for the most positive which can signal price changes in the coming 30-90 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.insiderSentiment({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type InsiderSentiments
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.insiderSentiment({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsiderSentiments
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>from</code> | <code>string</code> (date) | From date: 2020-03-15. |
| <code>to</code> | <code>string</code> (date) | To date: 2020-03-16. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.insiderSentiment(request)`

- **OnSuccess**: <code>[InsiderSentiments](src/models/insider-sentiments.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.insiderSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsiderSentiments, ApiError&gt;</code>, with `result.value` of type <code>[InsiderSentiments](src/models/insider-sentiments.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insiderTransactions(request: StockOwnership.InsiderTransactionsRequest, options?: RequestOptions): ApiPromise&lt;InsiderTransactions, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Company insider transactions data sourced from <code>Form 3,4,5</code>, SEDI and relevant companies' filings. This endpoint covers US, UK, Canada, Australia, India, and all major EU markets. Limit to 100 transactions per API call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.insiderTransactions({ symbol: "some example string" });
  // TODO: Handle 'response' of type InsiderTransactions
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.insiderTransactions({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsiderTransactions
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. Leave this param blank to get the latest transactions. |
| <code>from?</code> | <code>string</code> (date) | From date: 2020-03-15. |
| <code>to?</code> | <code>string</code> (date) | To date: 2020-03-16. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.insiderTransactions(request)`

- **OnSuccess**: <code>[InsiderTransactions](src/models/insider-transactions.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.insiderTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsiderTransactions, ApiError&gt;</code>, with `result.value` of type <code>[InsiderTransactions](src/models/insider-transactions.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>investmentThemes(request: StockOwnership.InvestmentThemesRequest, options?: RequestOptions): ApiPromise&lt;InvestmentThemes, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Thematic investing involves creating a portfolio (or portion of a portfolio) by gathering together a collection of companies involved in certain areas that you predict will generate above-market returns over the long term. Themes can be based on a concept such as ageing populations or a sub-sector such as robotics, and drones. Thematic investing focuses on predicted long-term trends rather than specific companies or sectors, enabling investors to access structural, one-off shifts that can change an entire industry.</p><p>This endpoint will help you get portfolios of different investment themes that are changing our life and are the way of the future.</p><p>A full list of themes supported can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp=sharing">here</a>. The theme coverage and portfolios are updated bi-weekly by our analysts. Our approach excludes penny, super-small cap and illiquid stocks.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.investmentThemes({ theme: "some example string" });
  // TODO: Handle 'response' of type InvestmentThemes
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.investmentThemes({ theme: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvestmentThemes
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>theme</code> | <code>string</code> | Investment theme. A full list of themes supported can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ULj9xDh4iPoQj279M084adZ2_S852ttRthKKJ7madYc/edit?usp=sharing">here</a>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.investmentThemes(request)`

- **OnSuccess**: <code>[InvestmentThemes](src/models/investment-themes.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.investmentThemes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvestmentThemes, ApiError&gt;</code>, with `result.value` of type <code>[InvestmentThemes](src/models/investment-themes.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ownership(request: StockOwnership.OwnershipRequest, options?: RequestOptions): ApiPromise&lt;Ownership, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a full list of shareholders of a company in descending order of the number of shares held. Data is sourced from <code>13F form</code>, <code>Schedule 13D</code> and <code>13G</code> for US market, <code>UK Share Register</code> for UK market, <code>SEDI</code> for Canadian market and equivalent filings for other international markets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.ownership({ symbol: "some example string" });
  // TODO: Handle 'response' of type Ownership
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.ownership({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ownership
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>limit?</code> | <code>number</code> | Limit number of results. Leave empty to get the full list. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.ownership(request)`

- **OnSuccess**: <code>[Ownership](src/models/ownership.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.ownership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ownership, ApiError&gt;</code>, with `result.value` of type <code>[Ownership](src/models/ownership.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialSentiment(request: StockOwnership.SocialSentimentRequest, options?: RequestOptions): ApiPromise&lt;SocialSentiment, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get social sentiment for stocks on Reddit and Twitter.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.socialSentiment({ symbol: "some example string" });
  // TODO: Handle 'response' of type SocialSentiment
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.socialSentiment({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SocialSentiment
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |
| <code>from?</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to?</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.socialSentiment(request)`

- **OnSuccess**: <code>[SocialSentiment](src/models/social-sentiment.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.socialSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SocialSentiment, ApiError&gt;</code>, with `result.value` of type <code>[SocialSentiment](src/models/social-sentiment.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockLobbying(request: StockOwnership.StockLobbyingRequest, options?: RequestOptions): ApiPromise&lt;LobbyingResult, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of reported lobbying activities in the Senate and the House.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.stockLobbying({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type LobbyingResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.stockLobbying({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LobbyingResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.stockLobbying(request)`

- **OnSuccess**: <code>[LobbyingResult](src/models/lobbying-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.stockLobbying(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LobbyingResult, ApiError&gt;</code>, with `result.value` of type <code>[LobbyingResult](src/models/lobbying-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockUsaSpending(request: StockOwnership.StockUsaSpendingRequest, options?: RequestOptions): ApiPromise&lt;UsaSpendingResult, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get a list of government's spending activities from USASpending dataset for public companies. This dataset can help you identify companies that win big government contracts which is extremely important for industries such as Defense, Aerospace, and Education. Only recent data is available via the API.</p><p>For historical data, you can download it here: <a href="/api/v1/stock/usa-spending?fileId=before_2021&token=" target="_blank">Pre-2021</a>, <a href="/api/v1/stock/usa-spending?fileId=2021&token=" target="_blank">2021</a>, <a href="/api/v1/stock/usa-spending?fileId=2022&token=" target="_blank">2022</a>, <a href="/api/v1/stock/usa-spending?fileId=2023&token=" target="_blank">2023</a>, <a href="/api/v1/stock/usa-spending?fileId=2024&token=" target="_blank">2024</a></p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.stockUsaSpending({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type UsaSpendingResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.stockUsaSpending({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsaSpendingResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. Filter for <code>actionDate</code> |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. Filter for <code>actionDate</code> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.stockUsaSpending(request)`

- **OnSuccess**: <code>[UsaSpendingResult](src/models/usa-spending-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.stockUsaSpending(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsaSpendingResult, ApiError&gt;</code>, with `result.value` of type <code>[UsaSpendingResult](src/models/usa-spending-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockUsptoPatent(request: StockOwnership.StockUsptoPatentRequest, options?: RequestOptions): ApiPromise&lt;UsptoPatentResult, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List USPTO patents for companies. Limit to 250 records per API call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.stockUsptoPatent({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type UsptoPatentResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.stockUsptoPatent({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsptoPatentResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.stockUsptoPatent(request)`

- **OnSuccess**: <code>[UsptoPatentResult](src/models/uspto-patent-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.stockUsptoPatent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsptoPatentResult, ApiError&gt;</code>, with `result.value` of type <code>[UsptoPatentResult](src/models/uspto-patent-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockVisaApplication(request: StockOwnership.StockVisaApplicationRequest, options?: RequestOptions): ApiPromise&lt;VisaApplicationResult, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of H1-B and Permanent visa applications for companies from the DOL. The data is updated quarterly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.stockVisaApplication({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type VisaApplicationResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.stockVisaApplication({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VisaApplicationResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. Filter on the <code>beginDate</code> column. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. Filter on the <code>beginDate</code> column. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.stockVisaApplication(request)`

- **OnSuccess**: <code>[VisaApplicationResult](src/models/visa-application-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.stockVisaApplication(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VisaApplicationResult, ApiError&gt;</code>, with `result.value` of type <code>[VisaApplicationResult](src/models/visa-application-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>supplyChainRelationships(request: StockOwnership.SupplyChainRelationshipsRequest, options?: RequestOptions): ApiPromise&lt;SupplyChainRelationships, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>This endpoint provides an overall map of public companies' key customers and suppliers. The data offers a deeper look into a company's supply chain and how products are created. The data will help investors manage risk, limit exposure or generate alpha-generating ideas and trading insights.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockOwnership.supplyChainRelationships({ symbol: "some example string" });
  // TODO: Handle 'response' of type SupplyChainRelationships
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockOwnership.supplyChainRelationships({
  symbol: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupplyChainRelationships
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockOwnership.supplyChainRelationships(request)`

- **OnSuccess**: <code>[SupplyChainRelationships](src/models/supply-chain-relationships.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockOwnership.supplyChainRelationships(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupplyChainRelationships, ApiError&gt;</code>, with `result.value` of type <code>[SupplyChainRelationships](src/models/supply-chain-relationships.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StockPrices

> Source: [StockPrices](src/resources/stock-prices.ts)

<details>
<summary><code>companyPeers(request: StockPrices.CompanyPeersRequest, options?: RequestOptions): ApiPromise&lt;string[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company peers. Return a list of peers operating in the same country and sector/industry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.companyPeers({ symbol: "some example string" });
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.companyPeers({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>grouping?</code> | <code>string</code> | Specify the grouping criteria for choosing peers.Supporter values: <code>sector</code>, <code>industry</code>, <code>subIndustry</code>. Default to <code>subIndustry</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.companyPeers(request)`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.companyPeers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ApiError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>historicalMarketCap(request: StockPrices.HistoricalMarketCapRequest, options?: RequestOptions): ApiPromise&lt;HistoricalMarketCapData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get historical market cap data for global companies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.historicalMarketCap({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type HistoricalMarketCapData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.historicalMarketCap({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoricalMarketCapData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Company symbol. |
| <code>from</code> | <code>string</code> (date) | From date <code>YYYY-MM-DD</code>. |
| <code>to</code> | <code>string</code> (date) | To date <code>YYYY-MM-DD</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.historicalMarketCap(request)`

- **OnSuccess**: <code>[HistoricalMarketCapData](src/models/historical-market-cap-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.historicalMarketCap(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoricalMarketCapData, ApiError&gt;</code>, with `result.value` of type <code>[HistoricalMarketCapData](src/models/historical-market-cap-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marketHoliday(request: StockPrices.MarketHolidayRequest, options?: RequestOptions): ApiPromise&lt;MarketHoliday, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of holidays for global exchanges.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.marketHoliday({ exchange: "some example string" });
  // TODO: Handle 'response' of type MarketHoliday
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.marketHoliday({ exchange: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MarketHoliday
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>string</code> | Exchange code. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.marketHoliday(request)`

- **OnSuccess**: <code>[MarketHoliday](src/models/market-holiday.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.marketHoliday(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MarketHoliday, ApiError&gt;</code>, with `result.value` of type <code>[MarketHoliday](src/models/market-holiday.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marketStatus(request: StockPrices.MarketStatusRequest, options?: RequestOptions): ApiPromise&lt;MarketStatus, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current market status for global exchanges (whether exchanges are open or close).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.marketStatus({ exchange: "some example string" });
  // TODO: Handle 'response' of type MarketStatus
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.marketStatus({ exchange: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MarketStatus
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>string</code> | Exchange code. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.marketStatus(request)`

- **OnSuccess**: <code>[MarketStatus](src/models/market-status.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.marketStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MarketStatus, ApiError&gt;</code>, with `result.value` of type <code>[MarketStatus](src/models/market-status.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>priceMetrics(request: StockPrices.PriceMetricsRequest, options?: RequestOptions): ApiPromise&lt;PriceMetrics, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company price performance statistics such as 52-week high/low, YTD return and much more.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.priceMetrics({ symbol: "some example string" });
  // TODO: Handle 'response' of type PriceMetrics
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.priceMetrics({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PriceMetrics
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol of the company: AAPL. |
| <code>date?</code> | <code>string</code> | Get data on a specific date in the past. The data is available weekly so your date will be automatically adjusted to the last day of that week. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.priceMetrics(request)`

- **OnSuccess**: <code>[PriceMetrics](src/models/price-metrics.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.priceMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PriceMetrics, ApiError&gt;</code>, with `result.value` of type <code>[PriceMetrics](src/models/price-metrics.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockBasicDividends(request: StockPrices.StockBasicDividendsRequest, options?: RequestOptions): ApiPromise&lt;Dividends2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get global dividends data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockBasicDividends({ symbol: "some example string" });
  // TODO: Handle 'response' of type Dividends2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockBasicDividends({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dividends2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockBasicDividends(request)`

- **OnSuccess**: <code>[Dividends2](src/models/dividends2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockBasicDividends(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dividends2, ApiError&gt;</code>, with `result.value` of type <code>[Dividends2](src/models/dividends2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockBidask(request: StockPrices.StockBidaskRequest, options?: RequestOptions): ApiPromise&lt;LastBidAsk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get last bid/ask data for US stocks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockBidask({ symbol: "some example string" });
  // TODO: Handle 'response' of type LastBidAsk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockBidask({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LastBidAsk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockBidask(request)`

- **OnSuccess**: <code>[LastBidAsk](src/models/last-bid-ask.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockBidask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LastBidAsk, ApiError&gt;</code>, with `result.value` of type <code>[LastBidAsk](src/models/last-bid-ask.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockCandles(request: StockPrices.StockCandlesRequest, options?: RequestOptions): ApiPromise&lt;StockCandles, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get candlestick data (OHLCV) for stocks.</p><p>Daily data will be adjusted for Splits. Intraday data will remain unadjusted. Only 1 month of intraday will be returned at a time. If you need more historical intraday data, please use the from and to params iteratively to request more data.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockCandles({
    symbol: "some example string",
    resolution: "some example string",
    from: 1,
    to: 1,
  });
  // TODO: Handle 'response' of type StockCandles
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockCandles({
  symbol: "some example string",
  resolution: "some example string",
  from: 1,
  to: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StockCandles
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>resolution</code> | <code>string</code> | Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might not be available depending on the exchange. |
| <code>from</code> | <code>number</code> | UNIX timestamp. Interval initial value. |
| <code>to</code> | <code>number</code> | UNIX timestamp. Interval end value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockCandles(request)`

- **OnSuccess**: <code>[StockCandles](src/models/stock-candles.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockCandles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StockCandles, ApiError&gt;</code>, with `result.value` of type <code>[StockCandles](src/models/stock-candles.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockDividends(request: StockPrices.StockDividendsRequest, options?: RequestOptions): ApiPromise&lt;Dividends[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get dividends data for common stocks going back 30 years.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockDividends({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type Dividends[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockDividends({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dividends[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>from</code> | <code>string</code> (date) | YYYY-MM-DD. |
| <code>to</code> | <code>string</code> (date) | YYYY-MM-DD. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockDividends(request)`

- **OnSuccess**: <code>[Dividends](src/models/dividends.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockDividends(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dividends[], ApiError&gt;</code>, with `result.value` of type <code>[Dividends](src/models/dividends.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockNbbo(request: StockPrices.StockNbboRequest, options?: RequestOptions): ApiPromise&lt;HistoricalNbbo, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get historical best bid and offer for US stocks, LSE, TSX, Euronext and Deutsche Borse.</p><p>For US market, this endpoint only serves historical NBBO from the beginning of 2023. To download more historical data, please visit our bulk download page in the Dashboard <a target="_blank" href="/dashboard/download",>here</a>.</p>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockNbbo({
    symbol: "some example string",
    date: "2024-01-15",
    limit: 1,
    skip: 1,
  });
  // TODO: Handle 'response' of type HistoricalNbbo
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockNbbo({
  symbol: "some example string",
  date: "2024-01-15",
  limit: 1,
  skip: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoricalNbbo
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>date</code> | <code>string</code> (date) | Date: 2020-04-02. |
| <code>limit</code> | <code>number</code> | Limit number of ticks returned. Maximum value: <code>25000</code> |
| <code>skip</code> | <code>number</code> | Number of ticks to skip. Use this parameter to loop through the entire data. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockNbbo(request)`

- **OnSuccess**: <code>[HistoricalNbbo](src/models/historical-nbbo.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockNbbo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoricalNbbo, ApiError&gt;</code>, with `result.value` of type <code>[HistoricalNbbo](src/models/historical-nbbo.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockSplits(request: StockPrices.StockSplitsRequest, options?: RequestOptions): ApiPromise&lt;Split[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get splits data for stocks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockSplits({
    symbol: "some example string",
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type Split[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockSplits({
  symbol: "some example string",
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Split[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>from</code> | <code>string</code> (date) | YYYY-MM-DD. |
| <code>to</code> | <code>string</code> (date) | YYYY-MM-DD. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockSplits(request)`

- **OnSuccess**: <code>[Split](src/models/split.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockSplits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Split[], ApiError&gt;</code>, with `result.value` of type <code>[Split](src/models/split.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockSymbols(request: StockPrices.StockSymbolsRequest, options?: RequestOptions): ApiPromise&lt;StockSymbol[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List supported stocks. We use the following symbology to identify stocks on Finnhub <code>Exchange_Ticker.Exchange_Code</code>. A list of supported exchange codes can be found <a href="https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing" target="_blank">here</a>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockSymbols({ exchange: "some example string" });
  // TODO: Handle 'response' of type StockSymbol[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockSymbols({ exchange: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StockSymbol[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>string</code> | Exchange you want to get the list of symbols from. List of exchange codes can be found <a href="https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit?usp=sharing" target="_blank">here</a>. |
| <code>mic?</code> | <code>string</code> | Filter by MIC code. |
| <code>securityType?</code> | <code>string</code> | Filter by security type used by OpenFigi standard. |
| <code>currency?</code> | <code>string</code> | Filter by currency. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockSymbols(request)`

- **OnSuccess**: <code>[StockSymbol](src/models/stock-symbol.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockSymbols(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StockSymbol[], ApiError&gt;</code>, with `result.value` of type <code>[StockSymbol](src/models/stock-symbol.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockTick(request: StockPrices.StockTickRequest, options?: RequestOptions): ApiPromise&lt;TickData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>Get historical tick data for global exchanges.</p><p>For more historical tick data, you can visit our bulk download page in the Dashboard <a target="_blank" href="/dashboard/download",>here</a> to speed up the download process.</p><table class="table table-hover">
  <thead>
    <tr>
      <th>Exchange</th>
      <th>Segment</th>
      <th>Delay</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-blue">US CTA/UTP</th>
      <td>Full SIP</td>
      <td>End-of-day</td>
    </tr>
    <tr>
      <td class="text-blue">TSX</th>
      <td><ul><li>TSX</li><li>TSX Venture</li><li>Index</li></ul></td>
      <td>End-of-day</td>
    </tr>
    <tr>
      <td class="text-blue">LSE</th>
      <td><ul><li>London Stock Exchange (L)</li><li>LSE International (L)</li><li>LSE European (L)</li></ul></td>
      <td>15 minute</td>
    </tr>
    <tr>
      <td class="text-blue">Euronext</th>
      <td><ul> <li>Euronext Paris (PA)</li> <li>Euronext Amsterdam (AS)</li> <li>Euronext Lisbon (LS)</li> <li>Euronext Brussels (BR)</li> <li>Euronext Oslo (OL)</li> <li>Euronext London (LN)</li> <li>Euronext Dublin (IR)</li> <li>Index</li> <li>Warrant</li></ul></td>
      <td>End-of-day</td>
    </tr>
    <tr>
      <td class="text-blue">Deutsche Börse</th>
      <td><ul> <li>Frankfurt (F)</li> <li>Xetra (DE)</li> <li>Duesseldorf (DU)</li> <li>Hamburg (HM)</li> <li>Berlin (BE)</li> <li>Hanover (HA)</li> <li>Stoxx (SX)</li> <li>TradeGate (TG)</li> <li>Zertifikate (SC)</li> <li>Index</li> <li>Warrant</li></ul></td>
      <td>End-of-day</td>
    </tr>
  </tbody>
</table>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stockPrices.stockTick({
    symbol: "some example string",
    date: "2024-01-15",
    limit: 1,
    skip: 1,
  });
  // TODO: Handle 'response' of type TickData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stockPrices.stockTick({
  symbol: "some example string",
  date: "2024-01-15",
  limit: 1,
  skip: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TickData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Symbol. |
| <code>date</code> | <code>string</code> (date) | Date: 2020-04-02. |
| <code>limit</code> | <code>number</code> | Limit number of ticks returned. Maximum value: <code>25000</code> |
| <code>skip</code> | <code>number</code> | Number of ticks to skip. Use this parameter to loop through the entire data. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stockPrices.stockTick(request)`

- **OnSuccess**: <code>[TickData](src/models/tick-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stockPrices.stockTick(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TickData, ApiError&gt;</code>, with `result.value` of type <code>[TickData](src/models/tick-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinnhubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

