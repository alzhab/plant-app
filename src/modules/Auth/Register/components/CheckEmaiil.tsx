import React, {ReactElement} from 'react';
import {Button, Flex, Text} from '@components';
import {Colors, TextFamily, TextSize} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {AI, ButtonTypes, JC, Navigations, TextAlign} from '@types';
import {useNavigation} from '@react-navigation/native';

const CheckEmail = (): ReactElement => {
	const navigation = useNavigation();
 
	return (
		<Flex container full size={1}>
			<Flex full size={1}>
				<Text
					textAlign={TextAlign.center}
					size={TextSize.extraLarge}
					family={TextFamily.BOLD}
					styles={{marginBottom: scaleSize(24)}}>
          We sent you an email to
          verify your account
				</Text>
			</Flex>
   
			<Flex full size={0.5} ai={AI.center} jc={JC.spaceEvenly}>
    
				<Button
					full
					title={'Login'}
					size={TextSize.large}
					family={TextFamily.BOLD}
					click={() => navigation.navigate(Navigations.Login)}
				/>
			</Flex>
		</Flex>
	);
};

export default CheckEmail;
