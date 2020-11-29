import React, {ReactElement} from 'react';
import {AI, JC} from '@types';
import Image from '@assets/images/forgot_icon.svg';
import {Flex} from '@components';

const Header = (): ReactElement => {
	return (
		<Flex full size={0.7} jc={JC.center} ai={AI.center}>
			<Image />
		</Flex>
	);
};

export default Header;
