import React, {ReactElement, useContext} from 'react';
import {Colors, TextFamily, AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {Flex, Image, Text} from '@components';
import {AI, JC} from '@types';
import {scaleSize} from '@styles/mixins';

const Comment = (props: {bottom?: number}): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full styles={{marginBottom: scaleSize(props.bottom || 0)}}>
			<Flex full dir={'row'} ai={AI.center} jc={JC.spaceBetween} styles={{marginBottom: 8}}>
				<Flex dir={'row'} ai={AI.center}>
					<Flex styles={styles.commentAvatar}>
						<Image source={{
							uri: 'https://1.bp.blogspot.com/-odM0nuGBJ2o/UbLqW1z_XSI/AAAAAAAADPw/C5EgIPP6KWQ/s1600/19137d_blue_girl.jpg',
						}}
						style={{width: '100%', height: '100%'}}
						resizeMode={'cover'}
						/>
					</Flex>
    
					<Text family={TextFamily.SEMIBOLD}>Gregorius Mendel</Text>
				</Flex>
    
				<Text color={Colors.FONT_SECOND}>3 hr ago</Text>
			</Flex>
   
			<Text styles={{marginBottom: 10}}>Hi Fellas ! Hope we can provide each other</Text>
		</Flex>
	);
};

export default Comment;
