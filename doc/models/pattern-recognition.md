
# Pattern Recognition

*This model accepts additional fields of type unknown.*

## Structure

`PatternRecognition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `points` | `unknown[] \| undefined` | Optional | Array of patterns. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatternRecognition } from 'finnhub-apilib';

const patternRecognition: PatternRecognition = {
  points: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

