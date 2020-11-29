import {TextSize} from '@styles/base';

export interface CheckboxProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  text?: string;
  error?: string;
  children?: any;
  size?: TextSize;
}
