import {ReactElement} from 'react';

export interface Props {
  title: string,
  right?: () => ReactElement,
  children: any,
  bottom?: number
}
