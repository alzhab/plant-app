import React, {ReactElement, useState} from 'react';
import {Header, NotButton} from '@components';
import {Filter} from '@icons';
import {useNavigation} from '@react-navigation/native';
import {HeaderProps} from '../interfaces';

const ArticleHeader = (props: HeaderProps): ReactElement => {
	const navigation = useNavigation();
	const [showDropdown, setShowDropdown] = useState(false);
 
	return (
		<Header
			searchData={{
				value: props.search,
				onChange: (search) => {
				  if(search.length > 1) {
				    setShowDropdown(true)
					}else {
						setShowDropdown(false)
					}
					props.onChangeSearch(search)
				},
				width: '100%',
				choose: (search) => {
					setShowDropdown(false);
					props.onChangeSearch(search)
				},
				showDropdown
			}}
		/>
	);
};

export default ArticleHeader;
