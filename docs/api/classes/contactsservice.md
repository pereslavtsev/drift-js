# Class: ContactsService

Contacts API

## Hierarchy

- [BaseService](baseservice.md)

  ↳ **ContactsService**

## Index

### Constructors

- [constructor](contactsservice.md#protected-constructor)

### Properties

- [api](contactsservice.md#protected-readonly-api)
- [options](contactsservice.md#protected-readonly-options)

### Methods

- [create](contactsservice.md#create)
- [deleteById](contactsservice.md#deletebyid)
- [getById](contactsservice.md#getbyid)
- [init](contactsservice.md#static-init)

## Constructors

### <a id="protected-constructor" name="protected-constructor"></a> `Protected` constructor

\+ **new ContactsService**(`api`: AxiosInstance, `o`: [SDKOptions](../interfaces/sdkoptions.md)): _[ContactsService](contactsservice.md)_

_Inherited from [BaseService](baseservice.md).[constructor](baseservice.md#protected-constructor)_

**Parameters:**

| Name  | Type                                      |
| ----- | ----------------------------------------- |
| `api` | AxiosInstance                             |
| `o`   | [SDKOptions](../interfaces/sdkoptions.md) |

**Returns:** _[ContactsService](contactsservice.md)_

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

▸ **create**(`attributes`: Contact["attributes"]): _Promise‹[Contact](../interfaces/contact.md)›_

Creating a Contact

The following example shows how to make a Contact:

**Parameters:**

| Name         | Type                  | Description |
| ------------ | --------------------- | ----------- |
| `attributes` | Contact["attributes"] |             |

**Returns:** _Promise‹[Contact](../interfaces/contact.md)›_

---

### <a id="deletebyid" name="deletebyid"></a> deleteById

▸ **deleteById**(`id`: Contact["id"]): _Promise‹boolean›_

Deleting a Contact

**Parameters:**

| Name | Type          | Description |
| ---- | ------------- | ----------- |
| `id` | Contact["id"] | Contact ID  |

**Returns:** _Promise‹boolean›_

---

### <a id="getbyid" name="getbyid"></a> getById

▸ **getById**(`id`: Contact["id"]): _Promise‹[Contact](../interfaces/contact.md)›_

Retrieving a Contact by ID

**Parameters:**

| Name | Type          | Description |
| ---- | ------------- | ----------- |
| `id` | Contact["id"] | Contact ID  |

**Returns:** _Promise‹[Contact](../interfaces/contact.md)›_

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
