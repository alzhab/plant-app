import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Scan = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={13.2 * scale} height={12 * scale} viewBox="0 0 13.2 12">
			<Path id="Scan" d="M965.6,197.2a.6.6,0,0,0,0-1.2h-2.1a.9.9,0,0,0-.9.9V199a.6.6,0,1,0,1.2,0v-1.8Zm7.8,1.8a.6.6,0,1,
      0,1.2,0v-2.1a.9.9,0,0,0-.9-.9h-2.1a.6.6,0,1,0,0,1.2h1.8Zm-10.2,5.4a.6.6,0,0,1,.6.6v1.8h1.8a.6.6,0,0,1,0,1.2h-2.1a
      .9.9,0,0,1-.9-.9V205A.6.6,0,0,1,963.2,204.4Zm8.4,2.4a.6.6,0,1,0,0,1.2h2.1a.9.9,0,0,0,.9-.9V205a.6.6,0,0,0-1.2,0v1
      .8Zm3-4.2a.6.6,0,0,0,0-1.2h-12a.6.6,0,1,0,0,1.2Z" transform="translate(-962 -196)" fill={color}
			fill-rule="evenodd"/>
		</Svg>
	);
};

export default Scan;
