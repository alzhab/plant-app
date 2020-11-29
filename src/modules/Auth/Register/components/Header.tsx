import React, {ReactElement} from 'react';
import {AI, JC} from '@types';
import RegisterImage from '@assets/images/register_icon.svg';
import CheckEmailImage from '@assets/images/confirm_email_icon.svg';
import {Flex} from '@components';

const Header = (props: {checkEmail: boolean}): ReactElement => {
	const Image = props.checkEmail ? CheckEmailImage : RegisterImage;
 
	return (
		<Flex full size={0.7} jc={JC.center} ai={AI.center}>
			<Image />
		</Flex>
	);
};

export default Header;
