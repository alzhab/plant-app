import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';
import {AI, JC} from '@types';

export const getStyles = (colors: ColorsIN): StyleProp<any> => StyleSheet.create({
	card: {
		paddingVertical: scaleSize(12),
	},
	chat: {
	  width: '80%'
	},
	avatar: {
		width: scaleSize(48),
		height: scaleSize(48),
		borderRadius: scaleSize(48),
		marginRight: 12,
		overflow: 'hidden'
	},
	chatInfo: {
 
	},
	newChat: {
	  position: 'absolute',
		bottom: scaleSize(32),
		right: scaleSize(24),
		width: scaleSize(64),
		height: scaleSize(64),
		borderRadius: scaleSize(64) / 2,
		backgroundColor: colors.PRIMARY,
		alignItems: AI.center,
		justifyContent: JC.center,
		...boxShadow()
	}
});

