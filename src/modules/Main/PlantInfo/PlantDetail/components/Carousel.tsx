import React, {ReactElement, useContext, useState} from 'react';
import {Flex, Image} from '@components';
import {AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {FlatList, TouchableOpacity} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {CarouselProps} from '../interface';

const Carousel = (props: CarouselProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const [activeImage, setActiveImage] = useState(0);
 
	return (
		<Flex container full styles={styles.carousel}>
			<Flex full styles={styles.activeSlide}>
				<Image resizeMode={'cover'} style={{width: '100%', height: '100%'}} source={{uri: props.images[activeImage]}}  />
			</Flex>
   
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <Flex styles={{width: scaleSize(16)}} />}
				keyExtractor={(_, index) => index.toString()}
				data={props.images}
				renderItem={({item, index}) => (
					<TouchableOpacity style={styles.slide} onPress={() => setActiveImage(index)}>
						<Image resizeMode={'cover'} style={{width: '100%', height: '100%'}} source={{uri: item}}  />
					</TouchableOpacity>
				)} />
		</Flex>
	);
};

export default Carousel;
