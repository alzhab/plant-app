import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Apple = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={9.606 * scale} height={12 * scale} viewBox="0 0 9.606 12">
			<Path id="Apple" d="M13.828,8.1c.05,0,.767-.133,1.015-.157.123-.012.241-.018.357-.019,1.345.009,2.388,1.317,2.406,3.3a4.8,4.8,0,1,1-9.606,0A4.19,4.19,0,0,1,8.729,8.8a2.042,2.042,0,0,1,1.677-.878c.117,0,.235.007.357.019.248.024,1.29.217,1.45.24L10.277,6.244a.6.6,0,1,1,.849-.849l.526.526a2.323,2.323,0,0,1,.589-1.232,2.066,2.066,0,0,1,1.733-.648.619.619,0,0,1,.613.608,2.075,2.075,0,0,1-.648,1.738,2.323,2.323,0,0,1-1.232.589Z" transform="translate(-8 -4.026)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Apple;
