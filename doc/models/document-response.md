
# Document Response

*This model accepts additional fields of type unknown.*

## Structure

`DocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentId` | `string \| undefined` | Optional | AlphaResearch internal document id. |
| `title` | `string \| undefined` | Optional | Title for this document. |
| `hits` | `string \| undefined` | Optional | Number of hit in this document |
| `url` | `string \| undefined` | Optional | Link to render this document |
| `format` | `string \| undefined` | Optional | Format of this document (can be html or pdf) |
| `excerpts` | [`ExcerptResponse[] \| undefined`](../../doc/models/excerpt-response.md) | Optional | Highlighted excerpts for this document |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DocumentResponse } from 'finnhub-apilib';

const documentResponse: DocumentResponse = {
  documentId: 'documentId8',
  title: 'title6',
  hits: 'hits0',
  url: 'url4',
  format: 'format6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

