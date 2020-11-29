import React, {ReactElement, useContext, useEffect, useRef} from 'react';
import {Flex, Popup, Text} from '@components';
import {Props} from './interface';
import {Animated, FlatList, TouchableOpacity} from 'react-native';
import {TextFamily, AppContext} from '@styles/base';
import {POPUP_ZINDEX, scaleSize, WINDOW_HEIGHT} from '@styles/mixins';

const SearchDropdown = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const show = props.show;
	const anim = useRef(new Animated.Value(show ? 1 : 0)).current;
 
	const toggleAnim = () => {
		Animated.timing(anim, {
			toValue: show ? 1 : 0,
			useNativeDriver: false,
			duration: 300,
		}).start();
	};
 
	useEffect(() => {
		toggleAnim();
	}, [show]);
 
	const maxHeight = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0,  scaleSize(300)]
	});
 
	const borderWidth = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const marginTop = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 8]
	});
 
	return (
		<>
			<Flex styles={{height: '100%', width: props.width || '100%'}}>
				{props.children}
				
				<Flex
					animated
					styles={{
						width: props.dropdownWidth || '100%',
						borderRadius: 6,
						borderColor: colors.INACTIVE,
						borderWidth,
						maxHeight,
						marginTop,
						overflow: 'hidden',
						backgroundColor: colors.SECOND_BG,
					}}
				>
					<FlatList
						bounces={false}
						showsVerticalScrollIndicator={false}
						style={{width: '100%'}}
						keyExtractor={(_, index) => index.toString()}
						data={props.list}
						renderItem={({item}) => (
							<TouchableOpacity
								style={{
									width: '100%',
									paddingVertical: 10,
									paddingHorizontal: 16,
								}} onPress={() => props.choose(item)}>
								<Text family={TextFamily.SEMIBOLD}>{item}</Text>
							</TouchableOpacity>
						)} />
				</Flex>
			</Flex>
		</>
	);
};

export default SearchDropdown;
