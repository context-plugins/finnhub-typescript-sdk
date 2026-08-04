
# Transcript Participant

*This model accepts additional fields of type unknown.*

## Structure

`TranscriptParticipant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Participant's name |
| `description` | `string \| undefined` | Optional | Participant's description |
| `role` | `string \| undefined` | Optional | Whether the speak is a company's executive or an analyst |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TranscriptParticipant } from 'finnhub-apilib';

const transcriptParticipant: TranscriptParticipant = {
  name: 'name4',
  description: 'description4',
  role: 'role2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

