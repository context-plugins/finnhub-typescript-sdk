
# Airline Price Index

*This model accepts additional fields of type unknown.*

## Structure

`AirlinePriceIndex`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| undefined` | Optional | Date |
| `priceIndex` | `number \| undefined` | Optional | Price Index |
| `dailyAvgPrice` | `number \| undefined` | Optional | Daily average ticket price. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AirlinePriceIndex } from 'finnhub-apilib';

const airlinePriceIndex: AirlinePriceIndex = {
  date: 'date0',
  priceIndex: 42.46,
  dailyAvgPrice: 183.5,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

