import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Question = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path id="Question" d="M874,112a6,6,0,1,1,6-6A6,6,0,0,1,874,112Zm0-8.4a1.2,1.2,0,0,0-1.2,1.2.6.6,0,0,1-1.2,0,2.4,2
      .4,0,0,1,2.4-2.4,2.3,2.3,0,0,1,2.4,2.279,1.935,1.935,0,0,1-.791,1.623c-.056.047-.679.554-.7.572a.6.6,0,0,0-.3.589
      .6.6,0,0,1-1.2,0,1.749,1.749,0,0,1,.753-1.526c-.02.016.624-.506.669-.545a.787.787,0,0,0,.374-.714A1.106,1.106,0,0,
      0,874,103.6Zm0,6a.6.6,0,1,1,.6-.6A.6.6,0,0,1,874,109.6Z" transform="translate(-868 -100)" fill={color}
			fill-rule="evenodd"/>
		</Svg>
	);
};

export default Question;
