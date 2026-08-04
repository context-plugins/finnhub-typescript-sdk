
# Institutional Ownership Info

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalOwnershipInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cik` | `string \| undefined` | Optional | Investor's company CIK. |
| `name` | `string \| undefined` | Optional | Firm's name. |
| `putCall` | `string \| undefined` | Optional | <code>put</code> or <code>call</code> for options. |
| `change` | `number \| undefined` | Optional | Number of shares change. |
| `noVoting` | `number \| undefined` | Optional | Number of shares with no voting rights. |
| `percentage` | `number \| undefined` | Optional | Percentage of portfolio. |
| `share` | `number \| undefined` | Optional | News score. |
| `sharedVoting` | `number \| undefined` | Optional | Number of shares with shared voting rights. |
| `soleVoting` | `number \| undefined` | Optional | Number of shares with sole voting rights. |
| `value` | `number \| undefined` | Optional | Position value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalOwnershipInfo } from 'finnhub-apilib';

const institutionalOwnershipInfo: InstitutionalOwnershipInfo = {
  cik: 'cik2',
  name: 'name0',
  putCall: 'putCall0',
  change: 124.64,
  noVoting: 239.84,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

