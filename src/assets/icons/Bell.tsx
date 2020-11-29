import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Bell = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={9.818 * scale} height={12 * scale} viewBox="0 0 9.818 12">
			<Path id="Контур_1034" data-name="Контур 1034" d="M1255.636,12.364a1.636,1.636,0,0,1-.816-3.055c0-.166,0-2.127,0-2.127a4.084,4.084,0,0,1,3-3.946V3.091a1.091,1.091,0,0,1,2.182,0v.144a4.084,4.084,0,0,1,3,3.949V9.313a1.634,1.634,0,0,1-.818,3.05h-1.636a1.636,1.636,0,0,1-3.273,0Zm2.727,0a.545.545,0,0,0,1.091,0Z" transform="translate(-1254 -2)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Bell;
