
# Basic Financials

*This model accepts additional fields of type unknown.*

## Structure

`BasicFinancials`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol of the company. |
| `metricType` | `string \| undefined` | Optional | Metric type. |
| `series` | `unknown \| undefined` | Optional | - |
| `metric` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BasicFinancials } from 'finnhub-apilib';

const basicFinancials: BasicFinancials = {
  symbol: 'symbol0',
  metricType: 'metricType4',
  series: { 'key1': 'val1', 'key2': 'val2' },
  metric: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

