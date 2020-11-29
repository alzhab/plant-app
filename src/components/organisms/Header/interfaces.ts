import {ReactElement} from 'react';

export interface Props {
  title?: string,
  back?: boolean,
  close?: boolean,
  searchData?: {
    value: string,
    onChange: (value: string) => void;
    width?: number | string;
    choose: (value: string) => void;
    showDropdown: boolean
  },
  right?: () => ReactElement,
  bottom?: number
}
