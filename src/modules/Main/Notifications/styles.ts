import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		card: {
			paddingVertical: scaleSize(8),
			paddingHorizontal: scaleSize(8),
			borderRadius: 6,
			backgroundColor: colors.SECOND_BG,
			marginBottom: scaleSize(16)
		}
	});
};
