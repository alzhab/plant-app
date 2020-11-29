import React, {ReactElement} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {ChatList, ForgotPassword, Login, Register} from '@modules';

const navigations = [
	{
		name: Navigations.ChatList,
		component: ChatList
	},
];

const Stack = createStackNavigator();

const ChatNavigaiton = (): ReactElement => {
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

export default ChatNavigaiton
