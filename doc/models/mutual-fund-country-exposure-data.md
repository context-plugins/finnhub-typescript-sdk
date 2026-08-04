
# Mutual Fund Country Exposure Data

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundCountryExposureData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string \| undefined` | Optional | Country |
| `exposure` | `number \| undefined` | Optional | Percent of exposure. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundCountryExposureData } from 'finnhub-apilib';

const mutualFundCountryExposureData: MutualFundCountryExposureData = {
  country: 'country0',
  exposure: 167.1,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

