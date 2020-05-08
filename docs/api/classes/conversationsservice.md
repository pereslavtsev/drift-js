# Class: ConversationsService

## Hierarchy

- [BaseService](baseservice.md)

  ↳ **ConversationsService**

## Index

### Constructors

- [constructor](conversationsservice.md#protected-constructor)

### Properties

- [api](conversationsservice.md#protected-readonly-api)
- [options](conversationsservice.md#protected-readonly-options)

### Methods

- [getById](conversationsservice.md#getbyid)
- [getMessages](conversationsservice.md#getmessages)
- [list](conversationsservice.md#list)
- [sendMessage](conversationsservice.md#sendmessage)
- [init](conversationsservice.md#static-init)

## Constructors

### <a id="protected-constructor" name="protected-constructor"></a> `Protected` constructor

\+ **new ConversationsService**(`api`: AxiosInstance, `o`: [SDKOptions](../interfaces/sdkoptions.md)): _[ConversationsService](conversationsservice.md)_

_Inherited from [BaseService](baseservice.md).[constructor](baseservice.md#protected-constructor)_

**Parameters:**

| Name  | Type                                      |
| ----- | ----------------------------------------- |
| `api` | AxiosInstance                             |
| `o`   | [SDKOptions](../interfaces/sdkoptions.md) |

**Returns:** _[ConversationsService](conversationsservice.md)_

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

▸ **getById**(`id`: Conversation["id"]): _Promise‹[Conversation](../interfaces/conversation.md)›_

**Parameters:**

| Name | Type               |
| ---- | ------------------ |
| `id` | Conversation["id"] |

**Returns:** _Promise‹[Conversation](../interfaces/conversation.md)›_

---

### <a id="getmessages" name="getmessages"></a> getMessages

▸ **getMessages**(`id`: Conversation["id"], `next?`: undefined | number): _Promise‹object›_

**Parameters:**

| Name    | Type                    |
| ------- | ----------------------- |
| `id`    | Conversation["id"]      |
| `next?` | undefined &#124; number |

**Returns:** _Promise‹object›_

---

### <a id="list" name="list"></a> list

▸ **list**(`params?`: [ListingParams](../globals.md#listingparams)): _Promise‹object›_

**Parameters:**

| Name      | Type                                         |
| --------- | -------------------------------------------- |
| `params?` | [ListingParams](../globals.md#listingparams) |

**Returns:** _Promise‹object›_

---

### <a id="sendmessage" name="sendmessage"></a> sendMessage

▸ **sendMessage**(`to`: Conversation["id"], `msg`: [NewMessage](../globals.md#newmessage)): _Promise‹[Conversation](../interfaces/conversation.md)›_

**Parameters:**

| Name  | Type                                   |
| ----- | -------------------------------------- |
| `to`  | Conversation["id"]                     |
| `msg` | [NewMessage](../globals.md#newmessage) |

**Returns:** _Promise‹[Conversation](../interfaces/conversation.md)›_

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
