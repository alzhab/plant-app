import React, {Component, ReactElement} from 'react';
import {NavigationProps, Navigations} from '@types';
import {FormValues, State} from './interfaces';
import {Container, Form, Header} from './components';
import CheckEmail from './components/CheckEmaiil';
import auth from '@react-native-firebase/auth';
import {observer} from 'mobx-react';
import {authStore, loadingStore, noticeMessageStore} from '@stores';
import {NoticeTypeEnum} from '../../../stores/NoticeMessageStore';

@observer
class Register extends Component<NavigationProps> {
  state: State = {
  	checkEmail: false
  };
  
  onSubmit(data: FormValues) {
  	const navigation = this.props.navigation;
  
  	authStore.registerUser(data).then(authorized => {
  		if(authorized) {
  			navigation.navigate(Navigations.Main)
  		}
  	})
  }
  
  render(): ReactElement {
  	return (
  			<Container>
  				<Header checkEmail={this.state.checkEmail} />
      
  			{
  				this.state.checkEmail
  					? <CheckEmail />
  					: <Form submit={this.onSubmit.bind(this)} />
  			}
  			</Container>
  	);
  }
}

export default Register;
