import { ContactTag } from './contact-tag.interface';

export interface Contact {
  id: bigint;
  createdAt: bigint;
  attributes: {
    name?: string;
    email: string;
    phone?: string;
    tags?: Array<ContactTag>;
    events?: object;
    socialProfiles?: object;
  } & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}
