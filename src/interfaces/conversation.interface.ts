import { ConversationTag } from './conversation-tag.interface';
import { User } from './user.interface';
import { Contact } from './contact.interface';

export interface Conversation {
  id: number;
  participants: Array<Contact['id'] | User['id']>;
  status: 'open' | 'closed' | 'pending' | 'bulk_sent';
  contactId: Contact['id'];
  inboxId: number;
  createdAt: bigint;
  updatedAt: bigint;
  conversationTags: Array<ConversationTag>;
  relatedPlaybookId?: number;
}
