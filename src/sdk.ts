import axios, { AxiosInstance } from 'axios';
import {
  AccountsService,
  ContactsService,
  ConversationsService,
  UsersService,
} from './services';

export interface SDKOptions {
  accessToken: string;
}

export class SDK {
  private readonly api: AxiosInstance;
  static readonly USER_AGENT = 'Drift Javascript SDK';

  constructor(o: SDKOptions) {
    this.api = axios.create({
      baseURL: 'https://driftapi.com/',
      headers: {
        Authorization: `Bearer ${o.accessToken}`,
        'Content-Type': 'application/json',
        'User-Agent': SDK.USER_AGENT,
      },
    });
  }

  get accounts() {
    return AccountsService.init(this.api) as AccountsService;
  }

  get contacts() {
    return ContactsService.init(this.api) as ContactsService;
  }

  get conversations() {
    return ConversationsService.init(this.api) as ConversationsService;
  }

  get users() {
    return UsersService.init(this.api) as UsersService;
  }
}
