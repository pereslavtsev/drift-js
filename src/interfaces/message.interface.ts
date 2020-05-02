import { MessageButton } from './message-button.interface';
import { Conversation } from './conversation.interface';
import { User } from './user.interface';
import { Contact } from './contact.interface';

export interface Message {
  id: bigint;
  orgId: number;
  body?: string;
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
  conversationId: Conversation['id'];
  createdAt: bigint;
  buttons?: Array<MessageButton>;
  context: {
    ip: string;
    userAgent: string;
  };
  editedMessageId?: Message['id'];
  editType?: 'delete' | 'replace' | 'replace_body' | 'replace_buttons';
  attributes?: { preMessages: object; developer_app_id: string } & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [keys: string]: any;
  };
  attachments?: Array<{
    fileName: string;
    mimeType: string;
    url: string;
  }>;
}
