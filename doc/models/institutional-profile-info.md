
# Institutional Profile Info

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalProfileInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cik` | `string \| undefined` | Optional | Investor's company CIK. |
| `firmType` | `string \| undefined` | Optional | Firm type. |
| `manager` | `string \| undefined` | Optional | Manager. |
| `philosophy` | `string \| undefined` | Optional | Investing philosophy. |
| `profile` | `string \| undefined` | Optional | Profile info. |
| `profileImg` | `string \| undefined` | Optional | Profile image. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalProfileInfo } from 'finnhub-apilib';

const institutionalProfileInfo: InstitutionalProfileInfo = {
  cik: 'cik0',
  firmType: 'firmType4',
  manager: 'manager0',
  philosophy: 'philosophy6',
  profile: 'profile2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

