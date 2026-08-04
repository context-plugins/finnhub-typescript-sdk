
# Search Filter

*This model accepts additional fields of type unknown.*

## Structure

`SearchFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Filter id, use with respective field in search query body. |
| `name` | `string \| undefined` | Optional | Display name. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SearchFilter } from 'finnhub-apilib';

const searchFilter: SearchFilter = {
  id: 'id2',
  name: 'name2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

