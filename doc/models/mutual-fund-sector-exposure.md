
# Mutual Fund Sector Exposure

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundSectorExposure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Mutual symbol. |
| `sectorExposure` | [`MutualFundSectorExposureData[] \| undefined`](../../doc/models/mutual-fund-sector-exposure-data.md) | Optional | Array of sector and exposure levels. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundSectorExposure } from 'finnhub-apilib';

const mutualFundSectorExposure: MutualFundSectorExposure = {
  symbol: 'symbol2',
  sectorExposure: [
    {
      sector: 'sector0',
      exposure: 22.48,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      sector: 'sector0',
      exposure: 22.48,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      sector: 'sector0',
      exposure: 22.48,
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

