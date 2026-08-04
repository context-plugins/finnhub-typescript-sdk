
# Bond Yield Curve Info

*This model accepts additional fields of type unknown.*

## Structure

`BondYieldCurveInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `d` | `string \| undefined` | Optional | Date of the reading |
| `v` | `number \| undefined` | Optional | Value |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BondYieldCurveInfo } from 'finnhub-apilib';

const bondYieldCurveInfo: BondYieldCurveInfo = {
  d: 'd6',
  v: 120.92,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

