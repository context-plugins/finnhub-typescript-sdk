
# Supply Chain Relationships

*This model accepts additional fields of type unknown.*

## Structure

`SupplyChainRelationships`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | symbol |
| `data` | [`KeyCustomersSuppliers[] \| undefined`](../../doc/models/key-customers-suppliers.md) | Optional | Key customers and suppliers. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SupplyChainRelationships } from 'finnhub-apilib';

const supplyChainRelationships: SupplyChainRelationships = {
  symbol: 'symbol2',
  data: [
    {
      symbol: 'symbol2',
      name: 'name0',
      country: 'country4',
      industry: 'industry0',
      customer: false,
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

