import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Image = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE;
 
	return (
		<Svg width={16 * scale} height={12 * scale} viewBox="0 0 16 12">
			<Path id="FontAwsome_image_" data-name="FontAwsome (image)" d="M14.5,64H1.5A1.5,1.5,0,0,0,0,65.5v9A1.5,1.5,0,0,0,1.5,76h13A1.5,1.5,0,0,0,16,74.5v-9A1.5,1.5,0,0,0,14.5,64Zm-.188,10.5H1.688a.188.188,0,0,1-.188-.187V65.688a.188.188,0,0,1,.188-.187H14.313a.188.188,0,0,1,.188.188v8.625A.188.188,0,0,1,14.313,74.5ZM4,66.75A1.25,1.25,0,1,0,5.25,68,1.25,1.25,0,0,0,4,66.75ZM3,73H13V70.5l-2.735-2.735a.375.375,0,0,0-.53,0L6,71.5,4.765,70.265a.375.375,0,0,0-.53,0L3,71.5Z" transform="translate(0 -64)" fill={color}/>
		</Svg>
	);
};

export default Image;
