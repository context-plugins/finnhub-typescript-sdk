
# Et Fs Allocation

*This model accepts additional fields of type unknown.*

## Structure

`EtFsAllocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | ETF symbol. |
| `data` | [`EtfAllocationData \| undefined`](../../doc/models/etf-allocation-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtFsAllocation } from 'finnhub-apilib';

const etFsAllocation: EtFsAllocation = {
  symbol: 'symbol6',
  data: {
    largeBlend: 181.78,
    largeGrowth: 14.2,
    largeValue: 28.62,
    midBlend: 183.9,
    midGrowth: 235.7,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

