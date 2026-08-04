
# Symbol Lookup Info

*This model accepts additional fields of type unknown.*

## Structure

`SymbolLookupInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Symbol description |
| `displaySymbol` | `string \| undefined` | Optional | Display symbol name. |
| `symbol` | `string \| undefined` | Optional | Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint. |
| `type` | `string \| undefined` | Optional | Security type. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SymbolLookupInfo } from 'finnhub-apilib';

const symbolLookupInfo: SymbolLookupInfo = {
  description: 'description6',
  displaySymbol: 'displaySymbol8',
  symbol: 'symbol4',
  type: 'type6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

