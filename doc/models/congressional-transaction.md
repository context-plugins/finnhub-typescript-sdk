
# Congressional Transaction

*This model accepts additional fields of type unknown.*

## Structure

`CongressionalTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountFrom` | `number \| undefined` | Optional | Transaction amount from. |
| `amountTo` | `number \| undefined` | Optional | Transaction amount to. |
| `assetName` | `string \| undefined` | Optional | Asset name. |
| `filingDate` | `string \| undefined` | Optional | Filing date. |
| `name` | `string \| undefined` | Optional | Name of the representative. |
| `ownerType` | `string \| undefined` | Optional | Owner Type. |
| `position` | `string \| undefined` | Optional | Position. |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `transactionDate` | `string \| undefined` | Optional | Transaction date. |
| `transactionType` | `string \| undefined` | Optional | Transaction type <code>Sale</code> or <code>Purchase</code>. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CongressionalTransaction } from 'finnhub-apilib';

const congressionalTransaction: CongressionalTransaction = {
  amountFrom: 104.14,
  amountTo: 198.76,
  assetName: 'assetName2',
  filingDate: 'filingDate8',
  name: 'name2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

