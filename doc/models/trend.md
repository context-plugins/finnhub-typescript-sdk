
# Trend

*This model accepts additional fields of type unknown.*

## Structure

`Trend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adx` | `number \| undefined` | Optional | ADX reading |
| `trending` | `boolean \| undefined` | Optional | Whether market is trending or going sideway |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Trend } from 'finnhub-apilib';

const trend: Trend = {
  adx: 120.96,
  trending: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

