
# Bond Tick Data

*This model accepts additional fields of type unknown.*

## Structure

`BondTickData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `skip` | `bigint \| undefined` | Optional | Number of ticks skipped. |
| `count` | `bigint \| undefined` | Optional | Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned. |
| `total` | `bigint \| undefined` | Optional | Total number of ticks for that date. |
| `v` | `number[] \| undefined` | Optional | List of volume data. |
| `p` | `number[] \| undefined` | Optional | List of price data. |
| `y` | `number[] \| undefined` | Optional | List of yield data. |
| `t` | `bigint[] \| undefined` | Optional | List of timestamp in UNIX ms. |
| `si` | `string[] \| undefined` | Optional | List of values showing the side (Buy/sell) of each trade. List of supported values: <a target="_blank" href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing",>here</a> |
| `cp` | `string[] \| undefined` | Optional | List of values showing the counterparty of each trade. List of supported values: <a target="_blank" href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing",>here</a> |
| `rp` | `string[] \| undefined` | Optional | List of values showing the reporting party of each trade. List of supported values: <a target="_blank" href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing",>here</a> |
| `ats` | `string[] \| undefined` | Optional | ATS flag. Y or empty |
| `c` | `string[] \| undefined` | Optional | List of trade conditions. A comprehensive list of trade conditions code can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing">here</a> |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BondTickData } from 'finnhub-apilib';

const bondTickData: BondTickData = {
  skip: BigInt(186),
  count: BigInt(110),
  total: BigInt(160),
  v: [
    241.96,
    241.97,
    241.98
  ],
  p: [
    26.05
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

