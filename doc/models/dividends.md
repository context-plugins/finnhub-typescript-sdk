
# Dividends

*This model accepts additional fields of type unknown.*

## Structure

`Dividends`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `date` | `string \| undefined` | Optional | Ex-Dividend date. |
| `amount` | `number \| undefined` | Optional | Amount in local currency. |
| `adjustedAmount` | `number \| undefined` | Optional | Adjusted dividend. |
| `payDate` | `string \| undefined` | Optional | Pay date. |
| `recordDate` | `string \| undefined` | Optional | Record date. |
| `declarationDate` | `string \| undefined` | Optional | Declaration date. |
| `currency` | `string \| undefined` | Optional | Currency. |
| `freq` | `string \| undefined` | Optional | <p>Dividend frequency. Can be 1 of the following values:</p><ul><br><li><code>0: Annually</code></li><br><li><code>1: Monthly</code></li><br><li><code>2: Quarterly</code></li><br><li><code>3: Semi-annually</code></li><br><li><code>4: Other/Unknown</code></li><br><li><code>5: Bimonthly</code></li><br><li><code>6: Trimesterly</code></li><br><li><code>7: Weekly</code></li><br></ul><br> |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Dividends } from 'finnhub-apilib';

const dividends: Dividends = {
  symbol: 'symbol0',
  date: '2016-03-13T12:52:32.123Z',
  amount: 140.6,
  adjustedAmount: 244.06,
  payDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

