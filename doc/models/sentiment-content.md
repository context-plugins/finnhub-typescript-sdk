
# Sentiment Content

*This model accepts additional fields of type unknown.*

## Structure

`SentimentContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mention` | `bigint \| undefined` | Optional | Number of mentions |
| `positiveMention` | `bigint \| undefined` | Optional | Number of positive mentions |
| `negativeMention` | `bigint \| undefined` | Optional | Number of negative mentions |
| `positiveScore` | `number \| undefined` | Optional | Positive score. Range 0-1 |
| `negativeScore` | `number \| undefined` | Optional | Negative score. Range 0-1 |
| `score` | `number \| undefined` | Optional | Final score. Range: -1 to 1 with 1 is very positive and -1 is very negative |
| `atTime` | `string \| undefined` | Optional | Period. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SentimentContent } from 'finnhub-apilib';

const sentimentContent: SentimentContent = {
  mention: BigInt(216),
  positiveMention: BigInt(138),
  negativeMention: BigInt(72),
  positiveScore: 13.18,
  negativeScore: 146.46,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

