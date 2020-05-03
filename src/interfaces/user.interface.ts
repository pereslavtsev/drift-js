import { UserAvailability } from '../enums';

/** User Model */
export interface User {
  /** The Drift identifier for the user. This is will always be numeric. */
  id: number;
  orgId: number;
  /** The name of the user. */
  name: string;
  /** The short hand name for the user (if present). */
  alias: string;
  /** The email of the user. */
  email: string;
  /** The phone number associated with the user. */
  phone: string;
  /** The locale for the user. */
  locale: string;
  /** Description of user's current state */
  availability: UserAvailability;
  /** Role of drift user */
  role: 'member' | 'admin' | 'agent';
  /** Timezone for the user represented as a string (if known) */
  timeZone: string;
  /** The url for the user's avatar (profile) image. */
  avatarUrl: string;
  /** Is the user account verified? i.e. belongs to an actual person / not manually created? */
  verified: boolean;
  /** Is the user a bot user? */
  bot: boolean;
  /** Timestamp (milliseconds) representing when the user was created. */
  createdAt: bigint;
  /** Timestamp (milliseconds) representing when the user was last updated. */
  updatedAt: bigint;
}
