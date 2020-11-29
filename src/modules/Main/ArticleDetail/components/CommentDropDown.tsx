import React, {ReactElement, useContext, useEffect, useRef} from 'react';
import {AI} from '@types';
import {CommentIcon, Dropdown} from '@icons';
import {Flex, Text} from '@components';
import {Colors, TextSize, AppContext} from '@styles/base';
import {Animated, TouchableOpacity} from 'react-native';

const CommentDropDown = (props: {click: () => void, active: boolean}): ReactElement => {
	const {colors} = useContext(AppContext);
	const {active} = props;
	const anim = useRef(new Animated.Value(active ? 1 : 0)).current;
 
	const toggleAnim = () => {
		Animated.timing(anim, {
			toValue: active ? 1 : 0,
			useNativeDriver: false,
			duration: 300,
		}).start();
	};
 
	useEffect(() => {
		toggleAnim();
	}, [active]);
 
	const rotateZ = anim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg']
	});
	
	return (
	  <TouchableOpacity onPress={() => {props.click()}} style={{width: '100%'}}>
			<Flex dir={'row'} ai={AI.center} full>
				<CommentIcon color={colors.FONT_SECOND} />
				<Text color={Colors.FONT_SECOND} size={TextSize.small} styles={{marginHorizontal: 8}}>24 Comment</Text>
				<Flex animated styles={{
				  transform: [{rotateZ}]
				}}>
					<Dropdown color={colors.FONT_SECOND} scale={0.6} />
				</Flex>
			</Flex>
		</TouchableOpacity>
	);
};

export default CommentDropDown;
