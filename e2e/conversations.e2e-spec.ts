import SDK, { Conversation } from '../src';
import { makeSDKInstance } from './helpers';

function numberOrUndefined(o: undefined | number) {
  return typeof o === 'undefined' || typeof o === 'number';
}

describe('Conversations API', () => {
  let drift: SDK;
  let realConversationID: Conversation['id'];

  beforeAll(() => {
    drift = makeSDKInstance();

    it('retrieve real conversation ID from environment', () => {
      expect(process.env.REAL_CONVERSATION_ID).toBeDefined();
    });

    realConversationID = parseInt(String(process.env.REAL_CONVERSATION_ID));
  });

  describe('Retrieving a Conversation by ID', () => {
    let conversation: Conversation;

    beforeAll(async () => {
      conversation = await drift.conversations.getById(realConversationID);
    });

    it(`a conversation with such ID should be founded`, async () => {
      expect(conversation).toBeTruthy();
      expect(conversation.id).toEqual(realConversationID);
    });
  });

  describe('Listing Conversations', () => {
    describe('Retrieving without query params', () => {
      let conversations: Conversation[];

      beforeAll(async () => {
        const { data } = await drift.conversations.list();
        conversations = data;
      });

      it(`it should be an array`, async () => {
        expect(Array.isArray(conversations)).toBeTruthy();
      });
    });

    describe('Retrieving a first 10 conversations', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let list: any;

      beforeAll(async () => {
        list = await drift.conversations.list({ limit: 10 });
      });

      it(`it should be an array`, () => {
        expect(Array.isArray(list.data)).toBeTruthy();
      });

      it(`it should has a 10 conversations only`, () => {
        expect((list.data as Conversation[]).length).toEqual(10);
      });

      // it(`it should has next 10 conversations`, async () => {
      //   const newList = await list.next();
      //   console.log('newList', newList.data)
      //   expect(Array.isArray(newList.data)).toBeTruthy();
      // });
    });
  });

  describe('Bulk Conversation Statuses', () => {
    let data: {
      CLOSED?: number;
      OPEN?: number;
      PENDING?: number;
    };

    beforeAll(async () => {
      const { conversationCount } = await drift.conversations.stats();

      data = conversationCount;
    });

    it(`it should be defined`, () => {
      expect(data).toBeDefined();
    });

    it(`it should be an object`, () => {
      expect(typeof data).toBe('object');
    });

    it(`CLOSED should be number`, () => {
      expect(numberOrUndefined(data.CLOSED)).toBeTruthy();
    });

    it(`OPEN should be number`, () => {
      expect(numberOrUndefined(data.OPEN)).toBeTruthy();
    });

    it(`PENDING should be number`, () => {
      expect(numberOrUndefined(data.PENDING)).toBeTruthy();
    });
  });
});
