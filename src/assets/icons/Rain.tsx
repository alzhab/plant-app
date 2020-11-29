import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Rain = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE;
 
	return (
		<Svg width={13.333 * scale} height={12 * scale} viewBox="0 0 13.333 12">
			<Path id="Rain" d="M297.333,15v2.331a.667.667,0,1,1-1.333,0V15h-.333a3.667,3.667,0,1,1,0-7.333,3.837,3.837,0,0,1,6.911,1.343,3,3,0,0,1-.245,5.99h-1v2.331a.667.667,0,1,1-1.333,0V15h-.667v2.331a.667.667,0,1,1-1.333,0V15Zm-4-3.667a2.333,2.333,0,0,0,2.333,2.333h6.667a1.667,1.667,0,0,0,.137-3.328h-.593a.454.454,0,0,1-.418-.325l-.184-.719a2.5,2.5,0,0,0-4.942.538.667.667,0,0,1-1.333,0,3.856,3.856,0,0,1,.075-.757A2.334,2.334,0,0,0,293.333,11.333Z" transform="translate(-292 -6)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Rain;
