
# Price Metrics

*This model accepts additional fields of type unknown.*

## Structure

`PriceMetrics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol of the company. |
| `atDate` | `string \| undefined` | Optional | Data date. |
| `data` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PriceMetrics } from 'finnhub-apilib';

const priceMetrics: PriceMetrics = {
  symbol: 'symbol0',
  atDate: 'atDate4',
  data: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

