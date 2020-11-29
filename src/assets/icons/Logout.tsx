import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Logout = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={9.604 * scale} viewBox="0 0 12 9.604">
			<Path d="M202.793,198.737a.645.645,0,0,0,.886,0l.7-.671v5.145a.625.625,0,0,0,1.25,0v-5.145l.7.671a.643.643,0,0,0,.886,0,.585.585,0,0,0,0-.851l-1.764-1.694a.645.645,0,0,0-.886,0l-1.766,1.7A.583.583,0,0,0,202.793,198.737Zm5.957,8.076s0-5.4,0-5.4H207.5a.6.6,0,1,1,0-1.2h1.251a1.226,1.226,0,0,1,1.249,1.2v5.4a1.227,1.227,0,0,1-1.247,1.2h-7.506a1.225,1.225,0,0,1-1.247-1.2v-5.4a1.227,1.227,0,0,1,1.249-1.2H202.5a.6.6,0,1,1,0,1.2h-1.25s0,5.4,0,5.4Z" transform="translate(208.015 -200) rotate(90)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Logout;
