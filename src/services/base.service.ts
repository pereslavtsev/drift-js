import { AxiosInstance } from 'axios';
import { SDKOptions } from '../sdk';

export class BaseService {
  protected readonly api: AxiosInstance;
  protected readonly options: SDKOptions;

  private static _instance: BaseService;

  protected constructor(api: AxiosInstance, o: SDKOptions) {
    this.api = api;
    this.options = o;
  }

  public static init(api: AxiosInstance, o: SDKOptions) {
    return this._instance || (this._instance = new this(api, o));
  }
}
