
# Ai Chat Response

*This model accepts additional fields of type unknown.*

## Structure

`AiChatResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chatId` | `string \| undefined` | Optional | Chat ID. |
| `content` | `string \| undefined` | Optional | Response text. |
| `querySummary` | `string \| undefined` | Optional | Query summary |
| `relatedQueries` | `unknown[] \| undefined` | Optional | Related queries. |
| `tickers` | `unknown[] \| undefined` | Optional | List of tickers mentioned. |
| `sources` | `unknown[] \| undefined` | Optional | Sources. |
| `widgets` | `unknown[] \| undefined` | Optional | Widgets. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AiChatResponse } from 'finnhub-apilib';

const aiChatResponse: AiChatResponse = {
  chatId: 'chatId6',
  content: 'content0',
  querySummary: 'querySummary2',
  relatedQueries: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  tickers: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

