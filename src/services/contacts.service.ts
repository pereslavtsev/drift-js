import { BaseService } from './base.service';
import { Contact } from '../interfaces';

/** Contacts API */
export class ContactsService extends BaseService {
  /**
   * Creating a Contact
   *
   * The following example shows how to make a Contact:
   * @param attributes
   */
  async create(attributes: Contact['attributes']) {
    const { data } = await this.api.post<{ data: Contact }>('contacts', { attributes });
    return data.data;
  }

  /**
   * Retrieving a Contact by ID
   * @param id Contact ID
   */
  async getById(id: Contact['id']) {
    const { data } = await this.api.get<{ data: Contact }>(`contacts/${id}`);
    return data.data;
  }

  /**
   * Deleting a Contact
   * @param id Contact ID
   */
  async deleteById(id: Contact['id']) {
    const { status } = await this.api.delete<{ data: Contact }>(`contacts/${id}`);
    return status === 202;
  }
}
