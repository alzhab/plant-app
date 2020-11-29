import React, {Component, ReactElement} from 'react';
import {Flex, Footer, Header, ImagePicker, Input} from '@components';
import {State} from './interfaces';
import {scaleSize} from '@styles/mixins';
import {ScrollView} from 'react-native';

class ArticleCreate extends Component {
  state: State = {
  };
  
  onSearch(search: string): void {
  	this.setState({search})
  }
  
  render(): ReactElement {
  	return (
  	  <>
  			<Header title={'Create Article'} close />
  			
  			<Flex container full size={1} styles={{marginTop: scaleSize(24)}}>
  				<ScrollView style={{width: '100%', flex: 1}}>
  					<ImagePicker bottom={32} />
       
  					<Input bottom={32} floatLabel placeholder={'Title'} onChange={() => {}} value={''}/>
  					<Input textArea bottom={32} floatLabel placeholder={'Description'} onChange={() => {}} value={''}/>
  				</ScrollView>
  			</Flex>
     
  			<Footer text={'Create'} click={() => {}}/>
  		</>
  	);
  }
}

export default ArticleCreate;
