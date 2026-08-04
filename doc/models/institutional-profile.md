
# Institutional Profile

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cik` | `string \| undefined` | Optional | CIK. |
| `data` | [`InstitutionalProfileInfo[] \| undefined`](../../doc/models/institutional-profile-info.md) | Optional | Array of investors. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalProfile } from 'finnhub-apilib';

const institutionalProfile: InstitutionalProfile = {
  cik: 'cik2',
  data: [
    {
      cik: 'cik2',
      firmType: 'firmType6',
      manager: 'manager2',
      philosophy: 'philosophy8',
      profile: 'profile0',
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

