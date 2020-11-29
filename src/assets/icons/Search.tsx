import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '@styles/base';
import {IconProps} from '@types';

const Search = (props: IconProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const scale = props.scale || 1;
	const color = props.color || colors.INACTIVE
 
	return (
		<Svg width={12.0001 * scale} height={12 * scale} viewBox="0 0 12.001 12">
			<Path d="M496.818,207.933a.625.625,0,0,1-.885.885l-3.4-3.4a4.691,4.691,0,1,1,.885-.885Zm-7.126-2.8a3.441,3.441,0,1,0-3.441-3.441A3.441,3.441,0,0,0,489.692,205.132Z" transform="translate(-485 -197)" fill={color}/>
		</Svg>
	);
};

export default Search;
