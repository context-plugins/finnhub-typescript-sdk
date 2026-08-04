
# News Sentiment

*This model accepts additional fields of type unknown.*

## Structure

`NewsSentiment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buzz` | [`CompanyNewsStatistics \| undefined`](../../doc/models/company-news-statistics.md) | Optional | - |
| `companyNewsScore` | `number \| undefined` | Optional | News score. |
| `sectorAverageBullishPercent` | `number \| undefined` | Optional | Sector average bullish percent. |
| `sectorAverageNewsScore` | `number \| undefined` | Optional | Sectore average score. |
| `sentiment` | [`Sentiment \| undefined`](../../doc/models/sentiment.md) | Optional | - |
| `symbol` | `string \| undefined` | Optional | Requested symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NewsSentiment } from 'finnhub-apilib';

const newsSentiment: NewsSentiment = {
  buzz: {
    articlesInLastWeek: BigInt(36),
    buzz: 58.6,
    weeklyAverage: 45.84,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  companyNewsScore: 140.58,
  sectorAverageBullishPercent: 199.08,
  sectorAverageNewsScore: 68.66,
  sentiment: {
    bearishPercent: 214.1,
    bullishPercent: 4.86,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

