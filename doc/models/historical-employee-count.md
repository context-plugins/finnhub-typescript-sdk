
# Historical Employee Count

*This model accepts additional fields of type unknown.*

## Structure

`HistoricalEmployeeCount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`EmployeeCount[] \| undefined`](../../doc/models/employee-count.md) | Optional | Array of market data. |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HistoricalEmployeeCount } from 'finnhub-apilib';

const historicalEmployeeCount: HistoricalEmployeeCount = {
  data: [
    {
      atDate: 'atDate6',
      employee: 23.18,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      employee: 23.18,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      employee: 23.18,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  symbol: 'symbol6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

