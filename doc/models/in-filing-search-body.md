
# In Filing Search Body

*This model accepts additional fields of type unknown.*

## Structure

`InFilingSearchBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | `string` | Required | Search query |
| `filingId` | `string` | Required | Filing Id to search |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InFilingSearchBody } from 'finnhub-apilib';

const inFilingSearchBody: InFilingSearchBody = {
  query: 'query6',
  filingId: 'filingId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

