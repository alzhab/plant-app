import {StyleSheet} from 'react-native';
import {boxShadow, scaleSize} from '@styles/mixins';

export const height = scaleSize(24);
export const width = scaleSize(48);

export const styles = StyleSheet.create({
	switch: {
		position: 'relative',
		width,
		height,
		borderRadius: width / 2,
	},
	inactiveSwitch: {
	
	},
	circle: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: height,
		height,
		borderRadius: width / 2,
		...boxShadow()
	},
});
