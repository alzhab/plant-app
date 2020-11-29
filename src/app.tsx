import React, {Component, ReactElement} from 'react';
import {observer, Provider} from 'mobx-react';
import Container from '@navigations/Container';
import {Splash} from '@modules';
import {AppContext, ChangeColorsIN, defaultColors} from '@styles/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import {authStore, loadingStore, modalStore, noticeMessageStore, popupStore, weatherStore} from '@stores';

const stores = {
	loadingStore,
	noticeMessageStore,
	modalStore,
	popupStore,
	authStore,
	weatherStore
};

@observer
class App extends Component {
  state = {
  	load: true,
  	colors: defaultColors,
  	showIntro: false,
  };

  async componentDidMount() {
  	// await AsyncStorage.clear();
  	await this.getAuthInfo();
  	await this.getDataInfo();
  	await this.getData();
  	
  	
  }

  // СОХРАНЯЕМ В СОСТОЯНИЕ ЦВЕТА ИЗ ASYNC STORAGE ================================================
  async getData() {
  	try {
  		const value = await AsyncStorage.getItem('colors');
  		if (value === null) {
  			const colors = JSON.stringify(defaultColors);
  			await AsyncStorage.setItem('colors', colors);
  		} else {
  			this.setState({colors: JSON.parse(value)});
  		}
  		setTimeout(() => this.toggleLoad(), 1000);
  	} catch (e) {
  		this.toggleLoad();
  	}
  }

  async getDataInfo() {
  	try {
  		const value = await AsyncStorage.getItem('showIntro');
  		if (value === null) {
  			this.setState({showIntro: true});
  		}
  	} catch (e) {}
  }
  
  async getAuthInfo() {
  	try {
  		const value = await AsyncStorage.getItem('user');
  		if (value !== null) {
  		  authStore.setUser(JSON.parse(value))
  		}
  	} catch (e) {}
  }
  
  // СОХРАНЯЕМ В ASYNC STORAGE НОВЫЕ ЦВЕТА ================================================
  async storeData(value: ChangeColorsIN) {
  	try {
  		const jsonValue = JSON.stringify(value);
  		await AsyncStorage.setItem('colors', jsonValue);
  	} catch (e) {}
  }

  // МЕНЯЕМ ЦВЕТА И СОХРАНЯЕМ В ASYNC STORAGE ================================================
  changeColors(colors: ChangeColorsIN) {
  	colors = {
  		...defaultColors,
  		...colors,
  	};
  	this.setState({colors});
  	this.storeData(colors);
  }

  // ВКЛЮЧАЕМ / ВЫКЛЮЧАЕМ ЗАГРУЗКУ
  toggleLoad() {
  	this.setState({load: !this.state.load});
  }

  async storeDataIntro() {
  	try {
  		const jsonValue = JSON.stringify(false);
  		console.log(jsonValue);
  		await AsyncStorage.setItem('showIntro', jsonValue);
  	} catch (e) {}
  }

  hideIntro() {
  	this.storeDataIntro();
  }

  render(): ReactElement {
  	return (
  		<KeyboardAvoidingView style={{flex: 1, width: '100%'}}>
  			<StatusBar backgroundColor={this.state.colors.SECOND_BG} barStyle={'dark-content'} />
  			<AppContext.Provider
  				value={{
  					colors: this.state.colors,
  					showIntro: false,
  					changeColors: (colors: ChangeColorsIN) => this.changeColors(colors),
  					hideIntro: () => this.hideIntro(),
  				}}>
  				{!this.state.load ? (
  					<Provider {...stores}>
  						<Container />
  					</Provider>
  				) : null}
  				<Splash show={this.state.load} />
  			</AppContext.Provider>
  		</KeyboardAvoidingView>
  	);
  }
}

export default App;
