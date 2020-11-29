import React, {Component, ReactElement} from 'react';
import {NavigationProps} from '@types';
import {FormValues, State} from './interfaces';
import {Container, Form, Header} from './components';

class ForgotPassword extends Component<NavigationProps> {
  state: State = {
  
  };
  
  onSubmit(data: FormValues) {
  	console.info('email: ', data.email);
  	console.info('password: ', data.password)
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

export default ForgotPassword;
