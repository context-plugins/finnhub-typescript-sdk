
# Lobbying Result

*This model accepts additional fields of type unknown.*

## Structure

`LobbyingResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `data` | [`LobbyingData[] \| undefined`](../../doc/models/lobbying-data.md) | Optional | Array of lobbying activities. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LobbyingResult } from 'finnhub-apilib';

const lobbyingResult: LobbyingResult = {
  symbol: 'symbol6',
  data: [
    {
      symbol: 'symbol2',
      name: 'name0',
      description: 'description0',
      country: 'country4',
      year: BigInt(34),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol2',
      name: 'name0',
      description: 'description0',
      country: 'country4',
      year: BigInt(34),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

