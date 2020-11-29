import {action, makeAutoObservable, observable} from 'mobx';
import {weatherApi, weatherKey, weatherUnits} from '../api/constants';

export enum WeatherType {
  CLEARSKY = 'Clear sky',
  CLOUDS = 'Clouds',
  FEWCLOUDS = 'Few clouds',
  SCATCLOUDS = 'Scattered clouds',
  BROKENCLOUDS = 'Broken clouds',
  SHOWERRAIN = 'Shower rain',
  RAIN = 'Rain',
  THUNDERSTORM = 'Thunderstorm',
  SNOW = 'Snow',
  MIST = 'Mist',
}

export interface WeatherInterface {
  weatherType: WeatherType,
  temp: string,
  pressure: string,
  wind: string,
  humidity: string
}

class WeatherStore {
  loading = true;
  currentWeather: WeatherInterface = {
  	weatherType: WeatherType.CLOUDS,
  	temp: '0',
  	pressure: '0',
  	wind: '0',
  	humidity: '0'
  };
  
  constructor() {
  	makeAutoObservable(this)
  }
  
  @action getCurrentWeather = (coords: {latitude: number, longitude: number}): void => {
  	this.loading = true;
  	const api = `${weatherApi}?lat=${coords.latitude}&lon=${coords.longitude}&${weatherUnits}&appid=${weatherKey}`;
  	fetch(api)
  		.then((response) => response.json())
  		.then(res => {
  		  this.loading = false;
  			const weather = {
  				weatherType: WeatherType.CLOUDS,
  				temp: res.main.temp,
  				pressure: res.main.pressure,
  				wind: res.wind.speed,
  				humidity: res.main.humidity
  			};
  			this.currentWeather = weather
  		}).catch(err => {
  			this.loading = false;
  			console.log('weather error: ', err)
  		})
  }
}

const weatherStore = new WeatherStore();
export default weatherStore;
