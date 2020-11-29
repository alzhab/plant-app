import {action, makeAutoObservable} from 'mobx';

class PopupStore {
  open = false;
  
  constructor() {
  	makeAutoObservable(this)
  }
  
  @action toggleOpen = (): void => {
  	this.open = !this.open;
  }
}

const popupStore = new PopupStore();
export default popupStore;
