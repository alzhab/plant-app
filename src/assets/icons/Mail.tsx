import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Mail = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={14.4 * scale} height={12 * scale} viewBox="0 0 14.4 12">
			<Path d="M202.509,12.943l-.846.862a.646.646,0,0,1-.926,0l-.846-.862-3.658,3.726,9.933,0Zm4.582-4.667L203.435,12l3.656,3.724ZM198.965,12l-3.656-3.724v7.448Zm2.235.413,4.97-5.081-9.939,0ZM195.31,6H207.09a1.32,1.32,0,0,1,1.31,1.33v9.34A1.32,1.32,0,0,1,207.09,18H195.31A1.32,1.32,0,0,1,194,16.67V7.33A1.32,1.32,0,0,1,195.31,6Z" transform="translate(-194 -6)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};



export default Mail;
