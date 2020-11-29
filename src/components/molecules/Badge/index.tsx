import React, {ReactElement, useContext} from 'react';
import {Props} from './interfaces';
import {Flex, Text} from '@components';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {getStyles} from './styles';
import {AI, JC, TextAlign} from '@types';
import {scaleSize} from '@styles/mixins';

const Badge = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex
			ai={AI.center}
			jc={JC.center}
			styles={[
				styles.badge,
				{
				  paddingHorizontal: scaleSize(props.hor || 8),
					backgroundColor: colors[props.back || Colors.PRIMARY],
					bottom: scaleSize(props.bottom || 0)
				}
			]}>
			<Text
				textAlign={TextAlign.center}
				size={props.title.size || TextSize.small}
				family={props.title.family || TextFamily.SEMIBOLD}
				color={props.title.color || Colors.SECOND_BG}
			>{props.title.text}</Text>
		</Flex>
	);
};

export default Badge;
