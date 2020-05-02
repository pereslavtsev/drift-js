import SDK from '../src';

export const makeSDKInstance = () => {
  return new SDK({
    accessToken: String(process.env.ACCESS_TOKEN),
  });
};
