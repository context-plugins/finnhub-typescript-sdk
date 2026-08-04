
# Index Historical Constituent

*This model accepts additional fields of type unknown.*

## Structure

`IndexHistoricalConstituent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `action` | `string \| undefined` | Optional | <code>add</code> or <code>remove</code>. |
| `date` | `string \| undefined` | Optional | Date of joining or leaving the index. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IndexHistoricalConstituent } from 'finnhub-apilib';

const indexHistoricalConstituent: IndexHistoricalConstituent = {
  symbol: 'symbol8',
  action: 'action2',
  date: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

