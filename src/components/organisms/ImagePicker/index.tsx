import React, {ReactElement, useContext, useState} from 'react';
import {AI, ButtonTypes, JC, TextAlign} from '@types';
import {scaleSize} from '@styles/mixins';
import {Button, Flex, Text, Image} from '@components';
import {ImageIcon} from '@icons';
import {Colors, TextFamily, AppContext} from '@styles/base';
import {Props} from './interfaces';
import {pickImage} from '@utils';
import {TouchableOpacity} from 'react-native';

const ImagePicker = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const [img, setImg] = useState('');
 
	return (
		<Button
			full
			type={ButtonTypes.EMPTY}
			empty
			click={() => {pickImage((uri) => setImg(uri))}}
			styles={{
				height: scaleSize(200),
				borderColor: colors.INACTIVE,
				borderWidth: img ? 0 : 1,
				marginBottom: scaleSize(props.bottom || 0),
				borderStyle: 'dashed',
				borderRadius: 10,
				overflow: 'hidden',
				position: 'relative'
			}}
		>
			{
				img ? (
					<Image resizeMode={'cover'} style={{width: '100%', height: '100%'}} source={{uri: img}}  />
				) : (
					<Flex full ai={AI.center} jc={JC.center}>
						<ImageIcon scale={3} />
    
						<Text
							family={TextFamily.SEMIBOLD}
							styles={{marginTop: scaleSize(20)}}
							color={Colors.FONT_SECOND}
							textAlign={TextAlign.center}>
              Choose Image
						</Text>
					</Flex>
				)
			}
		</Button>
	);
};

export default ImagePicker;
