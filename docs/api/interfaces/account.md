# Interface: Account

Account Model

## Hierarchy

- **Account**

## Index

### Properties

- [accountId](account.md#accountid)
- [createDateTime](account.md#createdatetime)
- [customProperties](account.md#optional-customproperties)
- [deleted](account.md#deleted)
- [domain](account.md#domain)
- [name](account.md#name)
- [ownerId](account.md#ownerid)
- [targeted](account.md#targeted)
- [updateDateTime](account.md#updatedatetime)

## Properties

### <a id="accountid" name="accountid"></a> accountId

• **accountId**: _string_

Identifier for the company (used for lookup).

---

### <a id="createdatetime" name="createdatetime"></a> createDateTime

• **createDateTime**: _bigint_

The timestamp creation time of the account.

---

### <a id="optional-customproperties" name="optional-customproperties"></a> `Optional` customProperties

• **customProperties**? : _[CustomProperty](customproperty.md)[]_

List of custom properties associated with the account.

---

### <a id="deleted" name="deleted"></a> deleted

• **deleted**: _boolean_

Is the account deleted (deleted accounts won't be visible in drift, but are retrievable by id for auditing).

---

### <a id="domain" name="domain"></a> domain

• **domain**: _string_

The domain of the company.

---

### <a id="name" name="name"></a> name

• **name**: _string_

The name of the company.

---

### <a id="ownerid" name="ownerid"></a> ownerId

• **ownerId**: _User["id"]_

The id of the owner in drift (should be a known user id).

---

### <a id="targeted" name="targeted"></a> targeted

• **targeted**: _true_

Is the account currently targeted.

---

### <a id="updatedatetime" name="updatedatetime"></a> updateDateTime

• **updateDateTime**: _bigint_

The timestamp last updated time of the account.
