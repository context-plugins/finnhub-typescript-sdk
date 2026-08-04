
# Institutional Portfolio Group

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalPortfolioGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reportDate` | `string \| undefined` | Optional | Report date. |
| `filingDate` | `string \| undefined` | Optional | Filing date. |
| `portfolio` | [`InstitutionalPortfolioInfo[] \| undefined`](../../doc/models/institutional-portfolio-info.md) | Optional | Array of positions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalPortfolioGroup } from 'finnhub-apilib';

const institutionalPortfolioGroup: InstitutionalPortfolioGroup = {
  reportDate: 'reportDate0',
  filingDate: 'filingDate8',
  portfolio: [
    {
      symbol: 'symbol6',
      cusip: 'cusip2',
      name: 'name4',
      putCall: 'putCall4',
      change: 108.58,
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

