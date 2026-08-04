
# Newsroom

*This model accepts additional fields of type unknown.*

## Structure

`Newsroom`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `data` | [`NewsroomArticle[] \| undefined`](../../doc/models/newsroom-article.md) | Optional | Array of articles. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Newsroom } from 'finnhub-apilib';

const newsroom: Newsroom = {
  symbol: 'symbol8',
  data: [
    {
      atDate: 'atDate6',
      title: 'title6',
      fullText: 'fullText8',
      url: 'url4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      title: 'title6',
      fullText: 'fullText8',
      url: 'url4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      title: 'title6',
      fullText: 'fullText8',
      url: 'url4',
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

