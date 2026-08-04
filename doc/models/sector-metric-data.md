
# Sector Metric Data

*This model accepts additional fields of type unknown.*

## Structure

`SectorMetricData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sector` | `string \| undefined` | Optional | Sector |
| `metrics` | `unknown \| undefined` | Optional | Metrics data in key-value format. <code>a</code> and <code>m</code> fields are for average and median respectively. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SectorMetricData } from 'finnhub-apilib';

const sectorMetricData: SectorMetricData = {
  sector: 'sector6',
  metrics: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

