import { BaseService } from './base.service';
import { Conversation } from '../interfaces';

export class ConversationsService extends BaseService {
  async getById(userId: Conversation['id']) {
    const { data } = await this.api.get<{ data: Conversation }>(
      `conversations/${userId}`
    );
    return data.data;
  }
}
