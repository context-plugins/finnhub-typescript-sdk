
# Covid Info

*This model accepts additional fields of type unknown.*

## Structure

`CovidInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | `string \| undefined` | Optional | State. |
| `mCase` | `number \| undefined` | Optional | Number of confirmed cases. |
| `death` | `number \| undefined` | Optional | Number of confirmed deaths. |
| `updated` | `string \| undefined` | Optional | Updated time. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CovidInfo } from 'finnhub-apilib';

const covidInfo: CovidInfo = {
  state: 'state8',
  mCase: 241.82,
  death: 196.56,
  updated: 'updated2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

