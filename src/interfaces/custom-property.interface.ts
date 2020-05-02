export interface CustomProperty {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  type:
    | 'STRING'
    | 'EMAIL'
    | 'NUMBER'
    | 'TEAMMEMBER'
    | 'ENUM'
    | 'DATE'
    | 'DATETIME'
    | 'LATLON'
    | 'LAT'
    | 'LON'
    | 'PHONE'
    | 'URL'
    | 'ENUMARRAY';
}
