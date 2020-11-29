import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Account = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Контур_1033" data-name="Контур 1033" d="M1637.2,108.994v.814a12.136,12.136,0,0,0,9.6,0v-.815c0-1.03-2.283-1.831-2.448-1.892a2.531,2.531,0,0,1-4.7,0C1639.486,107.165,1637.2,107.963,1637.2,108.994Zm1.5-5.887a3.306,3.306,0,0,1,6.6,0,9.84,9.84,0,0,1-.471,2.891c1.2.459,3.171,1.2,3.171,3v1.2c0,.663-2.589,1.8-6,1.8s-6-1.141-6-1.8v-1.2c0-1.8,1.971-2.537,3.171-2.995A9.852,9.852,0,0,1,1638.7,103.107Zm3.3,4.393c1.182,0,2.1-2.17,2.1-4.393a2.11,2.11,0,0,0-4.2,0C1639.9,105.33,1640.818,107.5,1642,107.5Z" transform="translate(-1636 -100)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Account;
