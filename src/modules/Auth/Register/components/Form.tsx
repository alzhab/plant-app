import React, {ReactElement} from 'react';
import {Button, Checkbox, Flex, Input, Text} from '@components';
import {Colors, TextFamily, TextSize} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {Account, Lock, Mail} from '@icons';
import {AI, ButtonTypes, JC, Navigations} from '@types';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {FormProps, FormValues} from '../interfaces';
import {errorMessages, validators} from '@utils';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

const Form = (props: FormProps): ReactElement => {
	const {control, handleSubmit, errors, getValues} = useForm({
		shouldFocusError: true
	});
	const navigation = useNavigation();
 
	const errorMessage = (controller: string) => {
		return errors[controller] ? errors[controller].message : ''
	};
 
	// on error disable button for 2 seconds to give errors time to vanish
	const onError = () => {
		console.log('error')
	};
 
	const onSubmit = () => {
		const values: FormValues = {
			email: getValues().email,
			password: getValues().password,
		};
  
		props.submit(values);
	};
 
	return (
		<KeyboardAvoidingView style={{width: '100%', flex: 1}}>
			<ScrollView>
				<Flex container full size={1}>
					<Flex full size={1}>
						<Text
							size={TextSize.extraLarge}
							family={TextFamily.BOLD}
							styles={{marginBottom: scaleSize(24)}}>
          Welcome to Waplant
						</Text>
      
						<Controller
							name='email'
							defaultValue=''
							rules={{required: errorMessages.required, pattern: {value: validators.emailValidator, message: errorMessages.email}}}
							control={control}
							render={({onChange, value}) => (
								<Input
									value={value}
									Icon={Mail}
									placeholder={'Email'}
									keyboardType='email-address'
									error={errorMessage('email')}
									onChange={(text) => onChange(text)}
								/>
							)} />
     
     
						<Controller
							name='password'
							defaultValue=''
							rules={{required: errorMessages.required}}
							control={control}
							render={({onChange, value}) => (
								<Input
									value={value}
									Icon={Lock}
									secureTextEntry
									placeholder={'Password'}
									error={errorMessage('password')}
									onChange={(text) => onChange(text)}
								/>
							)} />
     
						<Controller
							name='confirmPassword'
							defaultValue=''
							rules={{required: errorMessages.required, validate: value => value === getValues('password') || errorMessages.matchPassword}}
							control={control}
							render={({onChange, value}) => (
								<Input
									value={value}
									Icon={Lock}
									secureTextEntry
									placeholder={'Retype Password'}
									error={errorMessage('confirmPassword')}
									onChange={(text) => onChange(text)}
								/>
							)} />
					</Flex>
   
					<Flex full size={0.5} ai={AI.center} jc={JC.spaceEvenly}>
    
						<Button
							full
							title={'Register'}
							size={TextSize.large}
							family={TextFamily.BOLD}
							click={handleSubmit(onSubmit, onError)}
						/>
    
						<Button
							full
							size={TextSize.medium}
							type={ButtonTypes.EMPTY}
							family={TextFamily.SEMIBOLD}
							click={() => navigation.navigate(Navigations.Login)}
						>
							<Text size={TextSize.small}>
            Already have an account?
								<Text size={TextSize.small} color={Colors.PRIMARY}> Login now</Text>
							</Text>
						</Button>
					</Flex>
				</Flex>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default Form;
