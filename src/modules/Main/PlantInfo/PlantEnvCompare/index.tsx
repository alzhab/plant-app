import React, {Component, ReactElement} from 'react';
import {Flex, Header, Text} from '@components';
import {AI, JC} from '@types';

class PlantEnvCompare extends Component {
	render(): ReactElement {
		return (
		  <>
				<Header close title={'Compare Environment '} />
    
				<Flex ai={AI.center} jc={JC.center} full size={1}>
					<Text>PLANTDETAIl</Text>
				</Flex>
			</>
		);
	}
}

export default PlantEnvCompare;
