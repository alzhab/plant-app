import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {CONTAINER_VER_PADDING} from '@styles/spacing';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		header: {
			backgroundColor: colors.SECOND_BG,
			borderBottomEndRadius: scaleSize(20),
			borderBottomStartRadius: scaleSize(20),
			paddingTop: CONTAINER_VER_PADDING,
			paddingBottom: scaleSize(32),
			marginBottom: scaleSize(24)
		},
		avatar: {
		  overflow: 'hidden',
			width: scaleSize(96),
			height: scaleSize(96),
			borderRadius: scaleSize(96) / 2,
			backgroundColor: '#000',
			marginBottom: scaleSize(24)
		},
		separator: {
		  width: 1,
			height: scaleSize(40),
			backgroundColor: colors.INACTIVE,
			alignSelf: 'center'
		},
		listItem: {
		  width: '100%',
			backgroundColor: colors.SECOND_BG,
			padding: scaleSize(16),
			borderRadius: scaleSize(6),
			marginBottom: scaleSize(16)
		}
	});
};
