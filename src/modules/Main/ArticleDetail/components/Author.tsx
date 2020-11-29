import React, {ReactElement, useContext} from 'react';
import {Colors, TextFamily, AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {AI, JC} from '@types';
import {Button, Flex, Image, Text} from '@components';
import {Plus} from '@icons';

const Author = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full dir={'row'} ai={AI.center} jc={JC.spaceBetween} styles={styles.author}>
			<Flex dir={'row'} ai={AI.center}>
				<Flex styles={styles.authorAvatar}>
					<Image source={{
						uri: 'https://1.bp.blogspot.com/-odM0nuGBJ2o/UbLqW1z_XSI/AAAAAAAADPw/C5EgIPP6KWQ/s1600/19137d_blue_girl.jpg',
					}}
					style={{width: '100%', height: '100%'}}
					resizeMode={'cover'}
					/>
				</Flex>
    
				<Text family={TextFamily.SEMIBOLD}>Gregorius Mendel</Text>
			</Flex>
   
			<Button click={() => {}}>
				<Flex dir={'row'} ai={AI.center}>
					<Plus color={colors.SECOND_BG} scale={1.6} />
					<Text styles={{marginLeft: 10}} color={Colors.SECOND_BG} family={TextFamily.SEMIBOLD}>Follow</Text>
				</Flex>
			</Button>
		</Flex>
	);
};

export default Author;
