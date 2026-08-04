
# Revenue Breakdown 2

*This model accepts additional fields of type unknown.*

## Structure

`RevenueBreakdown2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `currency` | `string \| undefined` | Optional | currency |
| `data` | `unknown \| undefined` | Optional | Revenue breakdown data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RevenueBreakdown2 } from 'finnhub-apilib';

const revenueBreakdown2: RevenueBreakdown2 = {
  symbol: 'symbol0',
  currency: 'currency8',
  data: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

