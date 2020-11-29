import React, {ReactElement, useContext} from 'react';
import {AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {Flex, Section, Text} from '@components';
import Recommendation from './Recommendation';
import Shedule from './Shedule';

const Info = (props: {have: boolean}): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex container full styles={styles.infoContainer}>
			<Section title={'Tomatoes'} bottom={32}>
				<Text lineHeight={25}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
				</Text>
			</Section>
   
			{
				props.have
					? <Shedule />
					: <Recommendation />
			}
		</Flex>
	);
};

export default Info;
