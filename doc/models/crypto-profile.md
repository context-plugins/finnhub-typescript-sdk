
# Crypto Profile

*This model accepts additional fields of type unknown.*

## Structure

`CryptoProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `longName` | `string \| undefined` | Optional | Long name. |
| `name` | `string \| undefined` | Optional | Name. |
| `description` | `string \| undefined` | Optional | Description. |
| `website` | `string \| undefined` | Optional | Project's website. |
| `marketCap` | `number \| undefined` | Optional | Market capitalization. |
| `totalSupply` | `number \| undefined` | Optional | Total supply. |
| `maxSupply` | `number \| undefined` | Optional | Max supply. |
| `circulatingSupply` | `number \| undefined` | Optional | Circulating supply. |
| `logo` | `string \| undefined` | Optional | Logo image. |
| `launchDate` | `string \| undefined` | Optional | Launch date. |
| `proofType` | `string \| undefined` | Optional | Proof type. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CryptoProfile } from 'finnhub-apilib';

const cryptoProfile: CryptoProfile = {
  longName: 'longName4',
  name: 'name4',
  description: 'description4',
  website: 'website0',
  marketCap: 132.1,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

