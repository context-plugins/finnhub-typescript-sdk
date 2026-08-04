
# Economic Data Info

*This model accepts additional fields of type unknown.*

## Structure

`EconomicDataInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| undefined` | Optional | Date of the reading |
| `value` | `number \| undefined` | Optional | Value |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EconomicDataInfo } from 'finnhub-apilib';

const economicDataInfo: EconomicDataInfo = {
  date: 'date6',
  value: 6.1,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

