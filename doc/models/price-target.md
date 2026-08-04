
# Price Target

*This model accepts additional fields of type unknown.*

## Structure

`PriceTarget`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `targetHigh` | `number \| undefined` | Optional | Highes analysts' target. |
| `targetLow` | `number \| undefined` | Optional | Lowest analysts' target. |
| `targetMean` | `number \| undefined` | Optional | Mean of all analysts' targets. |
| `targetMedian` | `number \| undefined` | Optional | Median of all analysts' targets. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `lastUpdated` | `string \| undefined` | Optional | Updated time of the data |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PriceTarget } from 'finnhub-apilib';

const priceTarget: PriceTarget = {
  symbol: 'symbol4',
  targetHigh: 246.66,
  targetLow: 166.04,
  targetMean: 92.22,
  targetMedian: 36.52,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

