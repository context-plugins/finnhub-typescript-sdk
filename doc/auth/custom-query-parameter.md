
# Custom Query Parameter



Documentation for accessing and setting credentials for api_key.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| token | `string` | - | `token` |



**Note:** Auth credentials can be set using `customQueryAuthenticationCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from 'finnhub-apilib';

const client = new Client({
  customQueryAuthenticationCredentials: {
    'token': 'token'
  },
});
```


