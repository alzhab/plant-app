import React, {ReactElement, useContext} from 'react';
import {Colors, TextFamily, AppContext} from '@styles/base';
import {getStyles} from './styles';
import {Props} from './interfaces';
import {Badge, Flex, IconBox, Image, Text} from '@components';
import {JC, Navigations} from '@types';
import {scaleSize} from '@styles/mixins';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Bailer} from '@icons';

const PlantCard = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const navigation = useNavigation();
 
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(Navigations.PlantInfo)}
			style={[
				styles.card,
				{
					marginBottom: scaleSize(props.bottom || 0),
					width: props.width ? props.width : '100%'
				}
			]}
		>
			<Flex styles={styles.image} full>
				<Image resizeMode={'cover'} style={{width: '100%', height: '100%'}} source={{uri: 'https://www.gammvert.fr/conseils/sites/default/files/styles/main_image/public/2020-03/AdobeStock_250149090-tomate.jpg?itok=YSd2jz7k'}}  />
			</Flex>
   
			<Flex jc={JC.spaceBetween} full>
				<Text family={TextFamily.SEMIBOLD} styles={{marginBottom: scaleSize(16)}}>
          Tomatoes
				</Text>
    
				<Badge
					bottom={8}
					title={{
						text: 'Harvest'
					}}
				/>
				
				<IconBox
					icon={{
						Icon: Bailer,
						back: Colors.BLUE,
						box: 24,
						scale: 1
					}}
					title={{
					  text: '3hr 4min',
						color: Colors.BLUE,
						family: TextFamily.SEMIBOLD,
					}}
					subTitle={{
					  text: ''
					}}
				/>
			</Flex>
		</TouchableOpacity>
	);
};

export default PlantCard;
