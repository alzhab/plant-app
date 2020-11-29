import React, {ReactElement} from 'react';
import {Flex} from '@components';
import {AI, JC} from '@types';
import Indicator from './Indicator';

const Indicators = (props: { active: number, count: number }): ReactElement => {
	return (
		<Flex dir={'row'} ai={AI.center} jc={JC.center}>
			{
				Array(props.count).fill('').map((_, index) => {
					const isActive = index + 1 === props.active;
     
					return (
						<Indicator isActive={isActive} key={index.toString()} />
					);
				})
			}
		</Flex>
	);
};

export default Indicators;
