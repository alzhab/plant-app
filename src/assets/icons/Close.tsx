import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Close = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Close" d="M19.781,9.281A.75.75,0,0,0,18.72,8.221L14,12.94,9.28,8.221A.75.75,0,0,0,8.22,9.281L12.939,
      14l-4.72,4.72A.75.75,0,1,0,9.28,19.781L14,15.062l4.72,4.72a.75.75,0,0,0,1.061-1.061L15.061,14Z"
			transform="translate(-8 -8.001)" fill={color}/>
		</Svg>
	);
};

export default Close;
