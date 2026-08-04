
# Ai Chat Body

*This model accepts additional fields of type unknown.*

## Structure

`AiChatBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messages` | [`AiChatMessage[]`](../../doc/models/ai-chat-message.md) | Required | Messages |
| `stream` | `boolean \| undefined` | Optional | Stream responses |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AiChatBody } from 'finnhub-apilib';

const aiChatBody: AiChatBody = {
  messages: [
    {
      role: 'role2',
      content: 'content2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  stream: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

