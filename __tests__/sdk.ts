import SDK from '../src';
import { makeSDKInstance } from './helpers';

describe('SDK init', () => {
  let drift: SDK;

  beforeAll(() => {
    drift = makeSDKInstance();
  });

  it('it should be an instance of Drift Javascript SDK class', () => {
    expect(drift).toBeInstanceOf(SDK);
  });
});
