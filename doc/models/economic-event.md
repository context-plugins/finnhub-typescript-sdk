
# Economic Event

*This model accepts additional fields of type unknown.*

## Structure

`EconomicEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actual` | `number \| undefined` | Optional | Actual release |
| `prev` | `number \| undefined` | Optional | Previous release |
| `country` | `string \| undefined` | Optional | Country |
| `unit` | `string \| undefined` | Optional | Unit |
| `estimate` | `number \| undefined` | Optional | Estimate |
| `event` | `string \| undefined` | Optional | Event |
| `impact` | `string \| undefined` | Optional | Impact level |
| `time` | `string \| undefined` | Optional | Release time |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EconomicEvent } from 'finnhub-apilib';

const economicEvent: EconomicEvent = {
  actual: 238.24,
  prev: 101.38,
  country: 'country2',
  unit: 'unit6',
  estimate: 77.86,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

