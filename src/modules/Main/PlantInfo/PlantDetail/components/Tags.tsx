import React, {ReactElement, useContext} from 'react';
import {FlatList} from 'react-native';
import {Badge, Flex} from '@components';
import {scaleSize} from '@styles/mixins';
import {Colors, AppContext} from '@styles/base';
import {getStyles} from '../styles';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

const Tags = (props: {tags: string[]}): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full styles={styles.badgeContainer}>
			<FlatList
				style={{paddingHorizontal: CONTAINER_HOR_PADDING, width: '100%'}}
				horizontal
				ItemSeparatorComponent={() => <Flex styles={{width: scaleSize(14)}} />}
				keyExtractor={(_, index) => index.toString()}
				data={props.tags}
				renderItem={({item}) => <Badge hor={24} title={{text: item, color: Colors.FONT}} back={Colors.PRIMARY_SECOND} />} />
		</Flex>
	);
};

export default Tags;
