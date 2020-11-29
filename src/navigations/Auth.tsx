import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {ForgotPassword, Login, Register} from '@modules';

const navigations = [
	{
		name: Navigations.Login,
		component: Login
	},
	{
		name: Navigations.Register,
		component: Register
	},
	{
		name: Navigations.ForgotPassword,
		component: ForgotPassword
	}
];

const Stack = createStackNavigator();

const AuthNavigaiton = (): ReactElement => {
	return (
		<Stack.Navigator headerMode={'none'}>
			{
				navigations.map(route => (
					<Stack.Screen key={route.name} name={route.name} component={route.component} />
				))
			}
		</Stack.Navigator>
	)
};

export default AuthNavigaiton
