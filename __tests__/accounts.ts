import SDK, { Account, User } from '../src';
import { makeSDKInstance } from './helpers';
import faker from 'faker';

describe('Accounts API', () => {
  let drift: SDK;
  let account: Account;
  let ownerId: User['id'];

  beforeAll(() => {
    drift = makeSDKInstance();

    it('retrieve real user ID from environment', () => {
      expect(process.env.REAL_USER_ID).toBeDefined();
    });

    ownerId = parseInt(String(process.env.REAL_USER_ID));
  });

  describe('Creating an Account', () => {
    let domain: Account['domain'];
    let name: Account['name'];

    beforeAll(async () => {
      domain = faker.internet.domainName();
      name = faker.company.companyName();
      account = await drift.accounts.create({
        ownerId,
        domain,
        name,
      });
    });

    it('it should be an non nullable', () => {
      expect(typeof account).toBeTruthy();
    });

    it('it should be an object', () => {
      expect(typeof account).toBe('object');
    });

    it('it has the same data: owner ID, name and domain', () => {
      expect(account.ownerId).toEqual(ownerId);
      expect(account.name).toEqual(name);
      expect(account.domain).toEqual(domain);
    });
  });

  describe('Retrieving an Account', () => {
    let retrieved: Account;

    beforeAll(async () => {
      retrieved = await drift.accounts.getById(account.accountId);
    });

    it('a created contact should be founded', () => {
      expect(retrieved).toBeTruthy();
      expect(retrieved.accountId).toBe(account.accountId);
    });
  });

  describe('Updating an Account', () => {
    let changed: Account;
    let name: Account['name'];

    beforeAll(async () => {
      name = faker.company.companyName();
      changed = await drift.accounts.updateById(account.accountId, {
        name,
        domain: account.domain,
        ownerId: account.ownerId,
      });
    });

    it('a name of created account should be changed', () => {
      expect(changed).toBeTruthy();
      expect(changed.name).toBe(name);
    });
  });

  describe('Deleting an Account', () => {
    it('a created account should be deleted', async () => {
      const result = await drift.accounts.deleteById(account.accountId);
      expect(result).toBeTruthy();
    });
  });
});
