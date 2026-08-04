
# Lobbying Data

*This model accepts additional fields of type unknown.*

## Structure

`LobbyingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `name` | `string \| undefined` | Optional | Company's name. |
| `description` | `string \| undefined` | Optional | Description. |
| `country` | `string \| undefined` | Optional | Country. |
| `year` | `bigint \| undefined` | Optional | Year. |
| `period` | `string \| undefined` | Optional | Period. |
| `income` | `number \| undefined` | Optional | Income reported by lobbying firms. |
| `expenses` | `number \| undefined` | Optional | Expenses reported by the company. |
| `documentUrl` | `string \| undefined` | Optional | Document's URL. |
| `postedName` | `string \| undefined` | Optional | Posted name. |
| `date` | `string \| undefined` | Optional | Date. |
| `clientId` | `string \| undefined` | Optional | Client ID. |
| `registrantId` | `string \| undefined` | Optional | Registrant ID. |
| `senateId` | `string \| undefined` | Optional | Senate ID. |
| `houseregistrantId` | `string \| undefined` | Optional | House registrant ID. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LobbyingData } from 'finnhub-apilib';

const lobbyingData: LobbyingData = {
  symbol: 'symbol0',
  name: 'name8',
  description: 'description2',
  country: 'country2',
  year: BigInt(254),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

