import React, {ReactElement, useEffect, useRef} from 'react';
import {Flex} from '@components';
import {Animated} from 'react-native';
import {POPUP_ZINDEX, WINDOW_HEIGHT} from '@styles/mixins';

const Popup = (props: {active: boolean}): ReactElement => {
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
 
	const opacity = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});
 
	const top = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [WINDOW_HEIGHT, 0]
	});
 
	return (
		<Flex
			animated
			styles={{
			  zIndex: POPUP_ZINDEX,
				position: 'absolute',
				top,
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: 'rgba(3,6,2,0.5)',
				opacity
			}} />
	);
};

export default Popup;
