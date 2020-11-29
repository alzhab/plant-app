import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Comment = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12.004 * scale} height={12 * scale} viewBox="0 0 12.004 12">
			<Path id="Comment" d="M1456,15.317c0,.665-.432.88-.96.486l-2.941-2.2h-6.9a1.2,1.2,0,0,1-1.2-1.2V5.2a1.2,1.2,0,0,1,
      1.2-1.2h9.6a1.2,1.2,0,0,1,1.2,1.2Z" transform="translate(-1444 -4)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Comment;
