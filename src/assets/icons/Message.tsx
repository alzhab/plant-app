import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Mail = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="message" d="M964,10a6,6,0,0,0,8.524,5.442l2.516.534a.724.724,0,0,0,.927-.926l-.525-2.519A6,6,0,1,0,964,10Z" transform="translate(-964 -4)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};



export default Mail;
