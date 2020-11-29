import React, {ReactElement, useContext} from 'react';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {getStyles} from './styles';
import {Props} from './interfaces';
import {Flex, Image, Text} from '@components';
import {AI, JC, Navigations} from '@types';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ArticleCard = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const navigation = useNavigation();
 
	const imageMiniWidth =  scaleSize(72) + scaleSize(16);
	const contentWidth = props.mini ? WINDOW_WIDTH - (CONTAINER_HOR_PADDING * 2) - imageMiniWidth : '100%';
	
	return (
	  <TouchableOpacity
			delayPressIn={0}
			onPress={() => navigation.navigate(Navigations.ArticleDetail)}
			style={[
				props.mini ? styles.cardMini : styles.card,
				{
					marginBottom: scaleSize(props.bottom || 0),
					width: props.width || null,
					flexDirection: props.mini ? 'row' : 'column'
				}
			]}
		>
			<Flex styles={props.mini ? styles.imageMini : styles.image}>
				<Image resizeMode={'cover'} style={{width: '100%', height: '100%'}} source={{uri: 'https://www.gammvert.fr/conseils/sites/default/files/styles/main_image/public/2020-03/AdobeStock_250149090-tomate.jpg?itok=YSd2jz7k'}}  />
			</Flex>
   
			<Flex jc={JC.spaceBetween} styles={{width: contentWidth}}>
				<Text size={props.mini ? TextSize.large : TextSize.xlarge} family={TextFamily.SEMIBOLD} styles={{marginBottom: props.mini ? 0 : 8}}>How to plant Tomatoes properly without worry</Text>
				<Text size={TextSize.medium} color={Colors.FONT_SECOND}>by Gregorius Mendel</Text>
			</Flex>
		</TouchableOpacity>
	);
};

export default ArticleCard;
