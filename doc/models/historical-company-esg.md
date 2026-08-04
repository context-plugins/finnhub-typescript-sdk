
# Historical Company Esg

*This model accepts additional fields of type unknown.*

## Structure

`HistoricalCompanyEsg`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | symbol |
| `data` | [`CompanyEsg2[] \| undefined`](../../doc/models/company-esg-2.md) | Optional | Historical ESG data points. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HistoricalCompanyEsg } from 'finnhub-apilib';

const historicalCompanyEsg: HistoricalCompanyEsg = {
  symbol: 'symbol6',
  data: [
    {
      totalEsgScore: 28.04,
      environmentScore: 147.44,
      governanceScore: 179.28,
      socialScore: 28.92,
      data: { 'key1': 'val1', 'key2': 'val2' },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      totalEsgScore: 28.04,
      environmentScore: 147.44,
      governanceScore: 179.28,
      socialScore: 28.92,
      data: { 'key1': 'val1', 'key2': 'val2' },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      totalEsgScore: 28.04,
      environmentScore: 147.44,
      governanceScore: 179.28,
      socialScore: 28.92,
      data: { 'key1': 'val1', 'key2': 'val2' },
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

