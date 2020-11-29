import React, {Component, ReactElement} from 'react';
import {Flex, Popup} from '@components';
import {NavigationProps} from '@types';
import {State} from './interfaces';
import {Articles, Content, Shedule, Weather, Header} from './components';
import {observer} from 'mobx-react';
import {weatherStore} from '@stores';
import {toJS} from 'mobx';
import Geolocation from 'react-native-geolocation-service';

@observer
class Home extends Component<NavigationProps> {
 state: State = {
 	search: '',
 };
 
 componentDidMount(): void {
 	Geolocation.getCurrentPosition(
 		(position) => {
 			console.log(position);
 			weatherStore.getCurrentWeather(position.coords);
 		},
 		(error) => {
 			// See error code charts below.
 			console.log(error.code, error.message);
 		},
 		{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
 	);
 }
 
 onSearch(search: string): void {
 	this.setState({search})
 }
 

 render(): ReactElement {
 	const weather = toJS(weatherStore.currentWeather);
 	const weatherLoading = toJS(weatherStore.loading);
 	
 	return (
 	  <>
 			<Header
 				search={this.state.search}
 				onChangeSearch={this.onSearch.bind(this)}
 			/>
   
 			<Content>
 				<Weather loading={weatherLoading} weather={weather} />
     
 				<Flex full container>
 					<Shedule />
      
 					<Articles />
 				</Flex>
 			</Content>
 		</>
 	);
 }
}

export default Home;
