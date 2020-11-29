import React, {Component, ReactElement} from 'react';
import {Flex, Header} from '@components';
import {State} from './interfaces';
import {Form, Message} from './components';
import {scaleSize} from '@styles/mixins';
import {ScrollView} from 'react-native';

class Index extends Component {
  state: State = {
  	search: ''
  };
  
  render(): ReactElement {
  	return (
  		<>
  			<Header back title={'John Doe'} />
    
  			<Flex size={1} container>
  				<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop: scaleSize(36), }} style={{width: '100%', flex: 1}}>
  					<Message />
  					<Message my />
  					<Message />
  					<Message />
  					<Message />
  					<Message my />
  				</ScrollView>
  			</Flex>
     
  			<Form/>
  		</>
  	);
  }
}

export default Index;
