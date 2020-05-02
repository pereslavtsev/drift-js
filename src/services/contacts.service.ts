import { BaseService } from './base.service';
import { Contact } from '../interfaces';

export class ContactsService extends BaseService {
  async create(attributes: Contact['attributes']) {
    const { data } = await this.api.post<{ data: Contact }>('contacts', { attributes });
    return data.data;
  }

  async getById(id: Contact['id']) {
    const { data } = await this.api.get<{ data: Contact }>(`contacts/${id}`);
    return data.data;
  }

  async deleteById(id: Contact['id']) {
    const { status } = await this.api.delete<{ data: Contact }>(`contacts/${id}`);
    return status === 202;
  }
}
