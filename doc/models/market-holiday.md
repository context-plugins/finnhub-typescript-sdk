
# Market Holiday

*This model accepts additional fields of type unknown.*

## Structure

`MarketHoliday`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timezone` | `string \| undefined` | Optional | Timezone. |
| `exchange` | `string \| undefined` | Optional | Exchange. |
| `data` | [`MarketHolidayData[] \| undefined`](../../doc/models/market-holiday-data.md) | Optional | Array of holidays. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MarketHoliday } from 'finnhub-apilib';

const marketHoliday: MarketHoliday = {
  timezone: 'timezone2',
  exchange: 'exchange2',
  data: [
    {
      eventName: 'eventName0',
      atDate: 'atDate6',
      tradingHour: 'tradingHour0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      eventName: 'eventName0',
      atDate: 'atDate6',
      tradingHour: 'tradingHour0',
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

