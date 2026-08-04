
# Symbol Change

*This model accepts additional fields of type unknown.*

## Structure

`SymbolChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromDate` | `string \| undefined` | Optional | From date. |
| `toDate` | `string \| undefined` | Optional | To date. |
| `data` | [`SymbolChangeInfo[] \| undefined`](../../doc/models/symbol-change-info.md) | Optional | Array of symbol change events. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SymbolChange } from 'finnhub-apilib';

const symbolChange: SymbolChange = {
  fromDate: 'fromDate4',
  toDate: 'toDate4',
  data: [
    {
      atDate: 'atDate6',
      oldSymbol: 'oldSymbol2',
      newSymbol: 'newSymbol2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      oldSymbol: 'oldSymbol2',
      newSymbol: 'newSymbol2',
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

