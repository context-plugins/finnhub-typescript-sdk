
# Mutual Fund Sector Exposure Data

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundSectorExposureData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sector` | `string \| undefined` | Optional | Sector |
| `exposure` | `number \| undefined` | Optional | Percent of exposure. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundSectorExposureData } from 'finnhub-apilib';

const mutualFundSectorExposureData: MutualFundSectorExposureData = {
  sector: 'sector8',
  exposure: 63.9,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

