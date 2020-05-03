import SDK from '../src';

export const makeSDKInstance = () => {
  return new SDK({
    accessToken: String(process.env.ACCESS_TOKEN),
    clientId: String(process.env.CLIENT_ID),
    clientSecret: String(process.env.CLIENT_SECRET),
  });
};
