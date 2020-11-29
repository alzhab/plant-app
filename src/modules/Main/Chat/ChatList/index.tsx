import React, {Component, ReactElement} from 'react';
import {ScrollView} from 'react-native';
import {Flex} from '@components';
import {State} from './interfaces';
import {Card, NewChat, Header} from './components';
import {scaleSize} from '@styles/mixins';

class Index extends Component {
  state: State = {
  	search: ''
  };
  
  onSearch(search: string): void {
  	this.setState({search})
  }
  
  render(): ReactElement {
  	return (
  		<>
  			<Header
  				search={this.state.search}
  				onChangeSearch={this.onSearch.bind(this)}
  			/>
    
  			<Flex container size={1} styles={{marginTop: scaleSize(12), position: 'relative'}}>
  				<ScrollView style={{flex: 1, width: '100%'}} showsVerticalScrollIndicator={false}>
  					<Card/>
  					<Card/>
  					<Card/>
  					<Card/>
  					<Card/>
  					<Card/>
  					<Card/>
  					<Card/>
  					<Card/>
  					<Card/>
  				</ScrollView>
  				<NewChat/>
  			</Flex>
  		</>
  	);
  }
}

export default Index;
