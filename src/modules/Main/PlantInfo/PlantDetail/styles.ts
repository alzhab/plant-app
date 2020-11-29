import {StyleProp, StyleSheet} from 'react-native';
import {ColorsIN} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
	return StyleSheet.create({
		carousel: {
			marginBottom: scaleSize(16)
		},
		activeSlide: {
			height: scaleSize(200),
			borderRadius: 4,
			marginBottom: 16,
			overflow: 'hidden'
		},
		slide: {
		  width: scaleSize(64),
			height: scaleSize(64),
			borderRadius: 4,
			overflow: 'hidden'
		},
		infoContainer: {
			paddingTop: scaleSize(16),
			paddingBottom: scaleSize(28),
			backgroundColor: colors.SECOND_BG,
			borderBottomEndRadius: scaleSize(20),
			borderBottomStartRadius: scaleSize(20),
		},
		badgeContainer: {
		  paddingVertical: scaleSize(16),
			marginBottom: 10,
			backgroundColor: colors.SECOND_BG
		},
		footerContainer: {
			paddingVertical: scaleSize(16),
			backgroundColor: colors.SECOND_BG,
			...boxShadow()
		},
	});
};
