import { BaseService } from './base.service';
import { Contact, Conversation, Message, User } from '../interfaces';
import { ConversationStatus } from '../enums';

type ListingParams = {
  limit?: number;
  next?: Conversation['id'];
  statusId?: ConversationStatus;
};

type NewMessage = Pick<
  Message,
  'body' | 'type' | 'buttons' | 'editedMessageId' | 'editType'
> & {
  userId?: User['id'];
};

type Result<T> = {
  data: T[];
  pagination?: {
    more: boolean;
    next: string;
  };
};

/** Conversations API */
export class ConversationsService extends BaseService {
  /**
   * Creating a new Conversation
   * @param email
   * @param message
   */
  async create(email: Contact['attributes']['email'], message: NewMessage) {
    const { data } = await this.api.post<Conversation>('conversations/new', {
      email,
      message,
    });
    return data;
  }

  async getById(id: Conversation['id']) {
    const { data } = await this.api.get<{ data: Conversation }>(`conversations/${id}`);
    return data.data;
  }

  /**
   * Retrieving a Conversation's Attachment
   * @param id
   */
  async getAttachment(id: number) {
    const { data } = await this.api.get(`/attachments/${id}/data`);
    return data;
  }

  async sendMessage(to: Conversation['id'], msg: NewMessage) {
    const { data } = await this.api.post<{ data: Conversation }>(
      `conversations/${to}/list`,
      msg
    );
    return data.data;
  }

  /**
   * Retrieving a Conversation's Messages
   *
   * Retrieving a Conversation's Messages can be done via the following code:
   * ```javascript
   * const { data } = await drift.conversations.getMessages(123456);
   * ```
   * @param id Conversation ID
   * @param next
   */
  async getMessages(id: Conversation['id'], next?: number) {
    const { data } = await this.api.get<{ messages: Message[] }>(
      `conversations/${id}/messages`,
      {
        params: { next },
      }
    );
    return data;
  }

  async list(params?: ListingParams) {
    const { data } = await this.api.get<Result<Conversation>>('conversations/list', {
      params,
    });
    return {
      ...data,
    };
  }

  /**
   * Bulk Conversation Statuses
   * ```javascript
   * const { conversationCount } = await drift.conversations.getStats();
   * console.log(conversationCount.CLOSED)
   * console.log(conversationCount.OPEN)
   * console.log(conversationCount.PENDING)
   * ```
   */
  async stats() {
    type Result = {
      conversationCount: {
        CLOSED?: number;
        OPEN?: number;
        PENDING?: number;
      };
    };
    const { data } = await this.api.get<Result>('conversations/stats');
    return data;
  }
}
