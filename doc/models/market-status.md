
# Market Status

*This model accepts additional fields of type unknown.*

## Structure

`MarketStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exchange` | `string \| undefined` | Optional | Exchange. |
| `timezone` | `string \| undefined` | Optional | Timezone. |
| `session` | `string \| undefined` | Optional | Market session. Can be 1 of the following values: <code>pre-market</code>,<code>regular</code>,<code>post-market</code> or <code>null</code> if the market is closed. |
| `holiday` | `string \| undefined` | Optional | Holiday event. |
| `isOpen` | `boolean \| undefined` | Optional | Whether the market is open at the moment. |
| `t` | `bigint \| undefined` | Optional | Current timestamp. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MarketStatus } from 'finnhub-apilib';

const marketStatus: MarketStatus = {
  exchange: 'exchange0',
  timezone: 'timezone6',
  session: 'session8',
  holiday: 'holiday8',
  isOpen: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

