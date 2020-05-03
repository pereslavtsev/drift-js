import { CustomProperty } from './custom-property.interface';
import { User } from './user.interface';

/** Account Model */
export interface Account {
  /** The id of the owner in drift (should be a known user id). */
  ownerId: User['id'];
  /** The name of the company. */
  name: string;
  /** The domain of the company. */
  domain: string;
  /** Identifier for the company (used for lookup). */
  accountId: string;
  /** List of custom properties associated with the account. */
  customProperties?: CustomProperty[];
  /** Is the account deleted (deleted accounts won't be visible in drift, but are retrievable by id for auditing). */
  deleted: boolean;
  /** The timestamp creation time of the account. */
  createDateTime: bigint;
  /** The timestamp last updated time of the account. */
  updateDateTime: bigint;
  /** Is the account currently targeted. */
  targeted: true;
}
