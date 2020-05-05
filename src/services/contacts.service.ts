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
   *
   * ```javascript
   * const { data } = await drift.contacts.getById(123456);
   * ```
   * @param id Contact ID
   */
  async getById(id: Contact['id']) {
    const { data } = await this.api.get<{ data: Contact }>(`contacts/${id}`);
    return data.data;
  }

  /**
   * Updating a Contact
   *
   * ```javascript
   * const { data } = await drift.contacts.updateById(123456, {
   *   name: 'Basic Contact
   * });
   * ```
   * @param id Contact ID
   * @param attributes Contact Attributes
   */
  async updateById(id: Contact['id'], attributes: Contact['attributes']) {
    const { data } = await this.api.patch<{ data: Contact }>(`contacts/${id}`, {
      attributes,
    });
    return data.data;
  }

  /**
   * Deleting a Contact
   *
   * ```javascript
   * const { data } = await drift.contacts.deleteById(123456);
   * ```
   * @param id Contact ID
   */
  async deleteById(id: Contact['id']) {
    const { status } = await this.api.delete<{ data: Contact }>(`contacts/${id}`);
    return status === 202;
  }
}
