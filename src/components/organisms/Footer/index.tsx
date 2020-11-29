import React, {ReactElement, useContext} from 'react';
import {Button, Flex} from '@components';
import {TextFamily, TextSize, AppContext} from '@styles/base';
import {getStyles} from './styles';

const Footer = (props: {text: string, click: () => void}): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full styles={styles.footerContainer} container>
			<Button family={TextFamily.BOLD} click={() => props.click()} full title={props.text} size={TextSize.large} />
		</Flex>
	);
};

export default Footer;
