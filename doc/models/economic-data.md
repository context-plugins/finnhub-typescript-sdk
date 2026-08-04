
# Economic Data

*This model accepts additional fields of type unknown.*

## Structure

`EconomicData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`EconomicDataInfo[] \| undefined`](../../doc/models/economic-data-info.md) | Optional | Array of economic data for requested code. |
| `code` | `string \| undefined` | Optional | Finnhub economic code |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EconomicData } from 'finnhub-apilib';

const economicData: EconomicData = {
  data: [
    {
      date: 'date6',
      value: 95.62,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      date: 'date6',
      value: 95.62,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      date: 'date6',
      value: 95.62,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  code: 'code2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

