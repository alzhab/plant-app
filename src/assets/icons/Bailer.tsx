import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Bailer = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={14.662 * scale} height={12 * scale} viewBox="0 0 14.662 12">
			<Path id="Bailer" d="M1060.667,12.6a3.334,3.334,0,1,1,3.933-3.933h2.07a.726.726,0,0,1,.71.664l.16,2.223,1.127-1.129.007-2.391c0-.737.423-.911.943-.392l2.747,2.744c.52.52.343.943-.393.944l-2.323,0-1.98,1.981.287,4.023a.61.61,0,0,1-.617.664h-6.006a.665.665,0,0,1-.663-.664Zm0-3.27a.665.665,0,0,1,.663-.664h1.89a2,2,0,1,0-2.553,2.553Z" transform="translate(-1058 -6)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Bailer;
