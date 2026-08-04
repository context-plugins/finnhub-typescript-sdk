
# Economic Calendar

*This model accepts additional fields of type unknown.*

## Structure

`EconomicCalendar`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `economicCalendar` | [`EconomicEvent[] \| undefined`](../../doc/models/economic-event.md) | Optional | Array of economic events. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EconomicCalendar } from 'finnhub-apilib';

const economicCalendar: EconomicCalendar = {
  economicCalendar: [
    {
      actual: 180.92,
      prev: 97.3,
      country: 'country0',
      unit: 'unit4',
      estimate: 120.82,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      actual: 180.92,
      prev: 97.3,
      country: 'country0',
      unit: 'unit4',
      estimate: 120.82,
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

