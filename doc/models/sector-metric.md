
# Sector Metric

*This model accepts additional fields of type unknown.*

## Structure

`SectorMetric`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `region` | `string \| undefined` | Optional | Region. |
| `data` | [`SectorMetricData[] \| undefined`](../../doc/models/sector-metric-data.md) | Optional | Metrics for each sector. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SectorMetric } from 'finnhub-apilib';

const sectorMetric: SectorMetric = {
  region: 'region4',
  data: [
    {
      sector: 'sector2',
      metrics: { 'key1': 'val1', 'key2': 'val2' },
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

