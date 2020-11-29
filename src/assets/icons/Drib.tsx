import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Drib = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={8.624 * scale} height={12 * scale} viewBox="0 0 8.624 12">
			<Path id="Drib" d="M874,12.727c0-1.364.577-2.159,1.506-3.437a29.2,29.2,0,0,0,2.336-3.655c.154-.288.192-.368.192-.368.154-.3.4-.3.563,0,0,0,.045.092.2.386a30.9,30.9,0,0,0,2.3,3.585c.945,1.307,1.521,2.1,1.521,3.487a4.312,4.312,0,1,1-8.624,0Zm1.848,0a2.464,2.464,0,0,0,2.464,2.464.616.616,0,0,0,0-1.232,1.232,1.232,0,0,1-1.232-1.232.616.616,0,1,0-1.232,0Z" transform="translate(-874 -5.039)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Drib;
