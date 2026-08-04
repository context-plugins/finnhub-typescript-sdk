
# Insider Sentiments

*This model accepts additional fields of type unknown.*

## Structure

`InsiderSentiments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol of the company. |
| `data` | [`InsiderSentimentsData[] \| undefined`](../../doc/models/insider-sentiments-data.md) | Optional | Array of sentiment data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InsiderSentiments } from 'finnhub-apilib';

const insiderSentiments: InsiderSentiments = {
  symbol: 'symbol2',
  data: [
    {
      symbol: 'symbol2',
      year: BigInt(34),
      month: BigInt(2),
      change: BigInt(240),
      mspr: 220.16,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol2',
      year: BigInt(34),
      month: BigInt(2),
      change: BigInt(240),
      mspr: 220.16,
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

