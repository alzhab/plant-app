import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const ArrowLeft = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={6.75 * scale} height={12 * scale} viewBox="0 0 6.75 12">
			<Path id="ArrowLeft" d="M500.53,9.28a.75.75,0,0,0-1.06-1.061l-5.25,5.25a.75.75,0,0,0,0,1.061l5.25,5.25a.75.75,0,0,
      0,1.06-1.061L495.811,14Z" transform="translate(-494 -8)" fill={color} opacity="0.8"/>
		</Svg>
	);
};

export default ArrowLeft;
