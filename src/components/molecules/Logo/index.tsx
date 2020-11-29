import React, {ReactElement, useContext} from 'react';
import {scaleSize} from '@styles/mixins';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {LogoProps} from './interfaces';
import {AI} from '@types';
import {Flex, Text} from '../../atoms';
import {LogoIcon} from '@icons';

const Logo = (props: LogoProps): ReactElement => {
	const {colors} = useContext(AppContext);
 
	return (
		<Flex ai={AI.center}>
			<LogoIcon scale={7} color={colors.PRIMARY} />
   
			<Text styles={{marginTop: scaleSize(20)}} color={props.light ? Colors.SECOND_BG : Colors.FONT_SECOND}
				family={TextFamily.BOLD} size={TextSize.xlarge}>
        Base <Text color={props.light ? Colors.SECOND_BG : Colors.FONT_SECOND} family={TextFamily.REGULAR}
					size={TextSize.xlarge}>App</Text>
			</Text>
		</Flex>
	);
};

export default Logo;
