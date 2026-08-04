
# Etf Allocation Data

*This model accepts additional fields of type unknown.*

## Structure

`EtfAllocationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `largeBlend` | `number \| undefined` | Optional | Percentage of stocks classified as Large Blend. |
| `largeGrowth` | `number \| undefined` | Optional | Percentage of stocks classified as Large Growth. |
| `largeValue` | `number \| undefined` | Optional | Percentage of stocks classified as Large Value. |
| `midBlend` | `number \| undefined` | Optional | Percentage of stocks classified as Mid-cap Blend. |
| `midGrowth` | `number \| undefined` | Optional | Percentage of stocks classified as Mid-cap Growth. |
| `midValue` | `number \| undefined` | Optional | Percentage of stocks classified as Mid-cap Value. |
| `smallBlend` | `number \| undefined` | Optional | Percentage of stocks classified as Small-cap Blend. |
| `smallGrowth` | `number \| undefined` | Optional | Percentage of stocks classified as Small-cap Growth. |
| `smallValue` | `number \| undefined` | Optional | Percentage of stocks classified as Small-cap Value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtfAllocationData } from 'finnhub-apilib';

const etfAllocationData: EtfAllocationData = {
  largeBlend: 242.56,
  largeGrowth: 209.42,
  largeValue: 89.4,
  midBlend: 11.32,
  midGrowth: 40.48,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

