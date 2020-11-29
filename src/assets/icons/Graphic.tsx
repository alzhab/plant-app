import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Graphic = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Контур_1033" data-name="Контур 1033" d="M1545.565,203.281a1.2,1.2,0,0,1,.435-.081l.072,0,3.084-4.81a1.2,1.2,0,1,1,1.044.608s-3.129,4.861-3.129,4.861a1.166,1.166,0,0,1,.129.539,1.2,1.2,0,1,1-2.4,0,1.219,1.219,0,0,1,.015-.183l-1.368-1.1a1.18,1.18,0,0,1-.447.087,1.2,1.2,0,1,1,1.2-1.2,1.042,1.042,0,0,1-.012.169ZM1541.2,206.8h10.2a.6.6,0,0,1,0,1.2h-10.8a.6.6,0,0,1-.6-.6V196.6a.6.6,0,0,1,1.2,0Z" transform="translate(-1540 -196)" fill={color}/>
		</Svg>
	);
};

export default Graphic;
