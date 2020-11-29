import React, {ReactElement, useContext} from 'react';
import {Button, Flex, Text} from '@components';
import {AI, ButtonTypes, JC} from '@types';
import {Colors, TextFamily, AppContext} from '@styles/base';
import {Calendare, Shedule} from '@icons';
import {scaleSize} from '@styles/mixins';

const HorCalendare = (): ReactElement => {
	const {colors} = useContext(AppContext);
 
	return (
		<Flex dir={'row'} full ai={AI.stretch} jc={JC.spaceBetween}>
			<Button click={() => {}} empty styles={{paddingVertical: 8, width: scaleSize(43)}}>
				<Text color={Colors.SECOND_BG} styles={{marginBottom: 5}} family={TextFamily.BOLD}>15</Text>
				<Text color={Colors.SECOND_BG} family={TextFamily.REGULAR}>Sun</Text>
			</Button>
   
			<Button click={() => {}} empty styles={{backgroundColor: colors.MAIN_BG,paddingVertical: 8, width: scaleSize(43)}}>
				<Text color={Colors.FONT} styles={{marginBottom: 5}} family={TextFamily.BOLD}>15</Text>
				<Text color={Colors.FONT} family={TextFamily.REGULAR}>Sun</Text>
			</Button>
   
			<Button click={() => {}} empty styles={{backgroundColor: colors.MAIN_BG,paddingVertical: 8, width: scaleSize(43)}}>
				<Text color={Colors.FONT} styles={{marginBottom: 5}} family={TextFamily.BOLD}>15</Text>
				<Text color={Colors.FONT} family={TextFamily.REGULAR}>Sun</Text>
			</Button>
   
			<Button click={() => {}} empty styles={{backgroundColor: colors.MAIN_BG,paddingVertical: 8, width: scaleSize(43)}}>
				<Text color={Colors.FONT} styles={{marginBottom: 5}} family={TextFamily.BOLD}>15</Text>
				<Text color={Colors.FONT} family={TextFamily.REGULAR}>Sun</Text>
			</Button>
   
			<Button click={() => {}} empty styles={{backgroundColor: colors.MAIN_BG,paddingVertical: 8, width: scaleSize(43)}}>
				<Text color={Colors.FONT} styles={{marginBottom: 5}} family={TextFamily.BOLD}>15</Text>
				<Text color={Colors.FONT} family={TextFamily.REGULAR}>Sun</Text>
			</Button>
   
			<Button
				click={() => {}}
				empty
				styles={{
			    paddingVertical: 8,
					width: scaleSize(43),
					backgroundColor: colors.MAIN_BG
				}}>
				<Shedule color={colors.PRIMARY} scale={1.4} />
			</Button>
		</Flex>
	);
};

export default HorCalendare;
