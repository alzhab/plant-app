import {WeatherInterface} from '../../../../stores/WeatherStore';

export interface State {
  search: string;
}

export interface HeaderProps {
  search: string,
  onChangeSearch: (value: string) => void
}

export interface WeatherProps {loading: boolean, weather: WeatherInterface}
