import React, {ReactElement, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {getStyles} from '../styles';
import {Colors, TextSize, AppContext} from '@styles/base';
import {Navigations} from '@types';
import {useNavigation} from '@react-navigation/native';
import {IconBox} from '@components';
import {scaleSize} from '@styles/mixins';

const ListItem = (props: {click?:() => void, route?: Navigations, back: Colors, Icon: any, title: string}): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const navigation = useNavigation();
 
	return (
		<TouchableOpacity style={styles.listItem} onPress={() => {
		  if(props.click) {
		    props.click()
			}else if(props.route) {
				navigation.navigate(props.route)
			}
		}}>
			<IconBox
				right={16}
				icon={{
				  Icon: props.Icon,
					scale: 1.6,
					box: scaleSize(32),
					back: props.back
				}}
				title={{
					text: props.title,
					size: TextSize.medium
				}}
				subTitle={{text: ''}} />
		</TouchableOpacity>
	);
};

export default ListItem;
