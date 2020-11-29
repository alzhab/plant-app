import React, {ReactElement, useContext} from 'react';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {Flex, Image, Text} from '@components';
import {scaleSize} from '@styles/mixins';

const Detail = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full styles={styles.details}>
			<Flex full styles={styles.detailImage}>
				<Image resizeMode={'cover'} style={{width: '100%', height: '100%'}} source={{uri: 'https://www.gammvert.fr/conseils/sites/default/files/styles/main_image/public/2020-03/AdobeStock_250149090-tomate.jpg?itok=YSd2jz7k'}}  />
			</Flex>
   
			<Text styles={{marginBottom: 8}} family={TextFamily.BOLD} size={TextSize.xlarge}>
        How to plant Tomatoes properly without worry
			</Text>
   
			<Text styles={{marginBottom: 16}} color={Colors.FONT_SECOND}>
        December 21, 2018
			</Text>
   
			<Text size={TextSize.large} styles={{lineHeight: 25}}>
				{
					`Monotonectally customize robust leadership skills whereas next-generation outsourcing. Distinctively utilize mission-critical relationships via worldwide functionalities. Energistically transition parallel technologies without go forward technologies. Efficiently predominate multidisciplinary collaboration and idea-sharing with market-driven processes. Phosfluorescently transition intermandated innovation after web-enabled technologies.
					
Intrinsicly aggregate sticky supply chains rather than distinctive applications. Energistically communicate equity invested ideas rather than client-centered value. Compellingly architect.
          `
				}
			</Text>
		</Flex>
	);
};

export default Detail;
