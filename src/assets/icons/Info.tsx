import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Info = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Info" d="M778.6,108.1h.3a.6.6,0,1,1,0,1.2h-1.8a.6.6,0,0,1,0-1.2h.3v-1.8h-.3a.6.6,0,1,1,0-1.2h.9a.6.6,0,
      0,1,.6.6ZM778,112a6,6,0,1,1,6-6A6,6,0,0,1,778,112Zm0-1.2a4.8,4.8,0,1,0-4.8-4.8A4.8,4.8,0,0,0,778,110.8Zm0-6.3a.9
      .9,0,1,1,.9-.9A.9.9,0,0,1,778,104.5Z" transform="translate(-772 -100)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Info;
