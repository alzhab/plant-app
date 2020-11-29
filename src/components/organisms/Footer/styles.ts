import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		footerContainer: {
			paddingVertical: scaleSize(16),
			backgroundColor: colors.SECOND_BG,
			...boxShadow()
		},
	});
};
