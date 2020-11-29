import {Colors, TextFamily, TextSize} from '@styles/base';

export interface Props {
  back: Colors,
  time: string,
  bottom?: number,
  textBack: Colors,
  icon: {
    Icon?: any,
    color?: Colors,
    scale?: number;
  },
  title: {
    text: string;
    size?: TextSize;
    family?: TextFamily;
    color?: Colors;
  },
}
