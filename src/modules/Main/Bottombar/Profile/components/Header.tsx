import React, {ReactElement, useContext} from 'react';
import {Flex, IconBox, Image, Text} from '@components';
import {getStyles} from '../styles';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {AI, JC, TextAlign} from '@types';
import {scaleSize} from '@styles/mixins';
import {Group, GroupEnter} from '@icons';

const Header = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full styles={styles.header} ai={AI.center}>
			<Flex styles={styles.avatar}>
				<Image source={{
					uri: 'https://1.bp.blogspot.com/-odM0nuGBJ2o/UbLqW1z_XSI/AAAAAAAADPw/C5EgIPP6KWQ/s1600/19137d_blue_girl.jpg',
				}}
				style={{width: '100%', height: '100%'}}
				resizeMode={'cover'}
				/>
			</Flex>
   
			<Text
				styles={{marginBottom: scaleSize(32)}}
				textAlign={TextAlign.center}
				family={TextFamily.SEMIBOLD}
				size={TextSize.xlarge}>
        Sumantri De Alburqueque
			</Text>
   
			<Flex full ai={AI.center} jc={JC.spaceEvenly} dir={'row'}>
				<IconBox
					icon={{
				  Icon: Group,
						back: Colors.BLUE,
						box: scaleSize(40),
						scale: 2
					}}
					title={{text: '242'}}
					subTitle={{text: 'Following'}} />
				<Flex styles={styles.separator} />
				<IconBox
					icon={{
						Icon: GroupEnter,
						back: Colors.DARKBLUE,
						box: scaleSize(40),
						scale: 2
					}}
					title={{text: '594'}}
					subTitle={{text: 'Follower'}} />
			</Flex>
		</Flex>
	);
};

export default Header;
