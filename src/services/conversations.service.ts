import { BaseService } from './base.service';
import { Conversation, Message, User } from '../interfaces';
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
  pagination: {
    more: boolean;
    next: string;
  };
};

export class ConversationsService<T = Conversation> extends BaseService {
  async getById(id: Conversation['id']) {
    const { data } = await this.api.get<{ data: T }>(`conversations/${id}`);
    return data.data;
  }

  async sendMessage(to: Conversation['id'], msg: NewMessage) {
    const { data } = await this.api.post<{ data: T }>(`conversations/${to}/list`, msg);
    return data.data;
  }

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
    const { data } = await this.api.get<Result<T>>('conversations/list', {
      params,
    });
    return {
      ...data,
      // next: () =>
      //   new Promise(resolve => {
      //     if (!data.pagination.more) {
      //       resolve();
      //     }
      //     if (data.pagination.next) {
      //       resolve(
      //         this.list({
      //           limit: params?.limit,
      //           statusId: params?.statusId,
      //           next: parseInt(data.pagination.next),
      //         })
      //       );
      //     } else {
      //       resolve();
      //     }
      //   }),
    };
  }
}
