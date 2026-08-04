
# Isin Change

*This model accepts additional fields of type unknown.*

## Structure

`IsinChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromDate` | `string \| undefined` | Optional | From date. |
| `toDate` | `string \| undefined` | Optional | To date. |
| `data` | [`IsinChangeInfo[] \| undefined`](../../doc/models/isin-change-info.md) | Optional | Array of ISIN change events. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IsinChange } from 'finnhub-apilib';

const isinChange: IsinChange = {
  fromDate: 'fromDate2',
  toDate: 'toDate6',
  data: [
    {
      atDate: 'atDate6',
      oldIsin: 'oldIsin8',
      newIsin: 'newIsin0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      oldIsin: 'oldIsin8',
      newIsin: 'newIsin0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      atDate: 'atDate6',
      oldIsin: 'oldIsin8',
      newIsin: 'newIsin0',
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

