
# Filing Sentiment

*This model accepts additional fields of type unknown.*

## Structure

`FilingSentiment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `negative` | `number \| undefined` | Optional | % of negative words in the filing. |
| `positive` | `number \| undefined` | Optional | % of positive words in the filing. |
| `polarity` | `number \| undefined` | Optional | % of polarity words in the filing. |
| `litigious` | `number \| undefined` | Optional | % of litigious words in the filing. |
| `uncertainty` | `number \| undefined` | Optional | % of uncertainty words in the filing. |
| `constraining` | `number \| undefined` | Optional | % of constraining words in the filing. |
| `modalWeak` | `number \| undefined` | Optional | % of modal-weak words in the filing. |
| `modalStrong` | `number \| undefined` | Optional | % of modal-strong words in the filing. |
| `modalModerate` | `number \| undefined` | Optional | % of modal-moderate words in the filing. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FilingSentiment } from 'finnhub-apilib';

const filingSentiment: FilingSentiment = {
  negative: 14.62,
  positive: 134.3,
  polarity: 33.12,
  litigious: 170.44,
  uncertainty: 205.84,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

