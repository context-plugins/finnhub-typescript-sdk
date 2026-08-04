
# Social Sentiment

*This model accepts additional fields of type unknown.*

## Structure

`SocialSentiment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `data` | [`SentimentContent[] \| undefined`](../../doc/models/sentiment-content.md) | Optional | Sentiment data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SocialSentiment } from 'finnhub-apilib';

const socialSentiment: SocialSentiment = {
  symbol: 'symbol2',
  data: [
    {
      mention: BigInt(76),
      positiveMention: BigInt(174),
      negativeMention: BigInt(108),
      positiveScore: 123.62,
      negativeScore: 0.9,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      mention: BigInt(76),
      positiveMention: BigInt(174),
      negativeMention: BigInt(108),
      positiveScore: 123.62,
      negativeScore: 0.9,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      mention: BigInt(76),
      positiveMention: BigInt(174),
      negativeMention: BigInt(108),
      positiveScore: 123.62,
      negativeScore: 0.9,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

