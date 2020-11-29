import {Colors, TextFamily, TextSize} from '@styles/base';

export interface Props {
  back?: Colors,
  bottom?: number,
  title: {
    text: string,
    color?: Colors,
    family?: TextFamily,
    size?: TextSize
  },
  hor?: number
}
