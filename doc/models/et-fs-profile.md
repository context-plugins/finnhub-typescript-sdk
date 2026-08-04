
# Et Fs Profile

*This model accepts additional fields of type unknown.*

## Structure

`EtFsProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `profile` | [`EtfProfileData \| undefined`](../../doc/models/etf-profile-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtFsProfile } from 'finnhub-apilib';

const etFsProfile: EtFsProfile = {
  symbol: 'symbol4',
  profile: {
    name: 'name0',
    assetClass: 'assetClass2',
    investmentSegment: 'investmentSegment2',
    aum: 206.54,
    nav: 6.92,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

