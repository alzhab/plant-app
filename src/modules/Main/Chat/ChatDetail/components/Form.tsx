import React, {ReactElement, useContext} from 'react';
import {Flex} from '@components';
import {AI, JC} from '@types';
import {TextInput, TouchableOpacity} from 'react-native';
import {AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {Camera, Clip} from '@icons';

const Form = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex container full dir={'row'} jc={JC.spaceBetween} ai={AI.center} styles={styles.form}>
			<TextInput placeholder={'Type Here...'} value={''} onChangeText={value => {}} style={styles.input} />
			
			<TouchableOpacity onPress={() => {}}>
				<Camera scale={2} />
			</TouchableOpacity>
   
			<TouchableOpacity onPress={() => {}}>
				<Clip scale={2} />
			</TouchableOpacity>
		</Flex>
	);
};

export default Form;
