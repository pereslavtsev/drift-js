import { AxiosInstance } from 'axios';

export class BaseService {
  protected readonly api: AxiosInstance;
  private static _instance: BaseService;

  protected constructor(api: AxiosInstance) {
    this.api = api;
  }

  public static init(api: AxiosInstance) {
    return this._instance || (this._instance = new this(api));
  }
}
