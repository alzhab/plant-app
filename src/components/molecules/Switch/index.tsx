import React, {ReactElement, useContext, useEffect, useRef} from 'react';
import {Flex} from '../../atoms';
import {height, styles, width} from './styles';
import {SwitchProps} from './interfaces';
import {Animated, Easing, TouchableOpacity} from 'react-native';
import {AppContext} from '@styles/base';

const Index = (props: SwitchProps): ReactElement => {
	const anim = useRef(new Animated.Value(props.checked ? 1 : 0)).current;
	const {colors} = useContext(AppContext);
	
	const changeActive = () => {
		Animated.timing(anim, {
			toValue: props.checked ? 1 : 0,
			easing: Easing.linear,
			useNativeDriver: false,
			duration: 100
		}).start()
	};
 
	useEffect(() => {
		changeActive();
	}, [props.checked]);
 
	const switchBackgroundColor = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.INACTIVE, colors.PRIMARY]
	});
 
	const circleBackgroundColor = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.INACTIVE, colors.PRIMARY_THIRD]
	});
 
	const circleLeft= anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, width - height]
	});
 
	const animSwitch = {
		backgroundColor: switchBackgroundColor
	};
 
	const animCircle = {
		backgroundColor: circleBackgroundColor,
		left: circleLeft
	};
 
	return (
	  <TouchableOpacity onPress={() => props.click()}>
			<Flex animated styles={[styles.switch, animSwitch, !props.checked && styles.inactiveSwitch]}>
				<Flex animated styles={[styles.circle, animCircle]} />
			</Flex>
		</TouchableOpacity>
	);
};

export default Index;
