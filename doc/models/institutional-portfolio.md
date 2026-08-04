
# Institutional Portfolio

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalPortfolio`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Investor's name. |
| `cik` | `string \| undefined` | Optional | CIK. |
| `data` | [`InstitutionalPortfolioGroup[] \| undefined`](../../doc/models/institutional-portfolio-group.md) | Optional | Array of positions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalPortfolio } from 'finnhub-apilib';

const institutionalPortfolio: InstitutionalPortfolio = {
  name: 'name8',
  cik: 'cik0',
  data: [
    {
      reportDate: 'reportDate8',
      filingDate: 'filingDate6',
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
        },
        {
          symbol: 'symbol6',
          cusip: 'cusip2',
          name: 'name4',
          putCall: 'putCall4',
          change: 108.58,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
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
    },
    {
      reportDate: 'reportDate8',
      filingDate: 'filingDate6',
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
        },
        {
          symbol: 'symbol6',
          cusip: 'cusip2',
          name: 'name4',
          putCall: 'putCall4',
          change: 108.58,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
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
    },
    {
      reportDate: 'reportDate8',
      filingDate: 'filingDate6',
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
        },
        {
          symbol: 'symbol6',
          cusip: 'cusip2',
          name: 'name4',
          putCall: 'putCall4',
          change: 108.58,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

