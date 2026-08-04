
# Insider Transactions

*This model accepts additional fields of type unknown.*

## Structure

`InsiderTransactions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol of the company. |
| `data` | [`Transactions[] \| undefined`](../../doc/models/transactions.md) | Optional | Array of insider transactions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InsiderTransactions } from 'finnhub-apilib';

const insiderTransactions: InsiderTransactions = {
  symbol: 'symbol0',
  data: [
    {
      symbol: 'symbol2',
      name: 'name0',
      share: BigInt(36),
      change: BigInt(240),
      filingDate: '2016-03-13T12:52:32.123Z',
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

