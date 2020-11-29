import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Clip = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={10.793 * scale} height={12 * scale} viewBox="0 0 10.793 12">
			<Path id="Clip" d="M201.587,299.216a.568.568,0,0,1-.8-.8L203.6,295.6a.568.568,0,0,0-.8-.8l-2.815,2.815a1.706,1.706,0,0,0,2.412,2.412l2.011-2.011,2.613-2.613a2.558,2.558,0,1,0-3.618-3.618l-2.613,2.613-2.814,2.814a3.411,3.411,0,0,0,4.824,4.824l3.618-3.618a.569.569,0,1,0-.8-.8l-3.618,3.618a2.274,2.274,0,1,1-3.216-3.216l2.814-2.814,2.613-2.613a1.421,1.421,0,1,1,2.01,2.01l-2.613,2.613Z" transform="translate(-196.97 -291.029)" fill={color}/>
		</Svg>
	);
};

export default Clip;
