
# Transactions

*This model accepts additional fields of type unknown.*

## Structure

`Transactions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `name` | `string \| undefined` | Optional | Insider's name. |
| `share` | `bigint \| undefined` | Optional | Number of shares held after the transaction. |
| `change` | `bigint \| undefined` | Optional | Number of share changed from the last period. A positive value suggests a <code>BUY</code> transaction. A negative value suggests a <code>SELL</code> transaction. |
| `filingDate` | `string \| undefined` | Optional | Filing date. |
| `transactionDate` | `string \| undefined` | Optional | Transaction date. |
| `transactionPrice` | `number \| undefined` | Optional | Average transaction price. |
| `transactionCode` | `string \| undefined` | Optional | Transaction code. A list of codes and their meanings can be found <a href="https://www.sec.gov/about/forms/form4data.pdf" target="_blank" rel="noopener">here</a>. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Transactions } from 'finnhub-apilib';

const transactions: Transactions = {
  symbol: 'symbol0',
  name: 'name8',
  share: BigInt(140),
  change: BigInt(88),
  filingDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

