
# Excerpt Response

*This model accepts additional fields of type unknown.*

## Structure

`ExcerptResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string \| undefined` | Optional | Highlighted content |
| `snippetId` | `string \| undefined` | Optional | Location of the content in the rendered document |
| `startOffset` | `string \| undefined` | Optional | Start offset of highlighted content |
| `endOffset` | `string \| undefined` | Optional | End offset of highlighted content |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExcerptResponse } from 'finnhub-apilib';

const excerptResponse: ExcerptResponse = {
  content: 'content4',
  snippetId: 'snippetId2',
  startOffset: 'startOffset8',
  endOffset: 'endOffset8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

