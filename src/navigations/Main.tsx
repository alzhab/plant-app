import React, {ReactElement} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {ArticleCreate, ArticleDetail, ChatDetail, Notifications} from '@modules';
import BottomBarNavigation from './BottomBar';
import ChatNavigaiton from './Chat';
import PlantInfoNavigation from '@navigations/PlantInfo';

const navigations = [
	{
		name: Navigations.BottomBar,
		component: BottomBarNavigation
	},
	{
		name: Navigations.Notifications,
		component: Notifications
	},
	{
		name: Navigations.Chat,
		component: ChatNavigaiton
	},
	{
		name: Navigations.ChatDetail,
		component: ChatDetail
	},
	{
		name: Navigations.ArticleDetail,
		component: ArticleDetail
	},
	{
		name: Navigations.ArticleCreate,
		component: ArticleCreate
	},
	{
		name: Navigations.PlantInfo,
		component: PlantInfoNavigation
	}
];

const Stack = createStackNavigator();

const MainNavigaiton = (): ReactElement => {
	return (
		<Stack.Navigator
			headerMode={'none'}
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
			}}>
			{
				navigations.map(route => (
					<Stack.Screen key={route.name} name={route.name} component={route.component} />
				))
			}
		</Stack.Navigator>
	)
};

export default MainNavigaiton
