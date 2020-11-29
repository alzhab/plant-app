import React, {ReactElement} from 'react';
import {Button, Flex, Input, Text} from '@components';
import {Colors, TextFamily, TextSize} from '@styles/base';
import {AI, ButtonTypes, JC, Navigations, TextAlign} from '@types';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {FormProps, FormValues} from '../interfaces';
import {errorMessages, validators} from '@utils';
import {Mail} from '@icons';
import {KeyboardAvoidingView} from 'react-native';

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
			password: getValues().password
		};
  
		props.submit(values);
	};
 
	return (
 		<KeyboardAvoidingView style={{width: '100%', flex: 1}}>
			<Flex container full size={1}>
				<Flex full size={0.3}>
					<Text
						textAlign={TextAlign.center}
						size={TextSize.xlarge}
						family={TextFamily.BOLD}>
          Fill your email and we will sent you
          a link to change your password
					</Text>
				</Flex>
   
				<Flex full size={0.5}>
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
				</Flex>
   
				<Flex full size={0.3} ai={AI.center} jc={JC.spaceEvenly}>
    
					<Button
						full
						title={'Get Your New Password'}
						size={TextSize.large}
						family={TextFamily.BOLD}
						click={handleSubmit(onSubmit, onError)}
					/>
    
					<Button
						full
						size={TextSize.medium}
						type={ButtonTypes.EMPTY}
						family={TextFamily.SEMIBOLD}
						click={() => navigation.navigate(Navigations.Register)}
					>
						<Text size={TextSize.small}>
							{"Don't"} have an account?
							<Text size={TextSize.small} color={Colors.PRIMARY}> Register now</Text>
						</Text>
					</Button>
				</Flex>
			</Flex>
		</KeyboardAvoidingView>
	);
};

export default Form;
