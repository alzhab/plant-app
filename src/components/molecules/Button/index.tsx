import React, {ReactElement, useContext} from 'react';
import {ButtonProps, ButtonStylesInterface} from './interfaces';
import {TouchableOpacity, Pressable} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {Colors, AppContext} from '@styles/base';
import {Flex, Text} from '../../atoms';
import {AI, ButtonTypes, JC, TextAlign} from '@types';

const Index = (props: ButtonProps): ReactElement => {
	const type = props.type || 'PRIMARY';
	const shadow = {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9
	};
	const isUnpressed = props.type === 'UNPRESSED';
 
	const styles: ButtonStylesInterface = {
		borderRadius: props.solid ? 0 : scaleSize(5),
		alignItems: 'center',
		justifyContent: 'center'
	};
	const {colors} = useContext(AppContext);
 
	let color = Colors.FONT;
	switch (type) {
	case ButtonTypes.PRIMARY:
		color = Colors.MAIN_BG;
		styles.backgroundColor = colors.PRIMARY;
		break;
	case ButtonTypes.UNPRESSED:
		styles.backgroundColor = colors.MAIN_BG;
		styles.borderWidth = 0;
		styles.borderColor = 'transparent';
		color = Colors.FONT_SECOND;
		break;
	case ButtonTypes.EMPTY:
		styles.backgroundColor = 'transparent';
		styles.borderWidth = 0;
		styles.borderColor = 'transparent';
		color = Colors.FONT;
		break;
	case ButtonTypes.DISABLED:
		styles.backgroundColor = colors.FONT_SECOND;
		styles.borderWidth = 0;
		styles.borderColor = 'transparent';
		color = Colors.FONT;
		break;
	case ButtonTypes.CIRCLE:
		color = Colors.MAIN_BG;
		styles.borderRadius = 100;
		styles.backgroundColor = colors.PRIMARY;
		break;
	}
 
	if (props.full) {
		styles.width = '100%';
	}
 
	return (
		<TouchableOpacity
			delayPressIn={0}
			activeOpacity={type === ButtonTypes.DISABLED ? 1 : 0.7}
			onPress={() => props.click()}
			style={[{
				paddingVertical: props.empty ? 0 : 13,
				paddingHorizontal: props.empty ? 0 : scaleSize(15)
			}, styles, props.styles, isUnpressed && shadow]}>
			<Flex full ai={AI.center} jc={JC.center}>
				{props.title && <Text
					color={props.color || color}
					size={props.size}
					family={props.family}
					textAlign={TextAlign.center}
				>{props.title}</Text>}
    
				{props.children ? props.children : null}
			</Flex>
		</TouchableOpacity>
	);
};

export default Index;
