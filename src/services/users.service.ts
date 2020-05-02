import { BaseService } from './base.service';
import { User } from '../interfaces';

export class UsersService extends BaseService {
  public list() {
    return this.getAll();
  }

  async getAll() {
    const { data } = await this.api.get<{ data: User[] }>('users/list');
    return data.data;
  }

  async getById(userId: User['id']) {
    const { data } = await this.api.get<{ data: User }>(`users/${userId}`);
    return data.data;
  }

  async getByIds(userIds?: User['id'][]) {
    const { data } = await this.api.get<{ data: { [key: number]: User } }>('users', {
      params: {
        userId: userIds,
      },
    });
    return data;
  }
}
