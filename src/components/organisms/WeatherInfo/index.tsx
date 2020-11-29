import React, {ReactElement, useContext} from 'react';
import {Flex, IconBox, Text} from '@components';
import {AI, JC} from '@types';
import {Rain, Temp} from '@icons';
import {Colors, AppContext} from '@styles/base';
import {Props} from './interfaces';
import {WeatherType} from '../../../stores/WeatherStore';

const WeatherInfo = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
 
	let WeatherIcon;
	
	switch (props.weather) {
	case WeatherType.BROKENCLOUDS:
		WeatherIcon = Rain;
		break;
	case WeatherType.CLEARSKY:
		WeatherIcon = Rain;
		break;
	case WeatherType.CLOUDS:
		WeatherIcon = Rain;
		break;
	case WeatherType.FEWCLOUDS:
		WeatherIcon = Rain;
		break;
	case WeatherType.MIST:
		WeatherIcon = Rain;
		break;
	case WeatherType.RAIN:
		WeatherIcon = Rain;
		break;
	case WeatherType.SCATCLOUDS:
		WeatherIcon = Rain;
		break;
	case WeatherType.SHOWERRAIN:
		WeatherIcon = Rain;
		break;
	case WeatherType.SNOW:
		WeatherIcon = Rain;
		break;
	case WeatherType.THUNDERSTORM:
		WeatherIcon = Rain;
		break;
	}
	
	return (
		<Flex dir={'row'} full ai={AI.center} jc={JC.spaceBetween} styles={{paddingVertical: 10}}>
			<Flex dir={'row'}>
				<WeatherIcon color={colors.DARKBLUE} scale={1.6} />
				<Text color={Colors.DARKBLUE} styles={{marginLeft: 8}}>{props.weather}</Text>
			</Flex>
   
			<IconBox icon={{
				Icon: Temp,
				back: Colors.BLUE
			}} title={{
			  text: `${props.temp}°c`
			}} subTitle={{
				text: ''
			}} />
		</Flex>
	);
};

export default WeatherInfo;
