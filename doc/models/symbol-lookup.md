
# Symbol Lookup

*This model accepts additional fields of type unknown.*

## Structure

`SymbolLookup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`SymbolLookupInfo[] \| undefined`](../../doc/models/symbol-lookup-info.md) | Optional | Array of search results. |
| `count` | `bigint \| undefined` | Optional | Number of results. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SymbolLookup } from 'finnhub-apilib';

const symbolLookup: SymbolLookup = {
  result: [
    {
      description: 'description6',
      displaySymbol: 'displaySymbol4',
      symbol: 'symbol8',
      type: 'type4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      description: 'description6',
      displaySymbol: 'displaySymbol4',
      symbol: 'symbol8',
      type: 'type4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  count: BigInt(168),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

