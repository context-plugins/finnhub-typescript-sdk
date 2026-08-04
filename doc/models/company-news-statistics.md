
# Company News Statistics

*This model accepts additional fields of type unknown.*

## Structure

`CompanyNewsStatistics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `articlesInLastWeek` | `bigint \| undefined` | Optional | - |
| `buzz` | `number \| undefined` | Optional | - |
| `weeklyAverage` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyNewsStatistics } from 'finnhub-apilib';

const companyNewsStatistics: CompanyNewsStatistics = {
  articlesInLastWeek: BigInt(100),
  buzz: 229.48,
  weeklyAverage: 130.96,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

