import axios, { AxiosInstance } from 'axios';
import qs from 'querystring';
import {
  AccountsService,
  AppService,
  ContactsService,
  ConversationsService,
  UsersService,
} from './services';

export interface SDKOptions {
  accessToken: string;
  clientId: string;
  clientSecret: string;
}

/** Drift SDK */
export class SDK {
  private readonly api: AxiosInstance;
  private readonly options: SDKOptions;

  static readonly USER_AGENT = 'Drift Javascript SDK';

  constructor(o: SDKOptions) {
    this.options = o;
    this.api = axios.create({
      baseURL: 'https://driftapi.com/',
      headers: {
        Authorization: `Bearer ${o.accessToken}`,
        'Content-Type': 'application/json',
        'User-Agent': SDK.USER_AGENT,
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
    });
  }

  get accounts() {
    return AccountsService.init(this.api, this.options) as AccountsService;
  }

  get app() {
    return AppService.init(this.api, this.options) as AppService;
  }

  get contacts() {
    return ContactsService.init(this.api, this.options) as ContactsService;
  }

  get conversations() {
    return ConversationsService.init(this.api, this.options) as ConversationsService;
  }

  get users() {
    return UsersService.init(this.api, this.options) as UsersService;
  }
}
