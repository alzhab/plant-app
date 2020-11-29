import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		search: {
			position: 'relative',
		}
	});
};
