
# Etf Country Exposure Data

*This model accepts additional fields of type unknown.*

## Structure

`EtfCountryExposureData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string \| undefined` | Optional | Country |
| `exposure` | `number \| undefined` | Optional | Percent of exposure. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtfCountryExposureData } from 'finnhub-apilib';

const etfCountryExposureData: EtfCountryExposureData = {
  country: 'country0',
  exposure: 84.2,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

