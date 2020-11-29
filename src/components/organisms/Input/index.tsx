import React, {ReactElement, useContext} from 'react';
import {TextInput} from 'react-native';
import {getStyles} from './styles';
import {InputProps} from './interfaces';
import {TextInputMask} from 'react-native-masked-text';
import {Colors, AppContext} from '@styles/base';
import {Flex, Text} from '../../atoms';
import {InputError} from '../../molecules';
import {AI, JC} from '@types';
import {boxShadow, scaleSize} from '@styles/mixins';

const Input = (props: InputProps): ReactElement => {
	const error = props.error;
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const Icon = props.Icon;
	
	const iconColor = props.error ? colors.ERROR : props.value.length ? colors.PRIMARY : colors.INACTIVE;
	
	return (
	  <>
			{
				props.floatLabel ? <Text styles={{marginBottom: 8}} color={Colors.FONT_SECOND}>{props.placeholder}</Text> : null
			}
   
			<Flex
				dir={'row'}
				ai={props.textArea ? AI.flexStart : AI.center}
				full
				styles={[
			  styles.inputItem,
					(props.floatLabel ? null : boxShadow()),
					{
				    paddingVertical: scaleSize(props.floatLabel ? 0 : 8),
						marginBottom: scaleSize(props.bottom ? props.bottom : 24),
					}
				]}>
				{
					Icon
						? (
				    <Flex styles={[styles.icon]} ai={AI.center} jc={JC.center}>
								<Icon scale={1.5} color={iconColor} />
							</Flex>
						)
						: null
				}
   
				{
					props.mask
						? (
							<TextInputMask
								type="custom"
								options={{mask: props.mask}}
								secureTextEntry={props.secureTextEntry}
								placeholder={props.floatLabel ? '' : props.placeholder}
								autoCapitalize='none'
								keyboardType={props.keyboardType || 'default'}
								placeholderTextColor={error ? colors.ERROR : colors.FONT_SECOND}
								style={[styles.input, error ? styles.inputError : null]}
								value={props.value}
								caretHidden={props.caretHidden}
								onChangeText={(val: string) => {
									props.onChange(val)
								}}
							/>
						): (
							<TextInput
								secureTextEntry={props.secureTextEntry}
								placeholder={props.floatLabel ? '' : props.placeholder}
								autoCapitalize='none'
								value={props.value}
								multiline={props.textArea}
								numberOfLines={props.textArea ? 10 : 1}
								keyboardType={props.keyboardType || 'default'}
								placeholderTextColor={error ? colors.ERROR : colors.FONT_SECOND}
								style={[styles.input, props.textArea ? styles.textArea : null, error ? styles.inputError : null]}
								caretHidden={props.caretHidden}
								onChangeText={(val: string) => {
									props.onChange(val)
								}}
							/>
						)
				}
   
				<InputError error={props.error} />
			</Flex>
		</>
	);
};

export default Input;
