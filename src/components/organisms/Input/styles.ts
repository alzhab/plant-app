import {StyleSheet} from 'react-native';
import {boxShadow, scaleSize} from '@styles/mixins';
import {ColorsIN, TextFamily, TextSize} from '@styles/base';

export const getStyles = (colors: ColorsIN) => StyleSheet.create({
	inputItem: {
		backgroundColor: colors.SECOND_BG,
		paddingHorizontal: scaleSize(8),
		borderRadius: 10,
		position: 'relative',
	},
	input: {
	  width: '100%',
		fontSize: TextSize.medium,
		color: colors.FONT,
		fontFamily: TextFamily.SEMIBOLD
	},
	textArea: {
	  textAlign: 'left',
		textAlignVertical: 'top'
	},
	inputError: {
	  borderBottomColor: colors.ERROR,
		color: colors.ERROR
	},
	error: {
	  position: 'absolute',
	},
	icon: {
	  width: 32,
		height: 32,
		backgroundColor: colors.MAIN_BG,
		marginRight: scaleSize(16),
		borderRadius: 6
	}
});

