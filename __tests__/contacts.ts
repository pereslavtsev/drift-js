import SDK, { Contact } from '../src';
import * as shortid from 'shortid';
import { makeSDKInstance } from './helpers';

describe('Contacts API', () => {
  let drift: SDK;
  let createdContact: Contact;
  let fakeEmail: string;

  beforeAll(() => {
    drift = makeSDKInstance();
  });

  describe('Creating a Contact', () => {
    beforeAll(async () => {
      fakeEmail = `${shortid.generate()}@mail.com`;
      createdContact = await drift.contacts.create({ email: fakeEmail });
    });

    it('it should be an object', () => {
      expect(typeof createdContact).toBe('object');
    });

    it('it should has the same email', () => {
      expect(createdContact.attributes.email).toBe(fakeEmail);
    });
  });

  describe('Retrieving a Contact by ID', () => {
    let retrievedContact: Contact;

    beforeAll(async () => {
      retrievedContact = await drift.contacts.getById(createdContact.id);
    });

    it('a created contact should be founded', () => {
      expect(retrievedContact).toBeDefined();
      expect(retrievedContact.id).toBe(createdContact.id);
    });
  });

  describe('Deleting a Contact', () => {
    it('a created contact should be deleted', async () => {
      const deleted = await drift.contacts.deleteById(createdContact.id);
      expect(deleted).toBeTruthy();
    });
  });
});
