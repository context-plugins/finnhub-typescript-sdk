
# Report

*This model accepts additional fields of type unknown.*

## Structure

`Report`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessNumber` | `string \| undefined` | Optional | Access number. |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `cik` | `string \| undefined` | Optional | CIK. |
| `year` | `bigint \| undefined` | Optional | Year. |
| `quarter` | `bigint \| undefined` | Optional | Quarter. |
| `form` | `string \| undefined` | Optional | Form type. |
| `startDate` | `string \| undefined` | Optional | Period start date <code>%Y-%m-%d %H:%M:%S</code>. |
| `endDate` | `string \| undefined` | Optional | Period end date <code>%Y-%m-%d %H:%M:%S</code>. |
| `filedDate` | `string \| undefined` | Optional | Filed date <code>%Y-%m-%d %H:%M:%S</code>. |
| `acceptedDate` | `string \| undefined` | Optional | Accepted date <code>%Y-%m-%d %H:%M:%S</code>. |
| `report` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Report } from 'finnhub-apilib';

const report: Report = {
  accessNumber: 'accessNumber0',
  symbol: 'symbol6',
  cik: 'cik6',
  year: BigInt(54),
  quarter: BigInt(134),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

