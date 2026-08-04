
# Breakdown Item

*This model accepts additional fields of type unknown.*

## Structure

`BreakdownItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessNumber` | `string \| undefined` | Optional | Access number of the report from which the data is sourced. |
| `breakdown` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BreakdownItem } from 'finnhub-apilib';

const breakdownItem: BreakdownItem = {
  accessNumber: 'accessNumber2',
  breakdown: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

