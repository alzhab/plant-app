import React, {ReactElement, useContext, useEffect, useRef} from 'react';
import {Button, Flex, Text} from '@components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {TextSize, AppContext} from '@styles/base';
import {AI, ButtonTypes, JC, Navigations} from '@types';
import {TABBAR_HEIGHT} from '@styles/spacing';
import Svg, {Path} from 'react-native-svg';
import {boxShadow, WINDOW_WIDTH} from '@styles/mixins';
import {Plus, Scan} from '@icons';
import {Animated, Platform} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Route = (props: {route: any, tabbarProps: BottomTabBarProps, isFocused: boolean}) => {
	const {route, tabbarProps, isFocused} = props;
	const {descriptors, navigation} = tabbarProps;
	const {colors} = useContext(AppContext);
	const {options} = descriptors[route.key];
	const label = options.title;
	const Icon = options.tabBarIcon;
 
	const onPress = () => {
		const event = navigation.emit({
			type: 'tabPress',
			target: route.key,
			canPreventDefault: true,
		});
  
		if (!isFocused && !event.defaultPrevented) {
			navigation.navigate(route.name);
		}
	};
 
 
	return (
		<Button empty type={ButtonTypes.EMPTY} click={onPress}>
			{/*@ts-ignore*/}
			<Icon color={isFocused ? colors.PRIMARY : colors.INACTIVE} scale={2} />
			<Text styles={{marginTop: 5}} size={TextSize.small}>
				{label}
			</Text>
		</Button>
	);
};

const Tabbar = (props: BottomTabBarProps): ReactElement => {
	const {state} = props;
	const {colors} = useContext(AppContext);
	const anim = useRef(new Animated.Value(0)).current;
	const activeIndex = state.index;
	const activeRouteName = state.routes[activeIndex].name;
 
	const toggleAnim = (toValue = 1) => {
		Animated.timing(anim, {
			toValue,
			useNativeDriver: false,
			duration: 300,
			delay: 100
		}).start();
	};
 
	useEffect(() => {
		toggleAnim();
	}, []);
 
	const scale = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const translateY = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, -(TABBAR_HEIGHT / 2 + 5)]
	});
	
	const middleButtonClick = () => {
		switch (activeRouteName) {
		case Navigations.Article:
			props.navigation.navigate(Navigations.ArticleCreate);
			break;
		default:
			console.log('scane');
			break
		}
	};
	
	let MiddleButtonIcon = Scan;
 
	switch (activeRouteName) {
	case Navigations.Article:
		MiddleButtonIcon = Plus;
		break;
	default:
		break
	}
 
	return (
		<Flex dir={'row'} full jc={JC.spaceBetween} ai={AI.center} styles={{height: TABBAR_HEIGHT, position: 'relative'}}>
			<Flex
				animated
				dir={'row'}
				ai={AI.center}
				jc={JC.spaceAround}
				styles={{width: (WINDOW_WIDTH / 2 - 40), position: 'relative', zIndex: 6}}
			>
				{state.routes.slice(0, 2).map((route, index) => {
					const isFocused = state.index === index;
    
					return (
						<Route key={index.toString()} route={route} isFocused={isFocused} tabbarProps={props} />
					);
				})}
			</Flex>
   
			<Button
				empty
				click={middleButtonClick.bind(this)}
				type={ButtonTypes.CIRCLE}
				styles={{
					position: 'relative', zIndex: 6,
				  width: TABBAR_HEIGHT - 5,
					height: TABBAR_HEIGHT - 5,
					transform: [{translateY}, {scale}],
					...boxShadow('#4BFF00', {height: 0, width: 0}, 20, 0.4)
				}}
			>
				<MiddleButtonIcon scale={2} color={colors.SECOND_BG} />
			</Button>
   
			<Flex jc={JC.spaceAround} ai={AI.center} styles={{width: (WINDOW_WIDTH / 2 - 40), position: 'relative', zIndex: 6}} dir={'row'}>
				{state.routes.slice(2).map((route, index) => {
					const isFocused = state.index === index + 2;
     
					return (
						<Route key={index.toString()} route={route} isFocused={isFocused} tabbarProps={props} />
					);
				})}
			</Flex>
   
			<Svg width={WINDOW_WIDTH} height={TABBAR_HEIGHT} viewBox="0 0 375 64.001" style={[{
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 1,
			}, Platform.OS === 'ios' ? boxShadow() : null]}>
				<Path d="M2495-1179.6H2120v-64h131.771a7.889,7.889,0,0,0,1.878.2h.181l.377,0a18.508,18.508,0,0,1,16.264,8.683A40.161,40.161,0,0,0,2308-1208.6a39.841,39.841,0,0,0,37.112-25.042l.03.042,0-.007a17.211,17.211,0,0,1,3.748-4.895,18.076,18.076,0,0,1,5.216-3.37,20.175,20.175,0,0,1,7.915-1.532l.377,0h.182a7.881,7.881,0,0,0,1.877-.2H2495v64h0Z" transform="translate(-2120 1243.599)" strokeWidth={Platform.OS === 'ios' ? 0 : 1} stroke="#E8E8E8" fill="#fff"/>
			</Svg>
		</Flex>
	);
};

export default Tabbar;
