import {Colors, TextFamily, TextSize} from '@styles/base';

export interface  Props {
  icon: {
    Icon?: any,
    back?: Colors,
    color?: Colors,
    scale?: number;
    box?: number
  },
  title: {
    text: string;
    size?: TextSize;
    family?: TextFamily;
    color?: Colors;
  },
  subTitle: {
    text: string;
    size?: TextSize;
    family?: TextFamily;
    color?: Colors;
  }
  right?: number;
  reverse?: boolean;
}
