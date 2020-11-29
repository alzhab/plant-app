import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Shedule = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={11.429 * scale} height={12 * scale} viewBox="0 0 11.429 12">
			<Path id="Shedule" d="M1454.286,388.857a.57.57,0,0,0-.568-.571.573.573,0,0,1-1.146,0h-1.143a.571.571,0,0,1-1.143,0h-1.143a.571.571,0,1,1-1.143,0h-1.143a.571.571,0,0,1-1.143,0,.57.57,0,0,0-.571.571V390h9.143Zm1.143,0v7.429a1.713,1.713,0,0,1-1.711,1.714h-8.006a1.713,1.713,0,0,1-1.711-1.714v-7.429a1.713,1.713,0,0,1,1.711-1.714l0-.571a.571.571,0,0,1,1.143,0v.571H1448v-.571a.571.571,0,0,1,1.143,0v.571h1.143v-.571a.571.571,0,0,1,1.143,0v.571h1.143v-.571a.571.571,0,0,1,1.143,0v.571A1.714,1.714,0,0,1,1455.429,388.857Z" transform="translate(-1444 -386)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Shedule;
