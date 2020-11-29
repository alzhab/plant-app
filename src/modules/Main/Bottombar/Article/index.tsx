import React, {Component, ReactElement} from 'react';
import {ArticleCard, Flex,  Section} from '@components';
import {State} from './interfaces';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {FlatList, ScrollView} from 'react-native';
import {Header} from './components'

class Article extends Component {
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
  				<ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
  					<Section bottom={32} title={'Recommended Article'}>
  						<Flex full>
  							<FlatList
  								style={{width: '100%'}}
  								horizontal
  								ItemSeparatorComponent={() => <Flex styles={{width: scaleSize(16)}} />}
  								showsHorizontalScrollIndicator={false}
  								keyExtractor={(_, index) => index.toString()}
  								data={Array(5).fill('')}
  								renderItem={() => (
  									<ArticleCard
  										width={WINDOW_WIDTH * 0.75}
  									/>
  							)} />
  						</Flex>
  					</Section>
       
  					<Section bottom={32} title={'Featured Article'}>
  						<Flex full size={1}>
  							<ArticleCard mini bottom={24} />
  							<ArticleCard mini bottom={24} />
  							<ArticleCard mini bottom={24} />
  							<ArticleCard mini bottom={24} />
  						</Flex>
  					</Section>
  				</ScrollView>
  			</Flex>
  		</>
  	);
  }
}

export default Article;
