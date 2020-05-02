import { CustomProperty } from './custom-property.interface';
import { User } from './user.interface';

export interface Account {
  ownerId: User['id'];
  name: string;
  domain: string;
  accountId: string;
  customProperties?: CustomProperty[];
  deleted: boolean;
  createDateTime: bigint;
  updateDateTime: bigint;
  targeted: true;
}
