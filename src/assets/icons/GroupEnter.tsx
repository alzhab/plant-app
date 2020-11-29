import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const GroupEnter = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path d="M7.449,11.832l-1.873-1.6a.521.521,0,0,1-.193-.4.528.528,0,0,1,.195-.4l1.871-1.6a.746.746,0,0,1,.939,0,.512.512,0,0,1,0,.8l-.741.635h3.691A.621.621,0,0,1,12,9.826a.62.62,0,0,1-.663.568H7.645l.741.635a.514.514,0,0,1,0,.8A.717.717,0,0,1,7.921,12,.727.727,0,0,1,7.449,11.832Zm-3-1.557a12.974,12.974,0,0,1-2.778-.4A10.394,10.394,0,0,1,.342,9.459.515.515,0,0,1,0,8.994,3.041,3.041,0,0,1,.987,6.952,4.24,4.24,0,0,1,2.478,6.03,5.615,5.615,0,0,1,2.1,4.112,2.532,2.532,0,0,1,4.8,1.8a2.966,2.966,0,0,1,.312.016A2.283,2.283,0,0,1,7.5,0,2.239,2.239,0,0,1,9.9,2.023a4.833,4.833,0,0,1-.3,1.584,3.521,3.521,0,0,1,1.7,1.077,3.072,3.072,0,0,1,.7,2,.51.51,0,0,1-.309.45,7.972,7.972,0,0,1-1.182.423c-.284.081-.575.152-.863.21A3.187,3.187,0,0,0,7.2,6.682,3.138,3.138,0,0,0,4.608,7.958a2.213,2.213,0,0,1-1.632-.994,3.053,3.053,0,0,0-1.089.668,2.415,2.415,0,0,0-.639,1.037c.238.078.493.151.759.219A11.837,11.837,0,0,0,4.2,9.234v.018a2.251,2.251,0,0,0,.246,1.022h0ZM3.3,4.112c0,1.4.757,2.827,1.5,2.827S6.3,5.512,6.3,4.112A1.407,1.407,0,0,0,4.8,2.827,1.407,1.407,0,0,0,3.3,4.112ZM7.122,6.031a4.286,4.286,0,0,1,1.422.859,9.357,9.357,0,0,0,1.584-.31c.237-.068.456-.139.651-.213a2.084,2.084,0,0,0-.459-1.083A2.385,2.385,0,0,0,9.1,4.545,1.946,1.946,0,0,1,7.5,5.4c-.062,0-.118,0-.174-.007A5.821,5.821,0,0,1,7.122,6.031ZM6.3,2.023c0,.055,0,.112,0,.167A2.241,2.241,0,0,1,7.5,4.112c0,.078,0,.164-.009.257H7.5c.583,0,1.2-1.206,1.2-2.345a1.113,1.113,0,0,0-1.2-1A1.113,1.113,0,0,0,6.3,2.023Z" fill={color}/>
		</Svg>
	);
};

export default GroupEnter;