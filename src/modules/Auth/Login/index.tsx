import React, {Component, ReactElement} from 'react';
import {NavigationProps, Navigations} from '@types';
import {FormValues, State} from './interfaces';
import {Container, Form, Header} from './components';
import {authStore} from '@stores';

class Login extends Component<NavigationProps> {
  state: State = {
  
  };
  
  onSubmit(formValues: FormValues) {
  	const navigation = this.props.navigation;
  	
  	authStore.loginUser(formValues).then(authorized => {
  		console.log(authorized);
  		if(authorized) {
  	    navigation.navigate(Navigations.Main)
  		}
  	})
  }
  
  render(): ReactElement {
  	return (
  			<Container>
  				<Header />
      
  				<Form submit={this.onSubmit.bind(this)} />
  			</Container>
  	);
  }
}

export default Login;
