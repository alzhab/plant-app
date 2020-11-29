import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Compass = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Compass" d="M306,12a6,6,0,1,0-6,6A6,6,0,0,0,306,12Zm-10.667,0A4.667,4.667,0,1,1,300,16.667,4.667,4.667,
      0,0,1,295.333,12Zm6.961-2.673c.349-.13.527.05.4.392a10.207,10.207,0,0,1-1.691,3.181,1.333,1.333,0,0,1-1.886-1
      .886A10.167,10.167,0,0,1,302.294,9.327Z" transform="translate(-294 -6)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Compass;
