import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Calendare = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={11.428 * scale} height={12 * scale} viewBox="0 0 11.428 12">
			<Path id="Контур_1033" data-name="Контур 1033" d="M1736.8,396.857h2.4v-2.286h-2.4Zm2.4-3.429v-2.286h-2.4v2.286Zm1.2,1.143v2.286h1.8a.584.584,0,0,0,.6-.571v-1.714Zm2.4-3.429h-2.4v2.286h2.4Zm-9.6,3.429v1.714a.584.584,0,0,0,.6.571h1.8v-2.286Zm2.4-1.143v-2.286h-2.4v2.286Zm8.4-4.571v7.429a1.757,1.757,0,0,1-1.8,1.714H1733.8a1.757,1.757,0,0,1-1.8-1.714v-7.429a1.757,1.757,0,0,1,1.8-1.714l0-.571a.6.6,0,0,1,1.2,0v.571h1.2v-.571a.6.6,0,0,1,1.2,0v.571h1.2v-.571a.6.6,0,0,1,1.2,0v.571h1.2v-.571a.6.6,0,0,1,1.2,0v.571A1.758,1.758,0,0,1,1744,388.857Z" transform="translate(-1732 -386)" fill={color} fill-rule="evenodd"/>
		</Svg>
	);
};

export default Calendare;
