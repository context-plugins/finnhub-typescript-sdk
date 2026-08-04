
# Sentiment

*This model accepts additional fields of type unknown.*

## Structure

`Sentiment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bearishPercent` | `number \| undefined` | Optional | - |
| `bullishPercent` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Sentiment } from 'finnhub-apilib';

const sentiment: Sentiment = {
  bearishPercent: 214.1,
  bullishPercent: 4.86,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

