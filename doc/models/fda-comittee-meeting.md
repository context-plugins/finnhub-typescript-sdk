
# Fda Comittee Meeting

*This model accepts additional fields of type unknown.*

## Structure

`FdaComitteeMeeting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromDate` | `string \| undefined` | Optional | Start time of the event in EST. |
| `toDate` | `string \| undefined` | Optional | End time of the event in EST. |
| `eventDescription` | `string \| undefined` | Optional | Event's description. |
| `url` | `string \| undefined` | Optional | URL. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FdaComitteeMeeting } from 'finnhub-apilib';

const fdaComitteeMeeting: FdaComitteeMeeting = {
  fromDate: 'fromDate4',
  toDate: 'toDate4',
  eventDescription: 'eventDescription0',
  url: 'url6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

