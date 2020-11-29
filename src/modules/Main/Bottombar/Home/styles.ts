import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => StyleSheet.create({
	weatherContainer: {
		paddingTop: scaleSize(16),
		paddingBottom: scaleSize(28),
		backgroundColor: colors.SECOND_BG,
		borderBottomEndRadius: scaleSize(20),
		borderBottomStartRadius: scaleSize(20),
		marginBottom: scaleSize(24)
	},
	noShedule: {
	  backgroundColor: colors.THIRD_BG,
		borderRadius: 6,
		paddingVertical: 16
	}
});

