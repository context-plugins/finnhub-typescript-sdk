
# Stock Symbol

*This model accepts additional fields of type unknown.*

## Structure

`StockSymbol`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Symbol description |
| `displaySymbol` | `string \| undefined` | Optional | Display symbol name. |
| `symbol` | `string \| undefined` | Optional | Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint. |
| `type` | `string \| undefined` | Optional | Security type. |
| `mic` | `string \| undefined` | Optional | Primary exchange's MIC. |
| `figi` | `string \| undefined` | Optional | FIGI identifier. |
| `shareClassFigi` | `string \| undefined` | Optional | Global Share Class FIGI. |
| `currency` | `string \| undefined` | Optional | Price's currency. This might be different from the reporting currency of fundamental data. |
| `symbol2` | `string \| undefined` | Optional | Alternative ticker for exchanges with multiple tickers for 1 stock such as BSE. |
| `isin` | `string \| undefined` | Optional | ISIN. This field is only available for EU stocks and selected Asian markets. Entitlement from Finnhub is required to access this field. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StockSymbol } from 'finnhub-apilib';

const stockSymbol: StockSymbol = {
  description: 'description6',
  displaySymbol: 'displaySymbol6',
  symbol: 'symbol2',
  type: 'type4',
  mic: 'mic8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

