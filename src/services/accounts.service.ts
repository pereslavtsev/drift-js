import { BaseService } from './base.service';
import { Account } from '../interfaces';

type EditableData = Omit<Account, 'id' | 'createDateTime' | 'updateDateTime'>;
type AccountData = Partial<Omit<EditableData, 'name' | 'domain' | 'ownerId'>> &
  Pick<EditableData, 'name' | 'domain' | 'ownerId'>;

export class AccountsService<T = Account> extends BaseService {
  async create(account: AccountData) {
    const { data } = await this.api.post<{ data: T }>('accounts/create', account);
    return data.data;
  }

  async getById(accountId: Account['accountId']) {
    const { data } = await this.api.get<{ data: T }>(`accounts/${accountId}`);
    return data.data;
  }

  async updateById(accountId: Account['accountId'], account: AccountData) {
    const { data } = await this.api.patch<{ data: T }>(`accounts/update`, {
      accountId,
      ...account,
    });
    return data.data;
  }

  async deleteById(accountId: Account['accountId']) {
    type Result = {
      result: 'OK';
      ok: boolean;
    };
    const { data } = await this.api.delete<Result>(`accounts/${accountId}`);
    return data.ok;
  }
}
