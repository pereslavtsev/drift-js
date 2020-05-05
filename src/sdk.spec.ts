import faker from 'faker';
import SDK from '../src';

describe('SDK init', () => {
  let drift: SDK;

  beforeAll(() => {
    drift = new SDK({
      accessToken: faker.random.uuid(),
      clientSecret: faker.random.uuid(),
      clientId: faker.random.uuid(),
    });
  });

  it('it should be an instance of Drift Javascript SDK class', () => {
    expect(drift).toBeInstanceOf(SDK);
  });
});
