
# Et Fs Sector Exposure

*This model accepts additional fields of type unknown.*

## Structure

`EtFsSectorExposure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | ETF symbol. |
| `sectorExposure` | [`EtfSectorExposureData[] \| undefined`](../../doc/models/etf-sector-exposure-data.md) | Optional | Array of industries and exposure levels. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtFsSectorExposure } from 'finnhub-apilib';

const etFsSectorExposure: EtFsSectorExposure = {
  symbol: 'symbol4',
  sectorExposure: [
    {
      industry: 'industry8',
      exposure: 22.48,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      industry: 'industry8',
      exposure: 22.48,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      industry: 'industry8',
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

