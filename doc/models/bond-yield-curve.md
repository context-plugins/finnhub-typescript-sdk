
# Bond Yield Curve

*This model accepts additional fields of type unknown.*

## Structure

`BondYieldCurve`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`BondYieldCurveInfo[] \| undefined`](../../doc/models/bond-yield-curve-info.md) | Optional | Array of data. |
| `code` | `string \| undefined` | Optional | Bond's code |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BondYieldCurve } from 'finnhub-apilib';

const bondYieldCurve: BondYieldCurve = {
  data: [
    {
      d: 'd8',
      v: 123.74,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      d: 'd8',
      v: 123.74,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      d: 'd8',
      v: 123.74,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  code: 'code2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

