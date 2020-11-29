import React, {ReactElement, useContext} from 'react';
import {Flex, IconBox, Text} from '@components';
import {AI, JC, TextAlign} from '@types';
import {Colors, TextFamily, AppContext} from '@styles/base';
import {getStyles} from './styles';
import {scaleSize} from '@styles/mixins';
import {Props} from './interface';

const Delay = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const {
		Icon,
		color: iconColor = colors.SECOND_BG,
		scale: iconScale = scaleSize(1),
	} = props.icon;
 
	return (
		<Flex full dir={'row'} ai={AI.center} jc={JC.spaceBetween} styles={{backgroundColor: props.back, marginBottom: scaleSize(props.bottom || 0)}}>
			<Flex ai={AI.center} styles={[styles.textContainer, {backgroundColor: colors[props.textBack]}]}>
				<Text textAlign={TextAlign.center} family={TextFamily.SEMIBOLD}>{props.time}</Text>
			</Flex>
			<Flex styles={[styles.iconContainer, {backgroundColor: colors[props.back]}]}>
				<IconBox
					right={0}
					icon={{
					  Icon,
						color: Colors[iconColor],
						scale: iconScale,
						back: props.back,
					}}
					title={props.title}
					subTitle={{text: ''}}
				/>
			</Flex>
		</Flex>
	);
};

export default Delay;
