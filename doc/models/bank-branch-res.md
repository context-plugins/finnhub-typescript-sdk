
# Bank Branch Res

*This model accepts additional fields of type unknown.*

## Structure

`BankBranchRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`BankBranchData[] \| undefined`](../../doc/models/bank-branch-data.md) | Optional | Array of branches. |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankBranchRes } from 'finnhub-apilib';

const bankBranchRes: BankBranchRes = {
  data: [
    {
      branchId: 'branchId2',
      address: 'address6',
      state: 'state6',
      zipCode: 'zipCode2',
      date: 'date6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  symbol: 'symbol2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

