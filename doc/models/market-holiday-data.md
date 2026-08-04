
# Market Holiday Data

*This model accepts additional fields of type unknown.*

## Structure

`MarketHolidayData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string \| undefined` | Optional | Holiday's name. |
| `atDate` | `string \| undefined` | Optional | Date. |
| `tradingHour` | `string \| undefined` | Optional | Trading hours for this day if the market is partially closed only. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MarketHolidayData } from 'finnhub-apilib';

const marketHolidayData: MarketHolidayData = {
  eventName: 'eventName4',
  atDate: 'atDate0',
  tradingHour: 'tradingHour4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

