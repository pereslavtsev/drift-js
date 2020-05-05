import { MessageButton } from './message-button.interface';
import { Conversation } from './conversation.interface';
import { User } from './user.interface';
import { Contact } from './contact.interface';
import { Attachment } from './attachment.interface';

/** Message Model */
export interface Message {
  /** A unique identifier for the Message. Should be treated as long or integer 64 bit data type. */
  id: number;
  /** The Drift organization this Message belongs to. */
  orgId: number;
  /** The text contents of this message, if applicable. See the Message Body section for details on the format. */
  body?: string;
  /**
   * An object describing who authored this Message. `author.type` is `contact` if the author was a Contact
   * and `user` if they were a User. `author.id` uniquely identifies the author within the object type specified by `author.type`.
   * Bot indicates whether the posting user is a bot (won't be true for contacts).
   */
  author:
    | {
        type: 'contact';
        id: Contact['id'];
        bot: false;
      }
    | {
        type: 'user';
        id: User['id'];
        bot: User['bot'];
      };
  type: 'chat' | 'private_note' | 'private_prompt' | 'suggestion' | 'edit';
  /** The `id` field of the Conversation this Message is a part of. */
  conversationId: Conversation['id'];
  /** A Unix timestamp representing the moment this Message was created. */
  createdAt: bigint;
  /** A (potentially absent) list of objects representing buttons presented to Users or Contacts from this message. */
  buttons?: Array<MessageButton>;
  /** An optional object representing potential metadata about where the Message was published from. */
  context: {
    ip: string;
    userAgent: string;
  };
  /** Required fields for `edit` type Messages, see the section on Editing Messages for details. */
  editedMessageId?: Message['id'];
  /** Required fields for `edit` type Messages, see the section on Editing Messages for details. */
  editType?: 'delete' | 'replace' | 'replace_body' | 'replace_buttons';
  /** Other metadata on the message. */
  attributes?: {
    /**
     *  If there were messages in the conversation prior to this current message,
     *  i.e. supplied by a bot user or on behalf of a drift user,
     *  these will be supplied here. This is generally present on the first site visitor message.
     */
    preMessages: object;
    /**
     * The dev app id will be included if the message was posted via the API.
     */
    developer_app_id: string;
  } & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [keys: string]: any;
  };
  attachments?: Attachment[];
}
