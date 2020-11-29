import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		textContainer: {
			paddingVertical: 10,
			borderRadius: 6,
			width: '30%',
		},
		iconContainer: {
			borderRadius: 6,
			paddingVertical: 5,
			paddingHorizontal: 8,
			width: '65%',
		}
	});
};
