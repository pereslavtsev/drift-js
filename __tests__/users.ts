import SDK from '../src';
import { makeSDKInstance } from './helpers';
import { User } from '../src';

describe('Users API', () => {
  let drift: SDK;
  let realUserID: User['id'];

  beforeAll(() => {
    drift = makeSDKInstance();

    it('retrieve real user ID from environment', () => {
      expect(process.env.REAL_USER_ID).toBeDefined();
    });

    realUserID = parseInt(String(process.env.REAL_USER_ID));
  });

  describe('Listing Users', () => {
    let users: User[];

    beforeAll(async () => {
      const { data } = await drift.users.list();
      users = data;
    });

    it('it should be array of objects', () => {
      expect(Array.isArray(users)).toBe(true);
      if (users.length) {
        expect(typeof users[0]).toBe('object');
      }
    });
  });

  describe('Retrieving a User', () => {
    describe('Retrieving by ID', () => {
      let user: User;

      beforeAll(async () => {
        const { data } = await drift.users.getById(realUserID);
        user = data;
      });

      it('it should be an object', () => {
        expect(typeof user).toBe('object');
      });
    });

    describe('Retrieving by ID (alternative)', () => {
      let users: { data: { [key: number]: User } };

      beforeAll(async () => {
        users = await drift.users.getByIds([realUserID]);
      });

      it('it should be an object', () => {
        expect(typeof users.data[realUserID]).toBe('object');
      });
    });
  });
});
