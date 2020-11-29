import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Sun = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Sun" d="M4.6,10.6H6.45a3.581,3.581,0,0,0,.616,1.486L5.759,13.392a.6.6,0,1,0,.849.849l1.306-1.306A3.581,3.581,0,0,0,9.4,13.55V15.4a.6.6,0,1,0,1.2,0V13.55a3.581,3.581,0,0,0,1.486-.616l1.306,1.306a.6.6,0,1,0,.849-.849l-1.306-1.306A3.581,3.581,0,0,0,13.55,10.6H15.4a.6.6,0,1,0,0-1.2H13.55a3.581,3.581,0,0,0-.616-1.486l1.306-1.306a.6.6,0,1,0-.849-.849L12.086,7.066A3.581,3.581,0,0,0,10.6,6.45V4.6a.6.6,0,1,0-1.2,0V6.45a3.581,3.581,0,0,0-1.486.616L6.608,5.759a.6.6,0,1,0-.849.849L7.066,7.914A3.581,3.581,0,0,0,6.45,9.4H4.6a.6.6,0,1,0,0,1.2Z" transform="translate(-4 -4)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Sun;
