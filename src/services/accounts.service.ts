import { BaseService } from './base.service';
import { Account } from '../interfaces';

// Note that fields like id, creation time, update time, and deleted will be controlled/assigned by drift.
type EditableData = Omit<Account, 'id' | 'createDateTime' | 'updateDateTime' | 'deleted'>;
type AccountData = Partial<Omit<EditableData, 'name' | 'domain' | 'ownerId'>> &
  Pick<EditableData, 'name' | 'domain' | 'ownerId'>;

/** Accounts API */
export class AccountsService extends BaseService {
  /**
   * Creating an Account
   *
   * Creating an account can be done via the following code:
   * ```javascript
   * const { data } = await drift.accounts.create({
   *   ownerId: 123456,
   *   domain: 'www.acme.localhost',
   *   name: 'ACME Corp.',
   * });
   * ```
   * @param fields Account Data
   */
  async create(fields: AccountData) {
    const { data } = await this.api.post<{ data: Account }>('accounts/create', fields);
    return data;
  }

  /**
   * Retrieving an account
   *
   * You can retrieve accounts by id with the method:
   * ```javascript
   * const { data } = await drift.accounts.getById('d2de07ea-8d29-11ea-bc55-0242ac130003');
   * ```
   * @param id Account ID
   */
  async getById(id: Account['accountId']) {
    const { data } = await this.api.get<{ data: Account }>(`accounts/${id}`);
    return data;
  }

  /**
   * Updating Accounts
   *
   * To update an account, use the following code:
   * ```javascript
   * const { data } = await drift.accounts.updateById('d2de07ea-8d29-11ea-bc55-0242ac130003', {
   *   ownerId: 123456,
   *   domain: 'www.acme.localhost',
   *   name: 'ACME Corp.',
   * });
   * ```
   * @param id Account ID
   * @param fields Account Data
   */
  async updateById(id: Account['accountId'], fields: AccountData) {
    const { data } = await this.api.patch<{ data: Account }>(`accounts/update`, {
      id,
      ...fields,
    });
    return data;
  }

  /**
   * Deleting an Account
   *
   * Deleting an account can be done with the following request:
   * ```javascript
   * const deleted = await drift.accounts.deleteById('d2de07ea-8d29-11ea-bc55-0242ac130003');
   * console.log(deleted) // true
   * ```
   * @param id Account ID
   */
  async deleteById(id: Account['accountId']) {
    type Result = {
      result: 'OK';
      ok: boolean;
    };
    const { data } = await this.api.delete<Result>(`accounts/${id}`);
    return data.ok;
  }
}
