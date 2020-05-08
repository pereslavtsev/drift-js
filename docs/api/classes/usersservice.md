# Class: UsersService

Users API

## Hierarchy

- [BaseService](baseservice.md)

  ↳ **UsersService**

## Index

### Constructors

- [constructor](usersservice.md#protected-constructor)

### Properties

- [api](usersservice.md#protected-readonly-api)
- [options](usersservice.md#protected-readonly-options)

### Methods

- [getById](usersservice.md#getbyid)
- [getByIds](usersservice.md#getbyids)
- [list](usersservice.md#list)
- [updateById](usersservice.md#updatebyid)
- [init](usersservice.md#static-init)

## Constructors

### <a id="protected-constructor" name="protected-constructor"></a> `Protected` constructor

\+ **new UsersService**(`api`: AxiosInstance, `o`: [SDKOptions](../interfaces/sdkoptions.md)): _[UsersService](usersservice.md)_

_Inherited from [BaseService](baseservice.md).[constructor](baseservice.md#protected-constructor)_

**Parameters:**

| Name  | Type                                      |
| ----- | ----------------------------------------- |
| `api` | AxiosInstance                             |
| `o`   | [SDKOptions](../interfaces/sdkoptions.md) |

**Returns:** _[UsersService](usersservice.md)_

## Properties

### <a id="protected-readonly-api" name="protected-readonly-api"></a> `Protected` `Readonly` api

• **api**: _AxiosInstance_

_Inherited from [BaseService](baseservice.md).[api](baseservice.md#protected-readonly-api)_

---

### <a id="protected-readonly-options" name="protected-readonly-options"></a> `Protected` `Readonly` options

• **options**: _[SDKOptions](../interfaces/sdkoptions.md)_

_Inherited from [BaseService](baseservice.md).[options](baseservice.md#protected-readonly-options)_

## Methods

### <a id="getbyid" name="getbyid"></a> getById

▸ **getById**(`id`: User["id"]): _Promise‹object›_

Retrieving User
To fetch information on a given user (an internal agent to your org), use the following code:

```javascript
const { data } = await drift.users.getById(123456);
```

**Parameters:**

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| `id` | User["id"] | User ID     |

**Returns:** _Promise‹object›_

---

### <a id="getbyids" name="getbyids"></a> getByIds

▸ **getByIds**(`ids`: User["id"][]): _Promise‹object›_

Retrieving a multiple users
You can also retrieve multiple users (up to 20) with single authenticated API call using this syntax.

```javascript
const { data } = await drift.users.getByIds([123456, 987654]);
```

**Parameters:**

| Name  | Type         | Description       |
| ----- | ------------ | ----------------- |
| `ids` | User["id"][] | Array of User IDs |

**Returns:** _Promise‹object›_

---

### <a id="list" name="list"></a> list

▸ **list**(): _Promise‹object›_

Listing Users

To list users in your org, you can use the following code:

```javascript
const { data } = await drift.users.list();
```

No pagination present on this query - this will return the full list of users (with the full user model metadata).

**Returns:** _Promise‹object›_

---

### <a id="updatebyid" name="updatebyid"></a> updateById

▸ **updateById**(`id`: User["id"], `fields`: [UpdateUserData](../globals.md#updateuserdata)): _Promise‹object›_

Updating a User ([API](https://devdocs.drift.com/docs/updating-users))

```javascript
const { data } = await drift.users.getByIds([123456, 987654]);
```

**Parameters:**

| Name     | Type                                           | Description |
| -------- | ---------------------------------------------- | ----------- |
| `id`     | User["id"]                                     | User ID     |
| `fields` | [UpdateUserData](../globals.md#updateuserdata) |             |

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
