
# Key Customers Suppliers

*This model accepts additional fields of type unknown.*

## Structure

`KeyCustomersSuppliers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `name` | `string \| undefined` | Optional | Name |
| `country` | `string \| undefined` | Optional | Country |
| `industry` | `string \| undefined` | Optional | Industry |
| `customer` | `boolean \| undefined` | Optional | Whether the company is a customer. |
| `supplier` | `boolean \| undefined` | Optional | Whether the company is a supplier |
| `oneMonthCorrelation` | `number \| undefined` | Optional | 1-month price correlation |
| `oneYearCorrelation` | `number \| undefined` | Optional | 1-year price correlation |
| `sixMonthCorrelation` | `number \| undefined` | Optional | 6-month price correlation |
| `threeMonthCorrelation` | `number \| undefined` | Optional | 3-month price correlation |
| `twoWeekCorrelation` | `number \| undefined` | Optional | 2-week price correlation |
| `twoYearCorrelation` | `number \| undefined` | Optional | 2-year price correlation |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KeyCustomersSuppliers } from 'finnhub-apilib';

const keyCustomersSuppliers: KeyCustomersSuppliers = {
  symbol: 'symbol0',
  name: 'name8',
  country: 'country2',
  industry: 'industry8',
  customer: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

