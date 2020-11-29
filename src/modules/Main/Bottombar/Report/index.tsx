import React, {Component, ReactElement} from 'react';
import {ArticleCard, Flex,  Section} from '@components';
import {State} from './interfaces';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {FlatList, ScrollView} from 'react-native';
import {Header} from './components'

class Report extends Component {
  state: State = {
  	search: '',
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
  			
  			<Flex container full size={1} styles={{marginTop: scaleSize(24)}}>
  			
  			</Flex>
  		</>
  	);
  }
}

export default Report;
