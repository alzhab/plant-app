import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Filter = (props: IconProps): ReactElement => {
  const {colors} = useContext(AppContext);
  const scale = props.scale || 1;
  const color = props.color || colors.INACTIVE
  
  return (
    <Svg width={15.999 * scale} height={12 * scale} viewBox="0 0 15.999 12">
      <Path id="Filter" d="M-863,12a1,1,0,0,1-1-1,1,1,0,0,1,1-1h6a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm-2-5a1,1,0,0,1-1-1,1,1,0,
      0,1,1-1h10a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm-2-5a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Z"
            transform="translate(868)" fill={color}/>
    </Svg>
  );
};

export default Filter;
