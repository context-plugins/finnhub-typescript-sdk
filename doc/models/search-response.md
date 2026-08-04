
# Search Response

*This model accepts additional fields of type unknown.*

## Structure

`SearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number \| undefined` | Optional | Total filing matched your search criteria. |
| `took` | `number \| undefined` | Optional | Time took to execute your search query on our server, value in ms. |
| `page` | `number \| undefined` | Optional | Current search page |
| `filings` | [`FilingResponse[] \| undefined`](../../doc/models/filing-response.md) | Optional | Filing match your search criteria. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SearchResponse } from 'finnhub-apilib';

const searchResponse: SearchResponse = {
  count: 120,
  took: 14,
  page: 90,
  filings: [
    {
      filingId: 'filingId6',
      title: 'title6',
      filerId: 'filerId4',
      symbol: { 'key1': 'val1', 'key2': 'val2' },
      name: 'name0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      filingId: 'filingId6',
      title: 'title6',
      filerId: 'filerId4',
      symbol: { 'key1': 'val1', 'key2': 'val2' },
      name: 'name0',
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

