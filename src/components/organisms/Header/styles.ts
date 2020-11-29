import {Platform, StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => StyleSheet.create({
	header: {
		backgroundColor: colors.SECOND_BG,
		paddingTop: Platform.OS === 'ios' ? scaleSize(47) : scaleSize(17),
		paddingBottom: scaleSize(17),
	},
	search: {
		borderRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: scaleSize(16),
		backgroundColor: colors.MAIN_BG
	},
	searchInput: {
		width: '90%',
		marginLeft: 10,
		paddingVertical: 0
	}
});

