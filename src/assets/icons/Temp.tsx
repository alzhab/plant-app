import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Temp = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={6 * scale} height={12 * scale} viewBox="0 0 6 12">
			<Path id="Temp" d="M400.4,11.114a.336.336,0,0,1-.164.281A2,2,0,0,0,399.2,13a1.8,1.8,0,0,0,3.6,0,2.017,2.017,0,0,
      0-1.038-1.6.336.336,0,0,1-.162-.28V8.8h-1.2ZM398,13a3,3,0,1,0,4.8-2.4V5.8a1.8,1.8,0,0,0-3.6,0v4.8A3,3,0,0,0,398,
      13Z" transform="translate(-398 -4)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Temp;
