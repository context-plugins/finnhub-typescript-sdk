
# Company Earnings Quality Score Data

*This model accepts additional fields of type unknown.*

## Structure

`CompanyEarningsQualityScoreData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `period` | `string \| undefined` | Optional | Period |
| `growth` | `number \| undefined` | Optional | Growth Score |
| `profitability` | `number \| undefined` | Optional | Profitability Score |
| `cashGenerationCapitalAllocation` | `number \| undefined` | Optional | Cash Generation and Capital Allocation |
| `leverage` | `number \| undefined` | Optional | Leverage Score |
| `score` | `number \| undefined` | Optional | Total Score |
| `letterScore` | `string \| undefined` | Optional | Letter Score |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyEarningsQualityScoreData } from 'finnhub-apilib';

const companyEarningsQualityScoreData: CompanyEarningsQualityScoreData = {
  period: 'period8',
  growth: 6.28,
  profitability: 34.34,
  cashGenerationCapitalAllocation: 34.22,
  leverage: 148.84,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

