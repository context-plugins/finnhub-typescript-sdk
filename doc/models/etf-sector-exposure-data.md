
# Etf Sector Exposure Data

*This model accepts additional fields of type unknown.*

## Structure

`EtfSectorExposureData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `industry` | `string \| undefined` | Optional | Industry |
| `exposure` | `number \| undefined` | Optional | Percent of exposure. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtfSectorExposureData } from 'finnhub-apilib';

const etfSectorExposureData: EtfSectorExposureData = {
  industry: 'industry4',
  exposure: 118.32,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

