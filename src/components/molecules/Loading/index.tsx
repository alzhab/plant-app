import React, {ReactElement, useContext, useEffect, useRef, useState} from 'react';
import {Props} from './interfaces';
import {styles} from './styles';
import {Animated, Easing, Platform} from 'react-native';
import {AppContext} from '@styles/base';
import {Flex, Spinner} from '../../atoms';
import {AI, JC} from '@types';

const Index = (props: Props): ReactElement | null => {
	const anim = useRef(new Animated.Value(props.loading ? 1 : 0)).current;
	const [hidden, setHidden] = useState(!props.loading);
 
	const changeActive = () => {
		Animated.timing(anim, {
			toValue: props.loading ? 1 : 0,
			easing: Easing.linear,
			useNativeDriver: true,
			duration: 300
		}).start(({ finished }) => {
			if (finished) {
				setHidden(!props.loading);
			}
		});
	};
 
	useEffect(() => {
	  if(props.loading) {
			setHidden(false);
		}
		changeActive();
	}, [props.loading]);
 
	const scale = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const opacity = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const borderRadius = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [50, 0]
	});
 
	const animStyle = {
		transform: [{scale}],
		opacity,
		borderRadius
	};
 
	const {colors} = useContext(AppContext);
 
	return !hidden
		? <Flex
			animated
			full
			ai={AI.center}
			jc={JC.center}
			styles={[styles.container, animStyle, {backgroundColor: colors.MAIN_BG}]}>
			<Spinner/>
		</Flex> :
		null
};

export default Index;
