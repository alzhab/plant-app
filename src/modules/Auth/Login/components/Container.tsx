import React, {ReactElement} from 'react';
import {AI, JC} from '@types';
import {Flex} from '@components';

const Container = (props: {children: any}): ReactElement => {
	return (
		<Flex full size={1} jc={JC.center} ai={AI.center}>
			{props.children}
		</Flex>
	);
};

export default Container;
