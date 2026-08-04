
# Symbol Change Info

*This model accepts additional fields of type unknown.*

## Structure

`SymbolChangeInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `atDate` | `string \| undefined` | Optional | Event's date. |
| `oldSymbol` | `string \| undefined` | Optional | Old symbol. |
| `newSymbol` | `string \| undefined` | Optional | New symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SymbolChangeInfo } from 'finnhub-apilib';

const symbolChangeInfo: SymbolChangeInfo = {
  atDate: 'atDate0',
  oldSymbol: 'oldSymbol4',
  newSymbol: 'newSymbol6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

