
# Isin Change Info

*This model accepts additional fields of type unknown.*

## Structure

`IsinChangeInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `atDate` | `string \| undefined` | Optional | Event's date. |
| `oldIsin` | `string \| undefined` | Optional | Old ISIN. |
| `newIsin` | `string \| undefined` | Optional | New ISIN. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IsinChangeInfo } from 'finnhub-apilib';

const isinChangeInfo: IsinChangeInfo = {
  atDate: 'atDate2',
  oldIsin: 'oldIsin4',
  newIsin: 'newIsin4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

