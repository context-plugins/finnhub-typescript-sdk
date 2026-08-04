
# Airline Price Index Data

*This model accepts additional fields of type unknown.*

## Structure

`AirlinePriceIndexData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AirlinePriceIndex[] \| undefined`](../../doc/models/airline-price-index.md) | Optional | Array of price index. |
| `airline` | `string \| undefined` | Optional | Airline name |
| `from` | `string \| undefined` | Optional | From date |
| `to` | `string \| undefined` | Optional | To date |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AirlinePriceIndexData } from 'finnhub-apilib';

const airlinePriceIndexData: AirlinePriceIndexData = {
  data: [
    {
      date: 'date6',
      priceIndex: 151.42,
      dailyAvgPrice: 36.46,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      date: 'date6',
      priceIndex: 151.42,
      dailyAvgPrice: 36.46,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      date: 'date6',
      priceIndex: 151.42,
      dailyAvgPrice: 36.46,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  airline: 'airline8',
  from: 'from6',
  to: 'to0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

