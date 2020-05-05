import SDK, { SDKOptions } from '../src';
import { makeSDKInstance } from './helpers';

describe('App API', () => {
  let drift: SDK;
  let accessToken: SDKOptions['accessToken'];

  beforeAll(() => {
    drift = makeSDKInstance();

    it('retrieve an access token from the environment', () => {
      expect(process.env.ACCESS_TOKEN).toBeDefined();
    });

    accessToken = String(process.env.ACCESS_TOKEN);
  });

  describe('Get Token Information', async () => {
    const tokenInfo = await drift.app.getTokenInfo();

    it('it should be defined', () => {
      expect(tokenInfo).toBeDefined();
    });

    it('it should be an object', () => {
      expect(typeof tokenInfo).toEqual('object');
    });

    it('it should has the same token', () => {
      expect(tokenInfo.access_token).toEqual(accessToken);
    });
  });
});
