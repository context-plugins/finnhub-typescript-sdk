
# Congressional Trading

*This model accepts additional fields of type unknown.*

## Structure

`CongressionalTrading`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol of the company. |
| `data` | [`CongressionalTransaction[] \| undefined`](../../doc/models/congressional-transaction.md) | Optional | Array of stock trades. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CongressionalTrading } from 'finnhub-apilib';

const congressionalTrading: CongressionalTrading = {
  symbol: 'symbol4',
  data: [
    {
      amountFrom: 30.74,
      amountTo: 77.64,
      assetName: 'assetName0',
      filingDate: 'filingDate6',
      name: 'name0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amountFrom: 30.74,
      amountTo: 77.64,
      assetName: 'assetName0',
      filingDate: 'filingDate6',
      name: 'name0',
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

