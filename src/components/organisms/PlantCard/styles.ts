import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {AI} from '@types';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		card: {
			backgroundColor: colors.SECOND_BG,
			borderWidth: 1,
			borderColor: colors.BORDER,
			borderRadius: 6,
			paddingTop: 8,
			paddingBottom: 6,
			paddingHorizontal: 8,
			alignItems: AI.stretch,
		},
		image: {
			height: scaleSize(76),
			borderRadius: 5,
			overflow: 'hidden',
			marginBottom: 8,
			backgroundColor: colors.MAIN_BG
		},
	});
};
