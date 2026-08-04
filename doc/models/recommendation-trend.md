
# Recommendation Trend

*This model accepts additional fields of type unknown.*

## Structure

`RecommendationTrend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `buy` | `bigint \| undefined` | Optional | Number of recommendations that fall into the Buy category |
| `hold` | `bigint \| undefined` | Optional | Number of recommendations that fall into the Hold category |
| `period` | `string \| undefined` | Optional | Updated period |
| `sell` | `bigint \| undefined` | Optional | Number of recommendations that fall into the Sell category |
| `strongBuy` | `bigint \| undefined` | Optional | Number of recommendations that fall into the Strong Buy category |
| `strongSell` | `bigint \| undefined` | Optional | Number of recommendations that fall into the Strong Sell category |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RecommendationTrend } from 'finnhub-apilib';

const recommendationTrend: RecommendationTrend = {
  symbol: 'symbol4',
  buy: BigInt(14),
  hold: BigInt(100),
  period: 'period4',
  sell: BigInt(12),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

