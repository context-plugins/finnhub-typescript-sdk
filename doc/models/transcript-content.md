
# Transcript Content

*This model accepts additional fields of type unknown.*

## Structure

`TranscriptContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Speaker's name |
| `speech` | `string[] \| undefined` | Optional | Speaker's speech |
| `session` | `string \| undefined` | Optional | Earnings calls section (management discussion or Q&A) |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TranscriptContent } from 'finnhub-apilib';

const transcriptContent: TranscriptContent = {
  name: 'name4',
  speech: [
    'speech1',
    'speech2',
    'speech3'
  ],
  session: 'session6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

