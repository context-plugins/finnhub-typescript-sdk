
# Bond Profile

*This model accepts additional fields of type unknown.*

## Structure

`BondProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `cusip` | `string \| undefined` | Optional | Cusip. |
| `figi` | `string \| undefined` | Optional | FIGI. |
| `coupon` | `number \| undefined` | Optional | Coupon. |
| `maturityDate` | `string \| undefined` | Optional | Period. |
| `offeringPrice` | `number \| undefined` | Optional | Offering price. |
| `issueDate` | `string \| undefined` | Optional | Issue date. |
| `bondType` | `string \| undefined` | Optional | Bond type. |
| `debtType` | `string \| undefined` | Optional | Bond type. |
| `industryGroup` | `string \| undefined` | Optional | Industry. |
| `industrySubGroup` | `string \| undefined` | Optional | Sub-Industry. |
| `asset` | `string \| undefined` | Optional | Asset. |
| `assetType` | `string \| undefined` | Optional | Asset. |
| `datedDate` | `string \| undefined` | Optional | Dated date. |
| `firstCouponDate` | `string \| undefined` | Optional | First coupon date. |
| `originalOffering` | `number \| undefined` | Optional | Offering amount. |
| `amountOutstanding` | `number \| undefined` | Optional | Outstanding amount. |
| `paymentFrequency` | `string \| undefined` | Optional | Payment frequency. |
| `securityLevel` | `string \| undefined` | Optional | Security level. |
| `callable` | `boolean \| undefined` | Optional | Callable. |
| `couponType` | `string \| undefined` | Optional | Coupon type. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BondProfile } from 'finnhub-apilib';

const bondProfile: BondProfile = {
  isin: 'isin8',
  cusip: 'cusip0',
  figi: 'figi4',
  coupon: 143.12,
  maturityDate: 'maturityDate2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

