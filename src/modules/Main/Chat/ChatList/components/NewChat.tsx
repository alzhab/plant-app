import React, {ReactElement, useContext} from 'react';
import {Flex} from '@components';
import {AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {AI, JC} from '@types';
import {Chat} from '@icons';
import {TouchableOpacity} from 'react-native';

const NewChat = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<TouchableOpacity style={styles.newChat} onPress={() => {}}>
			<Chat color={colors.SECOND_BG} scale={1.6} />
		</TouchableOpacity>
	);
};

export default NewChat;
