
# Sec Sentiment Analysis

*This model accepts additional fields of type unknown.*

## Structure

`SecSentimentAnalysis`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessNumber` | `string \| undefined` | Optional | Access number. |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `cik` | `string \| undefined` | Optional | CIK. |
| `sentiment` | [`FilingSentiment \| undefined`](../../doc/models/filing-sentiment.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SecSentimentAnalysis } from 'finnhub-apilib';

const secSentimentAnalysis: SecSentimentAnalysis = {
  accessNumber: 'accessNumber4',
  symbol: 'symbol0',
  cik: 'cik0',
  sentiment: {
    negative: 0.52,
    positive: 119.16,
    polarity: 17.98,
    litigious: 155.3,
    uncertainty: 190.7,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

