export interface MessageButton {
  label: string;
  value: string;
  type?: 'reply' | 'compose' | 'action';
  style?: 'primary' | 'danger';
  reaction: {
    type: 'replace' | 'delete';
    message: string;
  };
}
