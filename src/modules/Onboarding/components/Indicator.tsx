import React, {useContext, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {Flex} from '@components';
import {AppContext} from '@styles/base';

const Indicator = (props: {isActive: boolean}) => {
	const {colors} = useContext(AppContext);
	const anim = useRef(new Animated.Value(props.isActive ? 1 : 0)).current;
 
	const toggleAnim = () => {
		Animated.timing(anim, {
			toValue: props.isActive ? 1 : 0,
			useNativeDriver: false,
			duration: 300
		}).start();
	};
 
	useEffect(() => {
		toggleAnim();
	}, [props.isActive]);
 
	const width = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [8, 16]
	});
 
	const backgroundColor = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.INACTIVE, colors.PRIMARY]
	});
 
	return (
		<Flex animated styles={{
			marginHorizontal: 3,
			width,
			height: 8,
			borderRadius: 8,
			backgroundColor
		}}/>
	);
};

export default Indicator;
