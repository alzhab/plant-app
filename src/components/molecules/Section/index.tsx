import React, {ReactElement} from 'react';
import {TextFamily, TextSize} from '@styles/base';
import {Flex, Text} from '../../atoms';
import {AI, JC} from '@types';
import {Props} from './interfaces';
import {scaleSize} from '@styles/mixins';

const Section = (props: Props): ReactElement => {
	return (
	  <Flex full styles={{marginBottom: scaleSize(props.bottom ? props.bottom : 0) }}>
			<Flex dir={'row'} full ai={AI.center} jc={JC.spaceBetween} styles={{marginBottom: 18}}>
				<Text
					family={TextFamily.BOLD}
					size={TextSize.extraLarge}>
					{props.title}
				</Text>
   
				{props.right ? props.right() : null}
			</Flex>
   
			{props.children}
		</Flex>
	);
};

export default Section;
