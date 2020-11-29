import React, {ReactElement} from 'react';
import {Flex, IconBox} from '@components';
import {JC} from '@types';
import {Drib, Sun, Wind} from '@icons';
import {Colors} from '@styles/base';

const PWH = (props: {pressure: string, wind: string, humidity: string}): ReactElement => {
	return (
		<Flex full dir={'row'} jc={JC.spaceBetween}>
			<IconBox
				icon={{
					Icon: Sun,
					box: 32,
					back: Colors.DARKBLUE
				}}
				title={{
					text: `${props.pressure} Pa`
				}}
				subTitle={{
					text: 'Pressure'
				}}
			/>
   
			<IconBox
				icon={{
					Icon: Wind,
					box: 32,
					back: Colors.PRIMARY
				}}
				title={{
					text: `${props.wind}m/s`
				}}
				subTitle={{
					text: 'Wind'
				}}
			/>
   
			<IconBox
				icon={{
					Icon: Drib,
					box: 32,
					back: Colors.LIGHTBLUE
				}}
				title={{
					text: `${props.humidity}%`
				}}
				subTitle={{
					text: 'Humidity'
				}}
			/>
		</Flex>
	);
};

export default PWH;
