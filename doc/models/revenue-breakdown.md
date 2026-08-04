
# Revenue Breakdown

*This model accepts additional fields of type unknown.*

## Structure

`RevenueBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `cik` | `string \| undefined` | Optional | CIK |
| `data` | [`BreakdownItem[] \| undefined`](../../doc/models/breakdown-item.md) | Optional | Array of revenue breakdown over multiple periods. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RevenueBreakdown } from 'finnhub-apilib';

const revenueBreakdown: RevenueBreakdown = {
  symbol: 'symbol8',
  cik: 'cik8',
  data: [
    {
      accessNumber: 'accessNumber6',
      breakdown: { 'key1': 'val1', 'key2': 'val2' },
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

