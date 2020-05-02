export interface ContactCustomAttribute {
  type: 'STRING' | 'NUMERIC' | 'BOOLEAN' | 'DATETIME' | 'DATE';
  displayName: string;
  name: string;
}
