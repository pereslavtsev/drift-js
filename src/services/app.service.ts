import { BaseService } from './base.service';
import { TokenInfo } from '../interfaces';

/** App admin API */
export class AppService extends BaseService {
  /**
   * Trigger App Uninstall
   *
   * If your integration is public, you can uninstall the integration on behalf of a client who has connected your app via our API using the following method:
   * ```javascript
   * const uninstalled = await drift.app.uninstall();
   * console.log(uninstalled) // true
   * ```
   */
  async uninstall() {
    type Result = {
      result: 'OK';
      ok: boolean;
    };
    const { clientId, clientSecret } = this.options;
    const { data } = await this.api.post<Result>('app/uninstall', null, {
      params: { clientId, clientSecret },
    });
    return data.ok;
  }

  /**
   * Get Token Information
   *
   * Get the meta data for an access token:
   * ```javascript
   * const tokenInfo = await drift.app.getTokenInfo();
   * ```
   */
  async getTokenInfo() {
    const { data } = await this.api.get<TokenInfo>('app/token_info');
    return data;
  }
}
