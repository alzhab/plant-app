import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Camera = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={13.895 * scale} height={12 * scale} viewBox="0 0 13.895 12">
			<Path id="Контур_1033" data-name="Контур 1033" d="M9,392.737a1.895,1.895,0,1,0,1.909,1.895,1.882,1.882,0,0,0-.084-.558.953.953,0,1,1-1.263-1.253A1.93,1.93,0,0,0,9,392.737Zm-3.945-2.842.527-1.308a1.014,1.014,0,0,1,.87-.586h5.1a1.013,1.013,0,0,1,.87.586l.527,1.308h1.781A1.268,1.268,0,0,1,16,391.159v7.576A1.269,1.269,0,0,1,14.727,400H3.273A1.268,1.268,0,0,1,2,398.736v-7.576a1.269,1.269,0,0,1,1.273-1.264Zm-1.781,1.263v7.578H14.727v-7.578H12.4a.507.507,0,0,1-.437-.292l-.649-1.6H6.68l-.644,1.6a.509.509,0,0,1-.438.3Zm2.545,3.474A3.182,3.182,0,1,1,9,397.789,3.17,3.17,0,0,1,5.818,394.632Z" transform="translate(-2 -388)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Camera;
