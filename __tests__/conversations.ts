import SDK, { Conversation } from '../src';
import { makeSDKInstance } from './helpers';

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
    let conversations: Conversation[];

    beforeAll(async () => {
      conversations = await drift.conversations.list();
    });

    it(`it should be an array`, async () => {
      expect(Array.isArray(conversations)).toBeTruthy();
    });
  });
});
