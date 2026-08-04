
# Company Earnings Quality Score

*This model accepts additional fields of type unknown.*

## Structure

`CompanyEarningsQualityScore`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `freq` | `string \| undefined` | Optional | Frequency |
| `data` | [`CompanyEarningsQualityScoreData[] \| undefined`](../../doc/models/company-earnings-quality-score-data.md) | Optional | Array of earnings quality score. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyEarningsQualityScore } from 'finnhub-apilib';

const companyEarningsQualityScore: CompanyEarningsQualityScore = {
  symbol: 'symbol2',
  freq: 'freq4',
  data: [
    {
      period: 'period2',
      growth: 45.68,
      profitability: 5.06,
      cashGenerationCapitalAllocation: 73.62,
      leverage: 188.24,
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

