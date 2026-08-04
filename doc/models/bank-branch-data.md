
# Bank Branch Data

*This model accepts additional fields of type unknown.*

## Structure

`BankBranchData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `branchId` | `string \| undefined` | Optional | Branch ID |
| `address` | `string \| undefined` | Optional | Branch address |
| `state` | `string \| undefined` | Optional | State |
| `zipCode` | `string \| undefined` | Optional | Zip code |
| `date` | `string \| undefined` | Optional | Date opened |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankBranchData } from 'finnhub-apilib';

const bankBranchData: BankBranchData = {
  branchId: 'branchId8',
  address: 'address2',
  state: 'state2',
  zipCode: 'zipCode8',
  date: 'date2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

