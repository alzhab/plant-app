import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const ArrowRight = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={2 * scale} height={12 * scale} viewBox="0 0 2 12">
			<Path id="Dots" d="M8532.2,122a1,1,0,1,1,1,1A1,1,0,0,1,8532.2,122Zm0-5a1,1,0,1,1,1,1A1,1,0,0,1,8532.2,117Zm0-5a1,
      1,0,1,1,1,1A1,1,0,0,1,8532.2,112Z" transform="translate(-8532.201 -110.999)" fill={color}/>
		</Svg>
	);
};

export default ArrowRight;
