import React, {ReactElement, useCallback, useContext, useRef, useState} from 'react';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import Intro1 from '@assets/images/onboarding_1.svg';
import Intro2 from '@assets/images/onboarding_2.svg';
import Intro3 from '@assets/images/onboarding_3.svg';
import {boxShadow, scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {Indicators} from './components';
import {SlideInterface} from './interfaces';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AI, JC, Navigations} from '@types';
import {Button, Flex, Text} from '@components';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

const Onboarding = (): ReactElement => {
	const {colors, hideIntro} = useContext(AppContext);
	const [activeSlide, setActiveSlide] = useState(1);
	const flatlistRef = useRef<any>(null);
	const navigation = useNavigation();
	const slides: SlideInterface[] = [
		{
			Image: Intro1,
			title: 'Watering without worry',
			desc: 'you can set your schedule watering plant properly and can exchange schedule automatically if come a bad climate'
		},
		{
			Image: Intro2,
			title: 'Get Information About Your Plants',
			desc: 'you can scan information of your plant or a pest that harm your plant and get information how to take care that problems.'
		},
		{
			Image: Intro3,
			title: 'Build & Share with Community',
			desc: 'You can create group or community of your garden or community in your city. And you can also trade, lend, buy, or share any goods with other people'
		}
	];
 
	const skip = () => {
	  console.log('asdas');
		hideIntro();
		navigation.navigate(
		  Navigations.Auth,
			{screen: Navigations.Register});
	};
 
	const nextSlide = () => {
		if (activeSlide !== 3) {
			flatlistRef.current.scrollToIndex({animated: true, index: activeSlide});
		} else {
			skip();
		}
	};
 
	const onViewableItemsChanged = useCallback(({changed}) => {
		const index = changed[0].index + 1;
		if (index !== activeSlide - 1) {
			setActiveSlide(index);
		}
		
	}, []);
 
	const viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};
 
	return (
		<Flex size={1} full ai={AI.center} jc={JC.center}>
			<FlatList
				bounces={false}
				ref={flatlistRef}
				horizontal
				style={{marginBottom: -50, position: 'relative', flex: 1}}
				decelerationRate="fast"
				viewabilityConfig={viewabilityConfig}
				snapToAlignment={'center'}
				snapToInterval={WINDOW_WIDTH}
				contentContainerStyle={{justifyContent: 'center'}}
				onViewableItemsChanged={onViewableItemsChanged}
				showsHorizontalScrollIndicator={false} data={slides}
				renderItem={({item}: { item: SlideInterface }) => {
					const Image = item.Image;
     
					return (
						<Flex styles={{width: WINDOW_WIDTH, position: 'relative'}} jc={JC.center} ai={AI.center}>
							<Flex jc={JC.center} ai={AI.center} full styles={{paddingVertical: scaleSize(70)}}>
								<Image/>
							</Flex>
       
							<Flex styles={{paddingHorizontal: CONTAINER_HOR_PADDING}}>
								<Text color={Colors.FONT} family={TextFamily.BOLD}
									size={TextSize.xlarge}
									styles={{marginBottom: scaleSize(16)}}
								>{item.title}</Text>
								<Text color={Colors.FONT}
									size={TextSize.medium}>{item.desc}</Text>
							</Flex>
						</Flex>
					);
				}} keyExtractor={(_, index) => index.toString()}/>
				
				
			<Flex full size={0.3} jc={JC.flexEnd} styles={{backgroundColor: Colors.SECOND_BG}}>
				<Flex full jc={JC.center} ai={AI.center} styles={{marginBottom: scaleSize(24)}}>
					<Indicators count={slides.length} active={activeSlide}/>
				</Flex>
    
				<Flex container full ai={AI.center} jc={JC.spaceBetween} dir={'row'} styles={[{paddingVertical: scaleSize(16), backgroundColor: colors.SECOND_BG}, boxShadow()]}>
					<Button size={TextSize.large} family={TextFamily.BOLD} full click={() => nextSlide()} title={activeSlide === slides.length ? 'Sign Up' : 'Next'}/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Onboarding;
