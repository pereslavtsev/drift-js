import { UserAvailability } from '../enums';

export interface User {
  id: number;
  orgId: number;
  name: string;
  alias: string;
  email: string;
  phone: string;
  locale: string;
  availability: UserAvailability;
  role: 'member' | 'admin' | 'agent';
  timeZone: string;
  avatarUrl: string;
  verified: boolean;
  bot: boolean;
  createdAt: bigint;
  updatedAt: bigint;
}
