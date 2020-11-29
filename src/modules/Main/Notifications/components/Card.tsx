import React, {ReactElement, useContext} from 'react';
import {CardProps, CardTypeColor} from '../interfaces';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {Flex, Text} from '@components';
import {JC} from '@types';

const Card = (props: CardProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full styles={styles.card}>
			<Text>
				{
					props.text.map(({text, bold}, index) => (
						<Text key={index.toString()} size={TextSize.large} family={bold ? TextFamily.BOLD : TextFamily.REGULAR}>{text} </Text>
					))
				}
			</Text>
			
			<Flex dir={'row'} full styles={{marginTop: 10}} jc={JC.spaceBetween}>
				<Text color={Colors[CardTypeColor[props.type]]} family={TextFamily.BOLD}>{props.type}</Text>
				<Text color={Colors.FONT_SECOND}>{props.time}</Text>
			</Flex>
		</Flex>
	);
};

export default Card;
