import { BaseService } from './base.service';
import { User } from '../interfaces';

/** Acceptable Fields for Patch Body */
type UpdateUserData = Pick<
  Partial<User>,
  'name' | 'alias' | 'email' | 'phone' | 'locale' | 'avatarUrl' | 'availability'
>;

/** Users API */
export class UsersService extends BaseService {
  /**
   * Listing Users
   *
   * To list users in your org, you can use the following code:
   * ```javascript
   * const { data } = await drift.users.list();
   * ```
   * No pagination present on this query - this will return the full list of users (with the full user model metadata).
   */
  async list() {
    const { data } = await this.api.get<{ data: User[] }>('users/list');
    return data;
  }

  /**
   * Retrieving User
   * To fetch information on a given user (an internal agent to your org), use the following code:
   * ```javascript
   * const { data } = await drift.users.getById(123456);
   * ```
   * @param id User ID
   */
  async getById(id: User['id']) {
    const { data } = await this.api.get<{ data: User }>(`users/${id}`);
    return data;
  }

  /**
   * Retrieving a multiple users
   * You can also retrieve multiple users (up to 20) with single authenticated API call using this syntax.
   * ```javascript
   * const { data } = await drift.users.getByIds([123456, 987654]);
   * ```
   * @param ids Array of User IDs
   */
  async getByIds(ids: User['id'][]) {
    const { data } = await this.api.get<{ data: { [key: number]: User } }>('users', {
      params: {
        userId: ids,
      },
    });
    return data;
  }

  /**
   * Updating a User ([API](https://devdocs.drift.com/docs/updating-users))
   *
   * ```javascript
   * const { data } = await drift.users.getByIds([123456, 987654]);
   * ```
   * @param id User ID
   * @param fields
   */
  async updateById(id: User['id'], fields: UpdateUserData) {
    const { data } = await this.api.patch<{ data: User }>('users/update', fields, {
      params: {
        userId: id,
      },
    });
    return data;
  }
}
