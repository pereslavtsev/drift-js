export interface TokenInfo {
  access_token: string;
  authenticated_userid: string;
  credential_id: string;
  token_type: 'bearer';
  expires_in: bigint;
  created_at: bigint;
  scope: string;
  id: string;
}
