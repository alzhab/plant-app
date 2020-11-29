import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {ReactElement, useContext} from 'react';
import {BottomBarIconsProps, Navigations} from '@types';
import {Article, Home, Profile, Report} from '@modules';
import {Account, Graphic, Paper, Plant} from '@icons';
import {AppContext} from '@styles/base';
import Tabbar from '../components/organisms/TabBar';

const navigations = [
	{
		name: Navigations.Home,
		component: Home,
		Icon: Plant,
		title: 'Plant'
	},
	{
		name: Navigations.Article,
		component: Article,
		Icon: Paper,
		title: 'Article'
	},
	{
		name: Navigations.Report,
		component: Report,
		Icon: Graphic,
		title: 'Report'
	},
	{
		name: Navigations.Profile,
		component: Profile,
		Icon: Account,
		title: 'Profile'
	},
];

const BottomBar = createBottomTabNavigator();

const BottomBarNavigation = (): ReactElement => {
	const {colors} = useContext(AppContext);
 
	return (
		<BottomBar.Navigator
			tabBar={props => <Tabbar {...props} />}
			tabBarOptions={{
				keyboardHidesTabBar: true
			}}
		>
			{
				navigations.map(route => {
				  const Icon = route.Icon;
				  
				  return (
						<BottomBar.Screen
							options={{
							  title: route.title,
								tabBarIcon: Icon
							}}
							key={route.name}
							name={route.name}
							component={route.component} />
					)
				})
			}
		</BottomBar.Navigator>
	)
};

export default BottomBarNavigation
