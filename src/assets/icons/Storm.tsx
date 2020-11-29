import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Storm = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={14.113 * scale} height={12 * scale} viewBox="0 0 14.113 12">
			<Path id="Storm" d="M396.746,14.115c.388,0,.528.262.311.587l-1.924,2.876c-.432.645-.782.539-.782-.233v-1.8h-.974c-
      .389,0-.53-.262-.314-.586l1.924-2.881c.429-.642.776-.538.776.239v1.8Zm-4.921.613a.706.706,0,0,1-.886.682,3.881,3
      .881,0,0,1,.942-7.646A4.061,4.061,0,0,1,399.2,9.186a3.175,3.175,0,0,1-.259,6.34.706.706,0,1,1,0-1.411,1.764,1.764,
      0,0,0,.145-3.522h-.628a.48.48,0,0,1-.442-.344l-.194-.761a2.647,2.647,0,0,0-5.231.57.706.706,0,0,1-1.411,0,4.079,4
      .079,0,0,1,.079-.8,2.47,2.47,0,0,0,0,4.78A.706.706,0,0,1,391.825,14.728Z" transform="translate(-388 -6)"
			fill={color}
			fill-rule="evenodd"/>
		</Svg>
	);
};

export default Storm;
