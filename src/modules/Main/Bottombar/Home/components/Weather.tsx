import React, {ReactElement, useContext} from 'react';
import {AppContext} from '@styles/base';
import {Flex, HorCalendare, Loading, PWH, WeatherInfo} from '@components';
import {getStyles} from '../styles';
import {scaleSize} from '@styles/mixins';
import {WeatherProps} from '../interfaces';

const Weather = (props: WeatherProps): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	
	return (
		<Flex full>
			<Flex container>
				<WeatherInfo weather={props.weather.weatherType} temp={props.weather.temp} />
			</Flex>
  
			<Flex container full styles={styles.weatherContainer}>
				<Flex full styles={{marginBottom: scaleSize(28)}}>
					<HorCalendare/>
				</Flex>
    
				<PWH pressure={props.weather.pressure} humidity={props.weather.humidity} wind={props.weather.wind} />
			</Flex>
   
			<Loading loading={props.loading}/>
		</Flex>
	);
};

export default Weather;
