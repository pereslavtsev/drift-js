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

  async getById(id: Account['accountId']) {
    const { data } = await this.api.get<{ data: T }>(`accounts/${id}`);
    return data.data;
  }

  async updateById(id: Account['accountId'], account: AccountData) {
    const { data } = await this.api.patch<{ data: T }>(`accounts/update`, {
      id,
      ...account,
    });
    return data.data;
  }

  async deleteById(id: Account['accountId']) {
    type Result = {
      result: 'OK';
      ok: boolean;
    };
    const { data } = await this.api.delete<Result>(`accounts/${id}`);
    return data.ok;
  }
}
