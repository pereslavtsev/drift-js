# drift-js

## Index

### Enumerations

- [ConversationStatus](enums/conversationstatus.md)
- [UserAvailability](enums/useravailability.md)

### Classes

- [AccountsService](classes/accountsservice.md)
- [AppService](classes/appservice.md)
- [BaseService](classes/baseservice.md)
- [ContactsService](classes/contactsservice.md)
- [ConversationsService](classes/conversationsservice.md)
- [SDK](classes/sdk.md)
- [UsersService](classes/usersservice.md)

### Interfaces

- [Account](interfaces/account.md)
- [Contact](interfaces/contact.md)
- [ContactCustomAttribute](interfaces/contactcustomattribute.md)
- [ContactTag](interfaces/contacttag.md)
- [Conversation](interfaces/conversation.md)
- [ConversationTag](interfaces/conversationtag.md)
- [CustomProperty](interfaces/customproperty.md)
- [Meeting](interfaces/meeting.md)
- [Message](interfaces/message.md)
- [MessageButton](interfaces/messagebutton.md)
- [SDKOptions](interfaces/sdkoptions.md)
- [TokenInfo](interfaces/tokeninfo.md)
- [User](interfaces/user.md)

### Type aliases

- [AccountData](globals.md#accountdata)
- [EditableData](globals.md#editabledata)
- [ListingParams](globals.md#listingparams)
- [NewMessage](globals.md#newmessage)
- [Result](globals.md#result)
- [UpdateUserData](globals.md#updateuserdata)

## Type aliases

### <a id="accountdata" name="accountdata"></a> AccountData

Ƭ **AccountData**: _Partial‹Omit‹[EditableData](globals.md#editabledata), "name" | "domain" | "ownerId"›› & Pick‹[EditableData](globals.md#editabledata), "name" | "domain" | "ownerId"›_

---

### <a id="editabledata" name="editabledata"></a> EditableData

Ƭ **EditableData**: _Omit‹[Account](interfaces/account.md), "id" | "createDateTime" | "updateDateTime" | "deleted"›_

---

### <a id="listingparams" name="listingparams"></a> ListingParams

Ƭ **ListingParams**: _object_

#### Type declaration:

- **limit**? : _undefined | number_

- **next**? : _Conversation["id"]_

- **statusId**? : _[ConversationStatus](enums/conversationstatus.md)_

---

### <a id="newmessage" name="newmessage"></a> NewMessage

Ƭ **NewMessage**: _Pick‹[Message](interfaces/message.md), "body" | "type" | "buttons" | "editedMessageId" | "editType"› & object_

---

### <a id="result" name="result"></a> Result

Ƭ **Result**: _object_

#### Type declaration:

- **data**: _T[]_

- **pagination**? : _undefined | object_

---

### <a id="updateuserdata" name="updateuserdata"></a> UpdateUserData

Ƭ **UpdateUserData**: _Pick‹Partial‹[User](interfaces/user.md)›, "name" | "alias" | "email" | "phone" | "locale" | "avatarUrl" | "availability"›_

Acceptable Fields for Patch Body
