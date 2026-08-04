
# Upgrade Downgrade

*This model accepts additional fields of type unknown.*

## Structure

`UpgradeDowngrade`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `gradeTime` | `bigint \| undefined` | Optional | Upgrade/downgrade time in UNIX timestamp. |
| `fromGrade` | `string \| undefined` | Optional | From grade. |
| `toGrade` | `string \| undefined` | Optional | To grade. |
| `company` | `string \| undefined` | Optional | Company/analyst who did the upgrade/downgrade. |
| `action` | `string \| undefined` | Optional | Action can take any of the following values: <code>up(upgrade), down(downgrade), main(maintains), init(initiate), reit(reiterate)</code>. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpgradeDowngrade } from 'finnhub-apilib';

const upgradeDowngrade: UpgradeDowngrade = {
  symbol: 'symbol6',
  gradeTime: BigInt(174),
  fromGrade: 'fromGrade4',
  toGrade: 'toGrade0',
  company: 'company8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

