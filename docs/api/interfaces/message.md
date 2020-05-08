# Interface: Message

## Hierarchy

- **Message**

## Index

### Properties

- [attachments](message.md#optional-attachments)
- [attributes](message.md#optional-attributes)
- [author](message.md#author)
- [body](message.md#optional-body)
- [buttons](message.md#optional-buttons)
- [context](message.md#context)
- [conversationId](message.md#conversationid)
- [createdAt](message.md#createdat)
- [editType](message.md#optional-edittype)
- [editedMessageId](message.md#optional-editedmessageid)
- [id](message.md#id)
- [orgId](message.md#orgid)
- [type](message.md#type)

## Properties

### <a id="optional-attachments" name="optional-attachments"></a> `Optional` attachments

• **attachments**? : _Array‹object›_

---

### <a id="optional-attributes" name="optional-attributes"></a> `Optional` attributes

• **attributes**? : _object & object_

---

### <a id="author" name="author"></a> author

• **author**: _object | object_

---

### <a id="optional-body" name="optional-body"></a> `Optional` body

• **body**? : _undefined | string_

---

### <a id="optional-buttons" name="optional-buttons"></a> `Optional` buttons

• **buttons**? : _Array‹[MessageButton](messagebutton.md)›_

---

### <a id="context" name="context"></a> context

• **context**: _object_

#### Type declaration:

- **ip**: _string_

- **userAgent**: _string_

---

### <a id="conversationid" name="conversationid"></a> conversationId

• **conversationId**: _Conversation["id"]_

---

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: _bigint_

---

### <a id="optional-edittype" name="optional-edittype"></a> `Optional` editType

• **editType**? : _"delete" | "replace" | "replace_body" | "replace_buttons"_

---

### <a id="optional-editedmessageid" name="optional-editedmessageid"></a> `Optional` editedMessageId

• **editedMessageId**? : _Message["id"]_

---

### <a id="id" name="id"></a> id

• **id**: _bigint_

---

### <a id="orgid" name="orgid"></a> orgId

• **orgId**: _number_

---

### <a id="type" name="type"></a> type

• **type**: _"chat" | "private_note" | "private_prompt" | "suggestion" | "edit"_
