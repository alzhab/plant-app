import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Wind = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={13.333 * scale} height={12 * scale} viewBox="0 0 13.333 12">
			<Path id="Wind" d="M782.667,12.667A2.667,2.667,0,1,1,780,15.333a.667.667,0,0,1,1.333,0A1.333,1.333,0,1,0,782.667,
      14h-7.332a.667.667,0,1,1,0-1.333Zm-4-2.667h-6a.667.667,0,0,0,0,1.333h6A2.667,2.667,0,1,0,776,8.667a.667.667,0,0,0,
      1.333,0A1.333,1.333,0,1,1,778.667,10ZM772,16a.667.667,0,0,1,.664-.667H778a.667.667,0,0,1,0,1.333h-5.339A.663.663,
      0,0,1,772,16Zm0-2.667a.667.667,0,0,1,.666-.667h.668a.667.667,0,0,1,0,1.333h-.668A.665.665,0,0,1,772,13.333Z"
			transform="translate(-772 -6)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Wind;
