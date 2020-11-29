import React, {ReactElement, useContext} from 'react';
import {getStyles} from '../styles';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {Badge, Flex, Image, Text} from '@components';
import {AI, JC, Navigations} from '@types';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const navigation = useNavigation();
 
	return (
	  <TouchableOpacity onPress={() => navigation.navigate(Navigations.ChatDetail)}>
			<Flex styles={styles.card} full dir={'row'} ai={AI.stretch} jc={JC.spaceBetween}>
				<Flex styles={styles.chat} ai={AI.stretch} dir={'row'}>
					<Flex styles={styles.avatar}>
						<Image source={{uri: 'data:image/png;base64,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'}} resizeMode={'cover'} style={{width: '100%', height: '100%'}} />
					</Flex>
    
					<Flex styles={styles.chatInfo} jc={JC.spaceBetween}>
						<Text family={TextFamily.SEMIBOLD}>XX Garden</Text>
						<Text color={Colors.FONT_SECOND} numberOfLines={1}>
            Hey friends, I have tomatoes
						</Text>
					</Flex>
				</Flex>
   
				<Flex jc={JC.spaceBetween} ai={AI.flexEnd}>
					<Text color={Colors.FONT_SECOND}>7:54 AM</Text>
					<Flex styles={styles.badge}>
						<Text  color={Colors.SECOND_BG}>24</Text>
					</Flex>
					<Badge
						title={{
							text: '24',
							family: TextFamily.REGULAR,
							size: TextSize.small
						}}
					/>
				</Flex>
			</Flex>
		</TouchableOpacity>
	);
};

export default Card;
