import {Platform, StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';
import {AI, JC} from '@types';

export const getStyles = (colors: ColorsIN): StyleProp<any> => StyleSheet.create({
	form: {
		backgroundColor: colors.SECOND_BG,
		paddingTop: scaleSize(16),
		paddingBottom: 25
	},
	input: {
	  backgroundColor: colors.MAIN_BG,
		borderRadius: scaleSize(17),
		paddingVertical: scaleSize(7),
		paddingHorizontal: scaleSize(16),
		width: '75%'
	},
	messageAvatar: {
		width: scaleSize(32),
		height: scaleSize(32),
		borderRadius: scaleSize(32),
		overflow: 'hidden',
		marginRight: 8
	},
	messageText: {
		paddingVertical: 12,
		paddingHorizontal: 12,
		borderRadius: scaleSize(12),
		width: '65%'
	}
});

