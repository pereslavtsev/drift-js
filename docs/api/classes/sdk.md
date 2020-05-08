# Class: SDK

Drift SDK

## Hierarchy

- **SDK**

## Index

### Constructors

- [constructor](sdk.md#constructor)

### Properties

- [api](sdk.md#private-readonly-api)
- [options](sdk.md#private-readonly-options)
- [USER_AGENT](sdk.md#static-readonly-user_agent)

### Accessors

- [accounts](sdk.md#accounts)
- [app](sdk.md#app)
- [contacts](sdk.md#contacts)
- [conversations](sdk.md#conversations)
- [users](sdk.md#users)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

\+ **new SDK**(`o`: [SDKOptions](../interfaces/sdkoptions.md)): _[SDK](sdk.md)_

**Parameters:**

| Name | Type                                      |
| ---- | ----------------------------------------- |
| `o`  | [SDKOptions](../interfaces/sdkoptions.md) |

**Returns:** _[SDK](sdk.md)_

## Properties

### <a id="private-readonly-api" name="private-readonly-api"></a> `Private` `Readonly` api

• **api**: _AxiosInstance_

---

### <a id="private-readonly-options" name="private-readonly-options"></a> `Private` `Readonly` options

• **options**: _[SDKOptions](../interfaces/sdkoptions.md)_

---

### <a id="static-readonly-user_agent" name="static-readonly-user_agent"></a> `Static` `Readonly` USER_AGENT

▪ **USER_AGENT**: _"Drift Javascript SDK"_ = "Drift Javascript SDK"

## Accessors

### <a id="accounts" name="accounts"></a> accounts

• **get accounts**(): _[AccountsService](accountsservice.md)‹›_

**Returns:** _[AccountsService](accountsservice.md)‹›_

---

### <a id="app" name="app"></a> app

• **get app**(): _[AppService](appservice.md)‹›_

**Returns:** _[AppService](appservice.md)‹›_

---

### <a id="contacts" name="contacts"></a> contacts

• **get contacts**(): _[ContactsService](contactsservice.md)‹›_

**Returns:** _[ContactsService](contactsservice.md)‹›_

---

### <a id="conversations" name="conversations"></a> conversations

• **get conversations**(): _[ConversationsService](conversationsservice.md)‹›_

**Returns:** _[ConversationsService](conversationsservice.md)‹›_

---

### <a id="users" name="users"></a> users

• **get users**(): _[UsersService](usersservice.md)‹›_

**Returns:** _[UsersService](usersservice.md)‹›_
