import {action, makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loadingStore, noticeMessageStore} from './index';
import {NoticeTypeEnum} from './NoticeMessageStore';

export interface UserInterface {
  email: string | null;
}

class AuthStore {
  user: UserInterface | null = null;
  
  constructor() {
  	makeAutoObservable(this)
  }
  
  @action setUser(user: UserInterface) {
  	this.user = user;
  }
  
  @action logout() {
  	this.user = null;
  	AuthStore.deleteUserStorage();
  }
  
  static async deleteUserStorage() {
  	await AsyncStorage.removeItem('user');
  }
  
  static async setUserStorage(user: UserInterface) {
  	await AsyncStorage.setItem('user', JSON.stringify(user));
  }
  
  @action loginUser = ({email, password}: {email: string, password: string}): Promise<boolean> => {
  	loadingStore.toggleLoading();
   
  	return new Promise((resolve, reject) => {
  	  setTimeout(() => {
  			loadingStore.toggleLoading();
  			if(email === 'admin@gmail.com' && password === 'password') {
  			  this.user = {email: 'admin@gmail.com'};
  			  AuthStore.setUserStorage(this.user);
  				resolve(true);
  			}else {
  				noticeMessageStore.showMessage('Login: admin@gmail.com | Password: password', NoticeTypeEnum.error);
  				reject(false)
  			}
  		}, 1000)
  	});
  };
  
  @action registerUser = ({email, password}: {email: string, password: string}): Promise<boolean> => {
  	loadingStore.toggleLoading();
  
  	return new Promise((resolve, reject) => {
  		setTimeout(() => {
  			loadingStore.toggleLoading();
  			if(email !== 'admin@gmail.com') {
  				this.user = {email};
  				AuthStore.setUserStorage(this.user);
  				resolve(true);
  			}else {
  				noticeMessageStore.showMessage('Email alreaddy exist', NoticeTypeEnum.error);
  				reject(false)
  			}
  		}, 1000)
  	});
  }
}

const authStore = new AuthStore();
export default authStore;
