# Interface: User

User Model

## Hierarchy

- **User**

## Index

### Properties

- [alias](user.md#alias)
- [availability](user.md#availability)
- [avatarUrl](user.md#avatarurl)
- [bot](user.md#bot)
- [createdAt](user.md#createdat)
- [email](user.md#email)
- [id](user.md#id)
- [locale](user.md#locale)
- [name](user.md#name)
- [orgId](user.md#orgid)
- [phone](user.md#phone)
- [role](user.md#role)
- [timeZone](user.md#timezone)
- [updatedAt](user.md#updatedat)
- [verified](user.md#verified)

## Properties

### <a id="alias" name="alias"></a> alias

• **alias**: _string_

The short hand name for the user (if present).

---

### <a id="availability" name="availability"></a> availability

• **availability**: _[UserAvailability](../enums/useravailability.md)_

Description of user's current state

---

### <a id="avatarurl" name="avatarurl"></a> avatarUrl

• **avatarUrl**: _string_

The url for the user's avatar (profile) image.

---

### <a id="bot" name="bot"></a> bot

• **bot**: _boolean_

Is the user a bot user?

---

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: _bigint_

Timestamp (milliseconds) representing when the user was created.

---

### <a id="email" name="email"></a> email

• **email**: _string_

The email of the user.

---

### <a id="id" name="id"></a> id

• **id**: _number_

The Drift identifier for the user. This is will always be numeric.

---

### <a id="locale" name="locale"></a> locale

• **locale**: _string_

The locale for the user.

---

### <a id="name" name="name"></a> name

• **name**: _string_

The name of the user.

---

### <a id="orgid" name="orgid"></a> orgId

• **orgId**: _number_

---

### <a id="phone" name="phone"></a> phone

• **phone**: _string_

The phone number associated with the user.

---

### <a id="role" name="role"></a> role

• **role**: _"member" | "admin" | "agent"_

Role of drift user

---

### <a id="timezone" name="timezone"></a> timeZone

• **timeZone**: _string_

Timezone for the user represented as a string (if known)

---

### <a id="updatedat" name="updatedat"></a> updatedAt

• **updatedAt**: _bigint_

Timestamp (milliseconds) representing when the user was last updated.

---

### <a id="verified" name="verified"></a> verified

• **verified**: _boolean_

Is the user account verified? i.e. belongs to an actual person / not manually created?
