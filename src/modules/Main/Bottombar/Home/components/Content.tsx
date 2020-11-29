import React, {ReactElement} from 'react';
import {ScrollView} from 'react-native';
import {Flex} from '@components';

const Content = (props: {children: any}): ReactElement => {
	return (
		<Flex full size={1}>
			<ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
				{props.children}
			</ScrollView>
		</Flex>
	);
};

export default Content;
