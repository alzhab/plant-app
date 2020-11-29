import React, {Component, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import {Loading, Modal, NoticeMessage, Popup} from '@components';
import {AppContext} from '@styles/base';
import {authStore, loadingStore, modalStore, noticeMessageStore, popupStore} from '@stores';
import {Navigations} from '@types';
import {Onboarding} from '@modules';
import AuthNavigaiton from '@navigations/Auth';
import MainNavigaiton from '@navigations/Main';

const navigations = [
	{
		name: Navigations.Onboarding,
		component: Onboarding
	},
	{
		name: Navigations.Auth,
		component: AuthNavigaiton
	},
	{
		name: Navigations.Main,
		component: MainNavigaiton
	}
];

const Stack = createStackNavigator();

@observer
class Container extends Component {
  static contextType = AppContext;
  
  render(): ReactElement {
  	const {colors, showIntro} = this.context;
  
  	const isAuthorized = authStore.user !== null;
  	const firstScreen = isAuthorized ? Navigations.Main : Navigations.Auth;
  	
  	return (
  		<>
  			<NavigationContainer theme={{
  				dark: false, colors: {
  					primary: colors.PRIMARY,
  					background: colors.MAIN_BG,
  					card: colors.MAIN_BG,
  					text: colors.FONT,
  					border: colors.FONT,
  					notification: colors.FONT
  				}
  			}}>
  				<Stack.Navigator headerMode={'none'} initialRouteName={showIntro ? Navigations.Onboarding : firstScreen}>
  					{
  						navigations.map(route => (
  							<Stack.Screen key={route.name} name={route.name} component={route.component} />
  						))
  					}
  				</Stack.Navigator>
  			</NavigationContainer>
     
  			<Loading loading={loadingStore.loading}/>
  			<NoticeMessage text={noticeMessageStore.text} show={noticeMessageStore.show} type={noticeMessageStore.type}/>
  			<Modal full={modalStore.modalProps.full} show={modalStore.modalProps.show} empty={modalStore.modalProps.empty}
  				closeModal={() => modalStore.closeModal()}>
  				{modalStore.modalProps.children()}
  			</Modal>
  		</>
  	);
  }
}

export default Container;
