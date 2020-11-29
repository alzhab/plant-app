import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Garbage = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={10.105 * scale} height={12 * scale} viewBox="0 0 10.105 12">
			<Path id="Garbage" d="M1648.211,18a1.263,1.263,0,0,0,1.263-1.263V8.526a.632.632,0,1,0,0-1.263h-3.158a1.263,1.263,
      0,1,0-2.526,0h-3.158a.632.632,0,1,0,0,1.263v8.211A1.262,1.262,0,0,0,1641.895,18Zm0-1.263h-6.316V8.526h6.316Zm-2
      .526-6.317a.632.632,0,0,1,1.263,0v4.424a.632.632,0,0,1-1.263,0Zm-1.895-.63a.63.63,0,0,0-.632.63v4.424a.632.632,0,
      0,0,1.263,0V10.42A.632.632,0,0,0,1643.79,9.789Z" transform="translate(-1640 -6)" fill={color}
			fill-rule="evenodd"/>
		</Svg>
	);
};

export default Garbage;
