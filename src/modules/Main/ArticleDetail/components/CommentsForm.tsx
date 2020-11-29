import React, {ReactElement, useContext, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {Colors, AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {Flex, Section} from '@components';
import {AI, JC} from '@types';
import {Camera, Clip} from '@icons';

const CommentsForm = (): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full dir={'row'} jc={JC.spaceBetween} ai={AI.center} styles={styles.form}>
			<TextInput placeholder={'Type Comment Here...'} value={''} onChangeText={value => {}} style={styles.input} />
   
			<TouchableOpacity onPress={() => {}}>
				<Camera color={colors.INACTIVE} scale={2} />
			</TouchableOpacity>
   
			<TouchableOpacity onPress={() => {}}>
				<Clip color={colors.INACTIVE} scale={2} />
			</TouchableOpacity>
		</Flex>
	);
};

export default CommentsForm;
