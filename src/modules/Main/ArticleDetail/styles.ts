import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {CONTAINER_HOR_PADDING, CONTAINER_VER_PADDING} from '@styles/spacing';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		author: {
			marginBottom: scaleSize(12)
		},
		authorAvatar: {
			width: scaleSize(24),
			height: scaleSize(24),
			borderRadius: scaleSize(24),
			overflow: 'hidden',
			marginRight: 8
		},
		details: {
			marginBottom: scaleSize(40)
		},
		detailImage: {
			height: scaleSize(200),
			borderRadius: 5,
			overflow: 'hidden',
			marginBottom: 16,
			backgroundColor: colors.MAIN_BG
		},
		form: {
		  position: 'absolute',
			zIndex: 2,
			left: CONTAINER_HOR_PADDING,
			right: CONTAINER_HOR_PADDING,
			bottom: 25,
			backgroundColor: colors.SECOND_BG,
			paddingVertical: scaleSize(10),
			borderRadius: scaleSize(17),
			paddingHorizontal: scaleSize(16),
		},
		input: {
			paddingVertical: scaleSize(0),
			backgroundColor: colors.SECOND_BG,
			width: '75%'
		},
		commentAvatar: {
			width: scaleSize(24),
			height: scaleSize(24),
			borderRadius: scaleSize(24),
			overflow: 'hidden',
			marginRight: 8
		},
		comment: {
		}
	});
};
