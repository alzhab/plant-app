import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Check = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={17 * scale} height={12 * scale} viewBox="0 0 17 12">
			<Path d="M311.732,132.332l-4.857-4.8a1.586,1.586,0,0,1,0-2.262,1.632,1.632,0,0,1,2.289,0l3.713,3.691,7.76-7.691a1.632,1.632,0,0,1,2.289,0,1.586,1.586,0,0,1,0,2.262l-8.9,8.8A1.632,1.632,0,0,1,311.732,132.332Z" transform="translate(-306.4 -120.8)" fill={color}/>
		</Svg>
	);
};

export default Check;
