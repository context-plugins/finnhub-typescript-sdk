
# Stock Transcripts

*This model accepts additional fields of type unknown.*

## Structure

`StockTranscripts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Transcript's ID used to get the <a href="#transcripts">full transcript</a>. |
| `title` | `string \| undefined` | Optional | Title. |
| `time` | `string \| undefined` | Optional | Time of the event. |
| `year` | `bigint \| undefined` | Optional | Year of earnings result in the case of earnings call transcript. |
| `quarter` | `bigint \| undefined` | Optional | Quarter of earnings result in the case of earnings call transcript. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StockTranscripts } from 'finnhub-apilib';

const stockTranscripts: StockTranscripts = {
  id: 'id4',
  title: 'title0',
  time: 'time4',
  year: BigInt(148),
  quarter: BigInt(28),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

