
# Ipo Calendar

*This model accepts additional fields of type unknown.*

## Structure

`IpoCalendar`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipoCalendar` | [`IpoEvent[] \| undefined`](../../doc/models/ipo-event.md) | Optional | Array of IPO events. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IpoCalendar } from 'finnhub-apilib';

const ipoCalendar: IpoCalendar = {
  ipoCalendar: [
    {
      symbol: 'symbol2',
      date: '2016-03-13T12:52:32.123Z',
      exchange: 'exchange4',
      name: 'name0',
      status: 'status2',
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

