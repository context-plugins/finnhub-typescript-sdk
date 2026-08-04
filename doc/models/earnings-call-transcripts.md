
# Earnings Call Transcripts

*This model accepts additional fields of type unknown.*

## Structure

`EarningsCallTranscripts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `transcript` | [`TranscriptContent[] \| undefined`](../../doc/models/transcript-content.md) | Optional | Transcript content. |
| `participant` | [`TranscriptParticipant[] \| undefined`](../../doc/models/transcript-participant.md) | Optional | Participant list |
| `audio` | `string \| undefined` | Optional | Audio link. |
| `id` | `string \| undefined` | Optional | Transcript's ID. |
| `title` | `string \| undefined` | Optional | Title. |
| `time` | `string \| undefined` | Optional | Time of the event. |
| `year` | `bigint \| undefined` | Optional | Year of earnings result in the case of earnings call transcript. |
| `quarter` | `bigint \| undefined` | Optional | Quarter of earnings result in the case of earnings call transcript. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningsCallTranscripts } from 'finnhub-apilib';

const earningsCallTranscripts: EarningsCallTranscripts = {
  symbol: 'symbol0',
  transcript: [
    {
      name: 'name8',
      speech: [
        'speech5'
      ],
      session: 'session0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name8',
      speech: [
        'speech5'
      ],
      session: 'session0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name8',
      speech: [
        'speech5'
      ],
      session: 'session0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  participant: [
    {
      name: 'name6',
      description: 'description6',
      role: 'role0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name6',
      description: 'description6',
      role: 'role0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name6',
      description: 'description6',
      role: 'role0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  audio: 'audio0',
  id: 'id8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

