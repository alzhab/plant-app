import {ReactElement} from 'react';

export interface Props {
  children: any,
  show?: boolean,
  list?: string[],
  dropdownWidth?: number | string,
  width?: number | string,
  choose: (value: string) => void
}
