
# Historical Market Cap Data

*This model accepts additional fields of type unknown.*

## Structure

`HistoricalMarketCapData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`MarketCapData[] \| undefined`](../../doc/models/market-cap-data.md) | Optional | Array of market data. |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `currency` | `string \| undefined` | Optional | Currency |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HistoricalMarketCapData } from 'finnhub-apilib';

const historicalMarketCapData: HistoricalMarketCapData = {
  data: [
    {
      atDate: 'atDate6',
      marketCapitalization: 43.06,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      marketCapitalization: 43.06,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      marketCapitalization: 43.06,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  symbol: 'symbol6',
  currency: 'currency4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

