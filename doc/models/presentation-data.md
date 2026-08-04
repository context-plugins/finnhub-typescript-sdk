
# Presentation Data

*This model accepts additional fields of type unknown.*

## Structure

`PresentationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quarter` | `bigint \| undefined` | Optional | Quarter |
| `year` | `bigint \| undefined` | Optional | Year |
| `url` | `string \| undefined` | Optional | Presentation url |
| `title` | `string \| undefined` | Optional | Title |
| `atTime` | `string \| undefined` | Optional | At Time. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PresentationData } from 'finnhub-apilib';

const presentationData: PresentationData = {
  quarter: BigInt(96),
  year: BigInt(80),
  url: 'url6',
  title: 'title8',
  atTime: 'atTime2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

