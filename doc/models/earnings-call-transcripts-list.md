
# Earnings Call Transcripts List

*This model accepts additional fields of type unknown.*

## Structure

`EarningsCallTranscriptsList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `transcripts` | [`StockTranscripts[] \| undefined`](../../doc/models/stock-transcripts.md) | Optional | Array of transcripts' metadata |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningsCallTranscriptsList } from 'finnhub-apilib';

const earningsCallTranscriptsList: EarningsCallTranscriptsList = {
  symbol: 'symbol8',
  transcripts: [
    {
      id: 'id8',
      title: 'title4',
      time: 'time8',
      year: BigInt(172),
      quarter: BigInt(4),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id8',
      title: 'title4',
      time: 'time8',
      year: BigInt(172),
      quarter: BigInt(4),
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

