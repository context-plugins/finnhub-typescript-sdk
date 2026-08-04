
# Et Fs Country Exposure

*This model accepts additional fields of type unknown.*

## Structure

`EtFsCountryExposure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | ETF symbol. |
| `countryExposure` | [`EtfCountryExposureData[] \| undefined`](../../doc/models/etf-country-exposure-data.md) | Optional | Array of countries and and exposure levels. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtFsCountryExposure } from 'finnhub-apilib';

const etFsCountryExposure: EtFsCountryExposure = {
  symbol: 'symbol6',
  countryExposure: [
    {
      country: 'country6',
      exposure: 12.86,
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

