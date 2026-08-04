
# Mutual Fund Country Exposure

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundCountryExposure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `countryExposure` | [`MutualFundCountryExposureData[] \| undefined`](../../doc/models/mutual-fund-country-exposure-data.md) | Optional | Array of countries and and exposure levels. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundCountryExposure } from 'finnhub-apilib';

const mutualFundCountryExposure: MutualFundCountryExposure = {
  symbol: 'symbol8',
  countryExposure: [
    {
      country: 'country6',
      exposure: 12.86,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      country: 'country6',
      exposure: 12.86,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
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

