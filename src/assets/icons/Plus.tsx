import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Plus = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Plus" d="M204.667,6.667a.667.667,0,0,0-1.333,0v4.667h-4.667a.667.667,0,0,0,0,1.333h4.667v4.667a.667.667,
      0,0,0,1.333,0V12.667h4.667a.667.667,0,0,0,0-1.333h-4.667Z" transform="translate(-198 -6)" fill={color}
			fill-rule="evenodd"/>
		</Svg>
	);
};

export default Plus;
