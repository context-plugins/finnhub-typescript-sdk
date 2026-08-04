
# Forexrates

*This model accepts additional fields of type unknown.*

## Structure

`Forexrates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `base` | `string \| undefined` | Optional | Base currency. |
| `quote` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Forexrates } from 'finnhub-apilib';

const forexrates: Forexrates = {
  base: 'base4',
  quote: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

