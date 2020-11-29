import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Dropdown = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={15 * scale} height={12 * scale} viewBox="0 0 15 12">
			<Path id="Dropdown" d="M6.652,1.357a1,1,0,0,1,1.7,0l5.7,9.113A1,1,0,0,1,13.2,12H1.8a1,1,0,0,1-.848-1.53Z"
				transform="translate(15 12) rotate(180)" fill={color}/>
		</Svg>
	);
};

export default Dropdown;
