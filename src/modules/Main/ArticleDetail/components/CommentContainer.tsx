import React, {ReactElement, useContext, useEffect, useRef, useState} from 'react';
import {Flex} from '@components';
import Comment from './Comment';
import CommentDropDown from './CommentDropDown';
import {AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {scaleSize} from '@styles/mixins';
import {Animated, ScrollView} from 'react-native';

const CommentContainer = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const [active, setActive] = useState(false);
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
 
	const height = anim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 300]
	});
	
	return (
		<Flex full styles={styles.commentContainer}>
			<Comment/>
   
			<CommentDropDown click={() => {setActive(!active)}} active={active}/>
			
			<Flex animated full styles={{
			  paddingLeft: scaleSize(25),
				marginTop: scaleSize(23),
				overflow: 'hidden',
				height
			}}>
				<ScrollView>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
					<Comment bottom={16}/>
				</ScrollView>
			</Flex>
		</Flex>
	);
};

export default CommentContainer;
