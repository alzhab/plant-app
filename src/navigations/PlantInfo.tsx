import React, {ReactElement} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {PlantDetail, PlantEnvCompare} from '@modules';

const navigations = [
	{
		name: Navigations.PlantDetail,
		component: PlantDetail
	},
	{
		name: Navigations.PlantEnvCompare,
		component: PlantEnvCompare
	},
];

const Stack = createStackNavigator();

const PlantInfoNavigation = (): ReactElement => {
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

export default PlantInfoNavigation
