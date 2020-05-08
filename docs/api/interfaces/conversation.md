# Interface: Conversation

## Hierarchy

- **Conversation**

## Index

### Properties

- [contactId](conversation.md#contactid)
- [conversationTags](conversation.md#conversationtags)
- [createdAt](conversation.md#createdat)
- [id](conversation.md#id)
- [inboxId](conversation.md#inboxid)
- [participants](conversation.md#participants)
- [relatedPlaybookId](conversation.md#optional-relatedplaybookid)
- [status](conversation.md#status)
- [updatedAt](conversation.md#updatedat)

## Properties

### <a id="contactid" name="contactid"></a> contactId

• **contactId**: _Contact["id"]_

---

### <a id="conversationtags" name="conversationtags"></a> conversationTags

• **conversationTags**: _Array‹[ConversationTag](conversationtag.md)›_

---

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: _bigint_

---

### <a id="id" name="id"></a> id

• **id**: _number_

---

### <a id="inboxid" name="inboxid"></a> inboxId

• **inboxId**: _number_

---

### <a id="participants" name="participants"></a> participants

• **participants**: _Array‹Contact["id"] | User["id"]›_

---

### <a id="optional-relatedplaybookid" name="optional-relatedplaybookid"></a> `Optional` relatedPlaybookId

• **relatedPlaybookId**? : _undefined | number_

---

### <a id="status" name="status"></a> status

• **status**: _"open" | "closed" | "pending" | "bulk_sent"_

---

### <a id="updatedat" name="updatedat"></a> updatedAt

• **updatedAt**: _bigint_
