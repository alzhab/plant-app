import {LayoutChangeEvent, StyleProp, ViewStyle} from 'react-native';
import {RefObject} from 'react';
import {AI, JC} from '@types';

export interface FlexProps {
  size?: number,
  children?: any,
  styles?: StyleProp<ViewStyle> | StyleProp<any> | StyleProp<ViewStyle>[] | StyleProp<any>[],
  dir?: 'column' | 'row' | 'row-reverse' | 'column-reverse',
  wrap?: boolean
  jc?: JC,
  ai?: AI,
  full?: boolean,
  animated?: boolean,
  reanimated?: boolean,
  myRef?: RefObject<any>,
  onLayout?: (event: LayoutChangeEvent) => void,
  container?: boolean;
}
