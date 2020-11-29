import React, {ReactElement, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {Flex, Text} from '../../atoms';
import {InputError} from '../../molecules';
import {CheckboxProps} from './interfaces';
import {Check} from '@icons';
import {getStyles} from './styles';
import {scaleSize} from '@styles/mixins';
import {Colors, TextSize, AppContext} from '@styles/base';
import {AI, JC} from '@types';

const Checkbox = (props: CheckboxProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	
	if(!props.text && !props.children) {
		throw Error('Index must contain text or children props')
	}
 
	const checkbox = props.checked && <Check scale={0.6} color={colors.PRIMARY}/>;
	
	const textSize = props.size ? props.size : TextSize.medium;
	
	return (
		<TouchableOpacity onPress={() => props.onChange(!props.checked)}>
			<Flex dir='row' ai={AI.center} full styles={{marginBottom: scaleSize(5)}}>
				<Flex styles={[styles.checkboxContainer, {borderColor: props.checked ? colors.PRIMARY : colors.INACTIVE}]} ai={AI.center} jc={JC.center}>
					{checkbox}
				</Flex>
    
				<Text color={props.checked ? Colors.PRIMARY : Colors.FONT_SECOND} size={textSize} styles={{marginLeft: scaleSize(10)}}>
					{props.text ? props.text : props.children}
				</Text>
			</Flex>
			<InputError error={props.error} />
		</TouchableOpacity>
	);
};

export default Checkbox;
