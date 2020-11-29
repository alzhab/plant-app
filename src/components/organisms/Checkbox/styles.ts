import {StyleProp, StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {ColorsIN} from '@styles/base';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		error: {
			position: 'absolute',
			bottom: -scaleSize(20),
		},
		checkboxContainer: {
			width: scaleSize(15),
			height: scaleSize(15),
			borderRadius: scaleSize(4),
			borderWidth: 1,
			borderColor: colors.PRIMARY,
		},
	});
};
