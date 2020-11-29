import React, {Component, ReactElement} from 'react';
import {Flex, Header, Switch, Footer} from '@components';
import {Articles, Carousel, Info, Recommendation, Tags} from './components';
import {ScrollView} from 'react-native';
import {State} from './interface';

const images = [
	'https://www.gammvert.fr/conseils/sites/default/files/styles/main_image/public/2020-03/AdobeStock_250149090-tomate.jpg?itok=YSd2jz7k',
	'https://www.deco.fr/sites/default/files/styles/article_970x500/public/2019-06/shutterstock_608565305.jpg?itok=idNn-og4',
	'https://www.paroles-de-jardiniers.fr/wp-content/uploads/2018/10/maladies-plans-de-tomates.jpg',
	'https://www.gammvert.fr/conseils/sites/default/files/styles/main_image/public/2020-03/AdobeStock_250149090-tomate.jpg?itok=YSd2jz7k',
	'https://www.deco.fr/sites/default/files/styles/article_970x500/public/2019-06/shutterstock_608565305.jpg?itok=idNn-og4',
	'https://www.paroles-de-jardiniers.fr/wp-content/uploads/2018/10/maladies-plans-de-tomates.jpg'
];

class PlantDetail extends Component {
  state: State = {
  	have: false
  };
  
  render(): ReactElement {
	  const have = this.state.have;
	  
  	return (
		  <>
  			<Header
  				back
  				title={'Plants Information'}
  				bottom={16}
  				right={() => (
  					have ? <Switch checked={have} click={() => this.setState({have: !have})}/> : <></>
  				)}
  			/>
    
  			<Flex full size={1}>
  				<ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
  					<Carousel images={images} />
					
  					<Info have={this.state.have}/>
						
  					{
  						have
  							? <Recommendation container ver={32} />
  							: null
  					}
						
  					<Articles light={have}/>
						
  					<Tags tags={['Plant', 'Fruit', 'Homeplant']}/>
						
  					<Footer
  						click={() => this.setState({have: !have})}
  						text={have ? 'Report Your Harvest' : 'Add to My Plants'}/>
  				</ScrollView>
  			</Flex>
  		</>
  	);
  }
}

export default PlantDetail;
