import React, {ReactElement, useState} from 'react';
import {Flex, Header, NotButton} from '@components';
import {JC, Navigations} from '@types';
import {Bell, Calendare, Chat} from '@icons';
import {HeaderProps} from '../interfaces';
import {useNavigation} from '@react-navigation/native';

const HomeHeader = (props: HeaderProps): ReactElement => {
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
				width: '70%',
				choose: (search) => {
					setShowDropdown(false);
					props.onChangeSearch(search)
				},
				showDropdown
			}}
			right={() => (
				<Flex dir={'row'} jc={JC.spaceBetween} styles={{width: '25%'}}>
					<NotButton click={() => navigation.navigate(Navigations.Chat)} active Icon={Chat} />
					<NotButton click={() => {}} Icon={Calendare} />
					<NotButton click={() => navigation.navigate(Navigations.Notifications)} active Icon={Bell} />
				</Flex>
			)}
		/>
	);
};

export default HomeHeader;
