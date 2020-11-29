import {Platform, StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';
import {AI, JC} from '@types';

export const getStyles = (colors: ColorsIN): StyleProp<any> => StyleSheet.create({
	card: {
		backgroundColor: colors.SECOND_BG,
		borderWidth: 1,
		borderColor: colors.BORDER,
		borderRadius: 6,
		paddingTop: 8,
		paddingBottom: 8,
		paddingHorizontal: 8,
		alignItems: AI.stretch,
	},
	image: {
		height: scaleSize(150),
		borderRadius: 5,
		overflow: 'hidden',
		marginBottom: 8,
		backgroundColor: colors.MAIN_BG
	},
	cardMini: {
		alignItems: AI.stretch,
	},
	imageMini: {
		width: scaleSize(72),
		height: scaleSize(72),
		borderRadius: 4,
		overflow: 'hidden',
		marginRight: scaleSize(16)
	}
});

