import { ContactTag } from './contact-tag.interface';

/** Contact Model */
export interface Contact {
  /**
   * The Drift identifier for the contact.
   * This will always be numeric.
   * Should be treated as long or integer 64 bit data type.
   */
  id: number;
  /** A unix timestamp for when the Contact was first captured. */
  createdAt: bigint;
  /**
   * A map of all attributes associated with this Contact.
   * Attributes will contain both Drift controlled data and Custom Attributes generated
   * by an organization or a third-party app.
   */
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
