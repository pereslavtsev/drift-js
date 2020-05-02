import { BaseService } from './base.service';
import { Conversation } from '../interfaces';
import { ConversationStatus } from '../enums';

type ListingParams = {
  limit?: number;
  next?: Conversation['id'];
  statusId?: ConversationStatus;
};

export class ConversationsService<T = Conversation> extends BaseService {
  async getById(userId: Conversation['id']) {
    const { data } = await this.api.get<{ data: T }>(`conversations/${userId}`);
    return data.data;
  }

  list(...args: ListingParams[]) {
    return this.getAll(...args);
  }

  async getAll(params?: ListingParams) {
    const { data } = await this.api.get<{ data: T[] }>(`conversations/list`, {
      params,
    });
    return data.data;
  }
}
