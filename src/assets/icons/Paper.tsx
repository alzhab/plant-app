import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Paper = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={10.8 * scale} height={12 * scale} viewBox="0 0 10.8 12">
			<Path id="Paper" d="M-6.8,1501a1.2,1.2,0,0,1-1.2-1.2v-9.6a1.2,1.2,0,0,1,1.2-1.2H1.6a1.2,1.2,0,0,1,1.2,1.2v9.6a1.2,
      1.2,0,0,1-1.2,1.2Zm0-1.2H1.6v-9.6H-6.8Zm1.2-4.8a.6.6,0,0,1-.6-.6.6.6,0,0,1,.6-.6h6a.6.6,0,0,1,0,1.2Zm0-2.4a.6.6,0,
      0,1-.6-.6.6.6,0,0,1,.6-.6h6a.6.6,0,1,1,0,1.2Z" transform="translate(8 -1489)" fill={color}/>
		</Svg>
	);
};

export default Paper;
