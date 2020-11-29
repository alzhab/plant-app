import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Lock = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={9.6 * scale} height={12 * scale} viewBox="0 0 9.6 12">
			<Path d="M875.6,12.1a1.2,1.2,0,1,1,1.8,1.039V13.6a.6.6,0,0,1-1.2,0v-.461A1.2,1.2,0,0,1,875.6,12.1Zm-2.4-4.5a3.6,3.6,0,1,1,7.2,0V9.1a1.2,1.2,0,0,1,1.2,1.2v4.5a1.2,1.2,0,0,1-1.2,1.2h-7.2a1.2,1.2,0,0,1-1.2-1.2V10.3a1.2,1.2,0,0,1,1.2-1.2Zm1.2,1.5h4.8V7.6a2.4,2.4,0,1,0-4.8,0Zm-1.2,1.2v4.5h7.2V10.3Z" transform="translate(-872 -4)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Lock;
