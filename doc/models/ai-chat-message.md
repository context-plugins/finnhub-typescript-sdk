
# Ai Chat Message

*This model accepts additional fields of type unknown.*

## Structure

`AiChatMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `role` | `string \| undefined` | Optional | Role system/user |
| `content` | `string \| undefined` | Optional | Content |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AiChatMessage } from 'finnhub-apilib';

const aiChatMessage: AiChatMessage = {
  role: 'role0',
  content: 'content0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

