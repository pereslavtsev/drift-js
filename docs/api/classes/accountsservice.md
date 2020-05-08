# Class: AccountsService

Accounts API

## Hierarchy

- [BaseService](baseservice.md)

  ↳ **AccountsService**

## Index

### Constructors

- [constructor](accountsservice.md#protected-constructor)

### Properties

- [api](accountsservice.md#protected-readonly-api)
- [options](accountsservice.md#protected-readonly-options)

### Methods

- [create](accountsservice.md#create)
- [deleteById](accountsservice.md#deletebyid)
- [getById](accountsservice.md#getbyid)
- [updateById](accountsservice.md#updatebyid)
- [init](accountsservice.md#static-init)

## Constructors

### <a id="protected-constructor" name="protected-constructor"></a> `Protected` constructor

\+ **new AccountsService**(`api`: AxiosInstance, `o`: [SDKOptions](../interfaces/sdkoptions.md)): _[AccountsService](accountsservice.md)_

_Inherited from [BaseService](baseservice.md).[constructor](baseservice.md#protected-constructor)_

**Parameters:**

| Name  | Type                                      |
| ----- | ----------------------------------------- |
| `api` | AxiosInstance                             |
| `o`   | [SDKOptions](../interfaces/sdkoptions.md) |

**Returns:** _[AccountsService](accountsservice.md)_

## Properties

### <a id="protected-readonly-api" name="protected-readonly-api"></a> `Protected` `Readonly` api

• **api**: _AxiosInstance_

_Inherited from [BaseService](baseservice.md).[api](baseservice.md#protected-readonly-api)_

---

### <a id="protected-readonly-options" name="protected-readonly-options"></a> `Protected` `Readonly` options

• **options**: _[SDKOptions](../interfaces/sdkoptions.md)_

_Inherited from [BaseService](baseservice.md).[options](baseservice.md#protected-readonly-options)_

## Methods

### <a id="create" name="create"></a> create

▸ **create**(`fields`: [AccountData](../globals.md#accountdata)): _Promise‹object›_

Creating an Account

Creating an account can be done via the following code:

```javascript
const { data } = await drift.accounts.create({
  ownerId: 123456,
  domain: 'www.acme.localhost',
  name: 'ACME Corp.',
});
```

**Parameters:**

| Name     | Type                                     | Description  |
| -------- | ---------------------------------------- | ------------ |
| `fields` | [AccountData](../globals.md#accountdata) | Account Data |

**Returns:** _Promise‹object›_

---

### <a id="deletebyid" name="deletebyid"></a> deleteById

▸ **deleteById**(`id`: Account["accountId"]): _Promise‹boolean›_

Deleting an Account

Deleting an account can be done with the following request:

```javascript
const deleted = await drift.accounts.deleteById('d2de07ea-8d29-11ea-bc55-0242ac130003');
console.log(deleted); // true
```

**Parameters:**

| Name | Type                 | Description |
| ---- | -------------------- | ----------- |
| `id` | Account["accountId"] | Account ID  |

**Returns:** _Promise‹boolean›_

---

### <a id="getbyid" name="getbyid"></a> getById

▸ **getById**(`id`: Account["accountId"]): _Promise‹object›_

Retrieving an account

You can retrieve accounts by id with the method:

```javascript
const { data } = await drift.accounts.getById('d2de07ea-8d29-11ea-bc55-0242ac130003');
```

**Parameters:**

| Name | Type                 | Description |
| ---- | -------------------- | ----------- |
| `id` | Account["accountId"] | Account ID  |

**Returns:** _Promise‹object›_

---

### <a id="updatebyid" name="updatebyid"></a> updateById

▸ **updateById**(`id`: Account["accountId"], `fields`: [AccountData](../globals.md#accountdata)): _Promise‹object›_

Updating Accounts

To update an account, use the following code:

```javascript
const { data } = await drift.accounts.updateById('d2de07ea-8d29-11ea-bc55-0242ac130003', {
  ownerId: 123456,
  domain: 'www.acme.localhost',
  name: 'ACME Corp.',
});
```

**Parameters:**

| Name     | Type                                     | Description  |
| -------- | ---------------------------------------- | ------------ |
| `id`     | Account["accountId"]                     | Account ID   |
| `fields` | [AccountData](../globals.md#accountdata) | Account Data |

**Returns:** _Promise‹object›_

---

### <a id="static-init" name="static-init"></a> `Static` init

▸ **init**(`api`: AxiosInstance, `o`: [SDKOptions](../interfaces/sdkoptions.md)): _[BaseService](baseservice.md)‹›_

_Inherited from [BaseService](baseservice.md).[init](baseservice.md#static-init)_

**Parameters:**

| Name  | Type                                      |
| ----- | ----------------------------------------- |
| `api` | AxiosInstance                             |
| `o`   | [SDKOptions](../interfaces/sdkoptions.md) |

**Returns:** _[BaseService](baseservice.md)‹›_
